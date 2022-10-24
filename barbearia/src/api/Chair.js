const db = require('../config/db.json')

module.exports = app => {

    const chairs = db.chairs

    const getChairs = (req, res) => {
        if(chairs){
            return res.send(chairs)
        }else{
            return res.status(404).send("Não encontrado.")
        }
    }

    const getChairByID = (req, res) => {
        const id = req.params.id
        const chair = chairs.filter(c => c.id == id)[0]

        if(chair){
            return res.send(chair)
        }else {
            return  res.status(404).send('Chair não encontrada.')
        }
    }

    const setChair = (req, res) => {
        const chair = {...req.body}
        const possibleChair = chairs.filter(c => c.id == chair.id)[0]

        if (possibleChair){
            return res.status(400).send("Chair já existe.")
        }else {
            chairs.push(chair)
            return res.status(201).send(chair)
        }
    }

    const updateChair = (req, res) => {
        const id = req.params.id
        const newChair = {"id": Number(id), ...req.body}
        const currentChair = chairs.filter(c => c.id == id)[0]

        if(currentChair){
            const index = chairs.findIndex(c => c.id == id)
            chairs.splice(index, 1, newChair)
            return res.send(newChair)
        }else{
            return res.status(404).send('Chair não encontrada')
        }
    }

    const deleteChair = (req, res) => {
        const id = req.params.id
        const chair = chairs.filter(c => c.id == id)[0]

        if(chair){
            const index = chairs.findIndex(c => c.id == id)
            chairs.splice(index, 1)
            return res.send(chair)
        }else{
            return res.status(404).send('Chair não encontrada')
        }
    }

    return { getChairs, getChairByID, setChair, updateChair, deleteChair }
}
