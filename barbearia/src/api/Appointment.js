const db = require("../config/db.json")

module.exports = app => {

    const appointments = db.appointments

    const getAppointments = (req, res) => {
        if (appointments){
            return res.send(appointments)
        }else{
            return res.status(404).send("Não encontrado.")
        }
    }

    const getAppointmentById = (req, res) => {
        const id = req.params.id
        const appointmet = appointments.filter(a => a.id == id)[0]

        if (appointmet) {
            return res.send(appointmet)
        }else {
            return res.status(404).send("Agendamento não encontrado.")
        }
    }

    const setAppointment = (req, res) => {
        const appointmet = {...req.body}
        const possibleAppointmet = appointments.filter(a => a.id == appointmet.id)[0]

        if (possibleAppointmet){
            return res.status(400).send("Agendamento já existe.")
        }else {
            appointments.push(appointmet)
            return res.status(201).send(appointmet)
        }
    }

    const updateAppointment = (req, res) => {
        const id = req.params.id
        const currentAppointmet = appointments.filter(a => a.id == id)[0]
        const newAppointmet = {"id": Number(id), ...req.body}

        if (currentAppointmet){
            const index = appointments.findIndex(a => a.id == id)
            appointments.splice(index, 1, newAppointmet)
            return res.send(newAppointmet)
        }else{
            return res.status(404).send('Agendamento não encontrado.')
        }
    }

    const deleteAppointment = (req, res) => {
        const id = req.params.id
        const appointmet = appointments.filter(a => a.id == id)[0]

        if (appointmet){
            const index = appointments.findIndex(a => a.id == id)
            appointments.splice(index, 1)
            return res.send(appointmet)
        }else{
            return res.status(404).send('Agendamento não encontrado.')
        }
    }

    return {getAppointments, getAppointmentById, setAppointment, updateAppointment, deleteAppointment}
}