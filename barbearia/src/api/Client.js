const db = require('../config/db.json')

module.exports = app => {

    const clients = db['clients']

    const getClients = (req, res) => {
        if(clients){
            res.status(200).send(clients)
        }else{
            return res.status(404).send("Não encontrado.")
        }

    }

    const getClientByCPF = (req, res) => {
        const cpf = req.params.cpf
        const client = clients.filter(c => c.cpf == cpf)[0]

        if (client) {
            return res.send(client)
        } else {
            return res.status(404).send("Client não encontrado.")
        }

    }

    const setClient = (req, res) => {

        const client = req.body
        const possbleClient = clients.filter(c => c.cpf == client.cpf)[0]

            if (possbleClient) {
                return res.status(400).send("Client já existe")
            }else{
                clients.push(client)
                return res.status(201).send(client)
            }
            
    }

    const updateClient = (req, res) => {

        const cpf = req.params.cpf
        const currentClient = clients.filter(c => c.cpf == cpf)[0]
        const newClient = { "cpf": cpf,...req.body }

        if (currentClient) {
            const index = clients.findIndex(client => client.cpf == cpf)
            clients.splice(index, 1, newClient)
            return res.status(201).send(newClient)
        } else {
            return res.stauts(404).send('Client não encontrado.')
        }

    }

    const deleteClient = (req, res) => {
        const cpf = req.params.cpf
        const client = clients.filter(c => c.cpf == cpf)[0]

            if (client) {
                const index = clients.findIndex(client => client.cpf == cpf)
                clients.splice(index, 1)
                return res.status(200).send(client)
            }else{
                return res.status(404).send('Client não encontrado.')
            }
    }

    return { getClients, getClientByCPF, setClient, updateClient, deleteClient }
}

