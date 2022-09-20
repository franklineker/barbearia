const db = require('../config/db.json')

module.exports = app => {

    const clientes = db['clientes']

    const getClientes = (req, res) => {
        if(clientes){
            res.status(200).send(clientes)
        }else{
            return res.status(404).send("Não encontrado.")
        }

    }

    const getClienteByCPF = (req, res) => {
        const cpf = req.params.cpf
        const cliente = clientes.filter(c => c.cpf == cpf)[0]

        if (cliente) {
            return res.send(cliente)
        } else {
            return res.status(404).send("Cliente não encontrado.")
        }

    }

    const setCliente = (req, res) => {

        const cliente = req.body
        const possbleCliente = clientes.filter(c => c.cpf == cliente.cpf)[0]

            if (possbleCliente) {
                return res.status(400).send("Cliente já existe")
            }else{
                clientes.push(cliente)
                return res.status(201).send(cliente)
            }
            
    }

    const updateCliente = (req, res) => {

        const cpf = req.params.cpf
        const currentCliente = clientes.filter(c => c.cpf == cpf)[0]
        const newCliente = { "cpf": cpf,...req.body }

        if (currentCliente) {
            const index = clientes.findIndex(cliente => cliente.cpf == cpf)
            clientes.splice(index, 1, newCliente)
            return res.status(201).send(newCliente)
        } else {
            return res.stauts(404).send('Cliente não encontrado.')
        }

    }

    const deleteCliente = (req, res) => {
        const cpf = req.params.cpf
        const cliente = clientes.filter(c => c.cpf == cpf)[0]

            if (cliente) {
                const index = clientes.findIndex(cliente => cliente.cpf == cpf)
                clientes.splice(index, 1)
                return res.status(200).send(cliente)
            }else{
                return res.status(404).send('Cliente não encontrado.')
            }
    }

    return { getClientes, getClienteByCPF, setCliente, updateCliente, deleteCliente }
}

