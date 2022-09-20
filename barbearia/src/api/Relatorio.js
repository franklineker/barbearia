const db = require('../config/db.json')

module.exports = app => {

    const relatorios = db.relatorios
    const getRelatorios = (req, res) => {
        if (relatorios) {
            return res.send(relatorios)
        } else {
            return res.status(404).send("Não encontrado.")
        }
    }

    const setRelatorio = (req, res) => {

        const relatorio = { ...req.body }
        const possibleRelatorio = relatorios.filter(r => r.id == relatorio.id)[0]

        if (possibleRelatorio) {
            return res.status(400).send('Relatório já existe.')
        } else {
            relatorios.push(relatorio)
            return res.status(201).send(relatorio)
        }
    }

    const getRelatorioById = (req, res) => {

        const id = req.params.id
        const relatorio = relatorios.filter(r => r.id == id)[0]

        if (relatorio) {
            return res.send(relatorio)
        } else {
            return res.status(404).send('Relatorio não encontrado.')
        }
    }

    const updateRelatorio = (req, res) => {

        const id = req.params.id
        const currentRelatorio = relatorios.filter(r => r.id == id)[0]
        const newRelatorio = { "id": Number(id), ...req.body }

        if (currentRelatorio) {
            const index = relatorios.findIndex(r => r.id == id)
            relatorios.splice(index, 1, newRelatorio)
            return res.send(newRelatorio)
        } else {
            return res.status(404).send('Relatorio não encontrado.')
        }
    }

    const deleteRelatorio = (req, res) => {
        const id = req.params.id
        const relatorio = relatorios.filter(r => r.id == id)[0]

        if (relatorio) {
            const index = relatorios.findIndex(r => r.id == id)
            relatorios.splice(index, 1)
            return res.send(relatorio)
        } else {
            return res.status(404).send('Relatorio não encontrado.')
        }
    }

    return { getRelatorios, setRelatorio, getRelatorioById, deleteRelatorio, updateRelatorio }
}