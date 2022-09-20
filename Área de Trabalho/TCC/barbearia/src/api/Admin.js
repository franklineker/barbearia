const db = require('../config/db.json')

module.exports = app => {
    const admins = db.admin
    const getAdmin = (req, res) => {
        if (admins) {
            return res.send(admins)
        } else {
            return res.status(404).send("Não encontrado.")
        }
    }

    const getAdminById = (req, res) => {
        const id = req.params.id
        const admin = admins.filter(a => a.id == id)[0]

        if (admin) {
            return res.send(admin)
        } else {
            return res.status(404).send('admin não encontrado.')
        }
    }

    const setAdmin = (req, res) => {
        const admin = { ...req.body }
        const possibleAdmin = admins.filter(a => a.id == admin.id)[0]

        if (possibleAdmin) {
            return res.status(400).send("Admin já existe")
        } else {
            admins.push(admin)
            return res.status(201).send(admin)
        }

    }

    const updateAdmin = (req, res) => {

        const id = req.params.id
        const currentAdmin = admins.filter(a => a.id == id)[0]
        const newAdmin = { "id": Number(id), ...req.body }

        if (currentAdmin) {
            const index = admins.findIndex(a => a.id == id)
            admins.splice(index, 1, newAdmin)
            return res.send(newAdmin)
        } else {
            return res.status(404).send("Admin não encontrado.")
        }
    }

    const deleteAdmin = (req, res) => {
        const id = req.params.id
        const admin = admins.filter(a => a.id == id)[0]

        if (admin) {
            const index = admins.findIndex(a => a.id == id)
            admins.splice(index, 1)
            return res.send(admin)
        } else {
            return res.status(404).send("Admin não encontrado.")
        }
    }

    return { getAdmin, getAdminById, setAdmin, updateAdmin, deleteAdmin }
}
