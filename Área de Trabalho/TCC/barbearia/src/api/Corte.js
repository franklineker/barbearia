const db = require('../config/db.json')

module.exports = app => {

    const cortes = db.cortes

    const getCortes = (req, res) => {
        if (cortes){
            return res.status(200).send(cortes)
        }else{
            return res.status(404).send("Não encontrado.")
        }
    }

    const getCorteById = (req, res) => {

        const corteId = req.params.id

        for (let c of cortes) {
            if (c.id == corteId) {
                return res.status(200).send(c)
            }
        }

        return res.status(404).send('Corte não encontrado')
    }

    const setCorte = (req, res) => {
        
        const corte = {...req.body}

        for (let c of cortes) {
            if(c.id == corte.id) {
                return res.status(400).send("Corte já existe")
            }
        }

        cortes.push(corte)
        return res.status(201).send(corte)
    }

    const updateCorte = (req, res) => {

        const corteId = req.params.id
        const corteAtual = cortes.filter(c => c.id == corteId)[0]
        const corteNovo = {"id": Number(corteId),...req.body}

        if (!corteAtual) {
            return res.status(404).send("Corte não encontrado.")
        }else {
            const index = cortes.findIndex(c => c.id == corteId)
            cortes.splice(index, 1, corteNovo)
            return res.status(200).send(corteNovo)
        }

    }

    const deleteCorte = (req, res) => {
        const corteId = req.params.id
        const corteAtual = cortes.filter(c => c.id == corteId)[0]

        if(corteAtual) {
            const index = cortes.findIndex(c => c.id == corteId)
            cortes.splice(index, 1)
            return res.send(corteAtual)
        }else {
            return res.status(404).send('Corte não encontrado.')
        }
        
    }

    return { getCortes, getCorteById, setCorte, updateCorte, deleteCorte }
}
