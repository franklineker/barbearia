const db = require('../config/db.json')

module.exports = app => {

    const reports = db.reports
    const getReports = (req, res) => {
        if (reports) {
            return res.send(reports)
        } else {
            return res.status(404).send("Não encontrado.")
        }
    }

    const setReport = (req, res) => {

        const report = { ...req.body }
        const possibleReport = reports.filter(r => r.id == report.id)[0]

        if (possibleReport) {
            return res.status(400).send('Relatório já existe.')
        } else {
            reports.push(report)
            return res.status(201).send(report)
        }
    }

    const getReportById = (req, res) => {

        const id = req.params.id
        const report = reports.filter(r => r.id == id)[0]

        if (report) {
            return res.send(report)
        } else {
            return res.status(404).send('Relatório não encontrado.')
        }
    }

    const updateReport = (req, res) => {

        const id = req.params.id
        const currentReport = reports.filter(r => r.id == id)[0]
        const newReport = { "id": Number(id), ...req.body }

        if (currentReport) {
            const index = reports.findIndex(r => r.id == id)
            reports.splice(index, 1, newReport)
            return res.send(newReport)
        } else {
            return res.status(404).send('Relatório não encontrado.')
        }
    }

    const deleteReport = (req, res) => {
        const id = req.params.id
        const report = reports.filter(r => r.id == id)[0]

        if (report) {
            const index = reports.findIndex(r => r.id == id)
            reports.splice(index, 1)
            return res.send(relatorio)
        } else {
            return res.status(404).send('Relatório não encontrado.')
        }
    }

    return { getReports, setReport, getReportById, deleteReport, updateReport }
}