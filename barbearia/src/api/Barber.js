const db = require('../config/db.json')

module.exports = app => {
   
    const barbers = db.barbers

    const getBarbers = (req, res) => {
        if(barbers){
            return res.send(barbers)
        }else{
            return res.status(404).send("Não encontrado.")
        }
    }

    const getBarberByCPF = (req, res) => {
        const cpf = req.params.cpf
        const barber = barbers.filter(b => b.cpf == cpf)[0]

        if(barber){
            return res.send(barber)
        }else {
            return  res.status(404).send('Barbeiro não encontrado.')
        }
    }

    const setBarber = (req, res) => {
        
        const barber = {...req.body}
        const possibleBarber = barbers.filter(b => b.cpf == barber.cpf)[0]
        console.log(possibleBarber)

        if (possibleBarber){
            return res.status(400).send("Barbeiro já existe.")
        }else {
            barbers.push(barber)
            return res.status(201).send(barber)
        }

    }

    const updateBarber = (req, res) => {
        
        const cpf = req.params.cpf
        const newBarber = {"cpf": cpf, ...req.body}
        const currentBarber = barbers.filter(b => b.cpf == cpf)[0]

        if(currentBarber){
            const index = barbers.findIndex(b => b.cpf == cpf)
            barbers.splice(index, 1, newBarber)
            return res.send(newBarber)
        }else{
            return res.status(404).send('Barbeiro não encontrado')
        }
    }

    const deleteBarber = (req, res) => {

        const cpf = req.params.cpf
        const barber = barbers.filter(b => b.cpf == cpf)[0]

        if(barber){
            const index = barbers.findIndex(b => b.cpf == cpf)
            barbers.splice(index, 1)
            return res.send(barber)
        }else{
            return res.status(404).send('Barbeiro não encontrado')
        }
    }

    return { getBarbers, getBarberByCPF, setBarber, updateBarber, deleteBarber }
}
