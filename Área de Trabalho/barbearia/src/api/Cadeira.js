const db = require('../config/db.json')

module.exports = app => {

    const cadeiras = db.cadeiras

    const getCadeiras = (req, res) => {
        if(cadeiras){
            return res.send(cadeiras)
        }else{
            return res.status(404).send("Não encontrado.")
        }
    }

    const getCadeiraByID = (req, res) => {
        const id = req.params.id
        const cadeira = cadeiras.filter(c => c.id == id)[0]

        if(cadeira){
            return res.send(cadeira)
        }else {
            return  res.status(404).send('Cadeira não encontrada.')
        }
    }

    const setCadeira = (req, res) => {
        const cadeira = {...req.body}
        const possibleCadeira = cadeiras.filter(c => c.id == cadeira.id)[0]

        if (possibleCadeira){
            return res.status(400).send("Cadeira já existe.")
        }else {
            cadeiras.push(cadeira)
            return res.status(201).send(cadeira)
        }
    }

    const updateCadeira = (req, res) => {
        const id = req.params.id
        const newCadeira = {"id": Number(id), ...req.body}
        const currentCadeira = cadeiras.filter(c => c.id == id)[0]

        if(currentCadeira){
            const index = cadeiras.findIndex(c => c.id == id)
            cadeiras.splice(index, 1, newCadeira)
            return res.send(newCadeira)
        }else{
            return res.status(404).send('Cadeira não encontrada')
        }
    }

    const deleteCadeira = (req, res) => {
        const id = req.params.id
        const cadeira = cadeiras.filter(c => c.id == id)[0]

        if(cadeira){
            const index = cadeiras.findIndex(c => c.id == id)
            cadeiras.splice(index, 1)
            return res.send(cadeira)
        }else{
            return res.status(404).send('Cadeira não encontrada')
        }
    }

    return { getCadeiras, getCadeiraByID, setCadeira, updateCadeira, deleteCadeira }
}
