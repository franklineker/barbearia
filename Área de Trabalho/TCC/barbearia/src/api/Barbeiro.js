const db = require('../config/db.json')

module.exports = app => {
   
    const barbeiros = db.barbeiros

    const getBarbeiros = (req, res) => {
        if(barbeiros){
            return res.send(barbeiros)
        }else{
            return res.status(404).send("Não encontrado.")
        }
    }

    const getBarbeiroByCPF = (req, res) => {
        const cpf = req.params.cpf
        const barbeiro = barbeiros.filter(b => b.cpf == cpf)[0]

        if(barbeiro){
            return res.send(barbeiro)
        }else {
            return  res.status(404).send('Barbeiro não encontrado.')
        }
    }

    const setBarbeiro = (req, res) => {
        
        const barbeiro = {...req.body}
        const possibleBarbeiro = barbeiros.filter(b => b.cpf == barbeiro.cpf)[0]
        console.log(possibleBarbeiro)

        if (possibleBarbeiro){
            return res.status(400).send("Barbeiro já existe.")
        }else {
            barbeiros.push(barbeiro)
            return res.status(201).send(barbeiro)
        }

    }

    const updateBarbeiro = (req, res) => {
        
        const cpf = req.params.cpf
        const newBarbeiro = {"cpf": cpf, ...req.body}
        const currentBarbeiro = barbeiros.filter(b => b.cpf == cpf)[0]

        if(currentBarbeiro){
            const index = barbeiros.findIndex(b => b.cpf == cpf)
            barbeiros.splice(index, 1, newBarbeiro)
            return res.send(newBarbeiro)
        }else{
            return res.status(404).send('Barbeiro não encontrado')
        }
    }

    const deleteBarbeiro = (req, res) => {

        const cpf = req.params.cpf
        const barbeiro = barbeiros.filter(b => b.cpf == cpf)[0]

        if(barbeiro){
            const index = barbeiros.findIndex(b => b.cpf == cpf)
            barbeiros.splice(index, 1)
            return res.send(barbeiro)
        }else{
            return res.status(404).send('Barbeiro não encontrado')
        }
    }

    return { getBarbeiros, getBarbeiroByCPF, setBarbeiro, updateBarbeiro, deleteBarbeiro }
}
