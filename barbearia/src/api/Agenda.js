const db = require("../config/db.json")

module.exports = app => {

    const agendamentos = db.agendamentos

    const getAgendamentos = (req, res) => {
        if (agendamentos){
            return res.send(agendamentos)
        }else{
            return res.status(404).send("Não encontrado.")
        }
    }

    const getAgendamentoById = (req, res) => {
        const id = req.params.id
        const agendamento = agendamentos.filter(a => a.id == id)[0]

        if (agendamento) {
            return res.send(agendamento)
        }else {
            return res.status(404).send("Agendamento não encontrado.")
        }
    }

    const setAgendamento = (req, res) => {
        const agendamento = {...req.body}
        const possibleAgendamento = agendamentos.filter(a => a.id == agendamento.id)[0]

        if (possibleAgendamento){
            return res.status(400).send("Agendamento já existe.")
        }else {
            agendamentos.push(agendamento)
            return res.status(201).send(agendamento)
        }
    }

    const updateAgendamento = (req, res) => {
        const id = req.params.id
        const currentAgendamento = agendamentos.filter(a => a.id == id)[0]
        const newAgendamento = {"id": Number(id), ...req.body}

        if (currentAgendamento){
            const index = agendamentos.findIndex(a => a.id == id)
            agendamentos.splice(index, 1, newAgendamento)
            return res.send(newAgendamento)
        }else{
            return res.status(404).send('Agendamento não encontrado.')
        }
    }

    const deleteAgendamento = (req, res) => {
        const id = req.params.id
        const agendamento = agendamentos.filter(a => a.id == id)[0]

        if (agendamento){
            const index = agendamentos.findIndex(a => a.id == id)
            agendamentos.splice(index, 1)
            return res.send(agendamento)
        }else{
            return res.status(404).send('Agendamento não encontrado.')
        }
    }

    return {getAgendamentos, getAgendamentoById, setAgendamento, updateAgendamento, deleteAgendamento}
}