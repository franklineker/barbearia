const db = require('../config/db.json')

module.exports = app => {

    const orders = db.orders

    const getOrders = (req, res) => {
        if (orders){
            return res.status(200).send(orders)
        }else{
            return res.status(404).send("Não encontrado.")
        }
    }

    const getOrderById = (req, res) => {

        const orderId = req.params.id

        for (let c of orders) {
            if (c.id == orderId) {
                return res.status(200).send(c)
            }
        }

        return res.status(404).send('order não encontrado')
    }

    const setOrder = (req, res) => {
        
        const order = {...req.body}

        for (let c of orders) {
            if(c.id == order.id) {
                return res.status(400).send("order já existe")
            }
        }

        orders.push(order)
        return res.status(201).send(order)
    }

    const updateOrder = (req, res) => {

        const orderId = req.params.id
        const currentOrder = orders.filter(c => c.id == orderId)[0]
        const newOrder = {"id": Number(orderId),...req.body}

        if (!currentOrder) {
            return res.status(404).send("order não encontrado.")
        }else {
            const index = orders.findIndex(c => c.id == orderId)
            orders.splice(index, 1, newOrder)
            return res.status(200).send(newOrder)
        }

    }

    const deleteOrder = (req, res) => {
        const orderId = req.params.id
        const currentOrder = orders.filter(c => c.id == orderId)[0]

        if(currentOrder) {
            const index = orders.findIndex(c => c.id == orderId)
            orders.splice(index, 1)
            return res.send(currentOrder)
        }else {
            return res.status(404).send('order não encontrado.')
        }
        
    }

    return { getOrders, getOrderById, setOrder, updateOrder, deleteOrder }
}
