const db = require('../config/db.json')

module.exports = app => {

    const emails = db.emails
    const getEmails = (req, res) => {
        if (emails){
            return res.send(emails)
        }else{
            return res.status(404).send("Não encontrado.")
        }
    }

    const getEmailById = (req, res) => {

        const id = req.params.id
        const email = emails.filter(a => a.id == id)[0]

        if (email) {
            return res.send(email)
        }else {
            return res.status(404).send("Email não encontrado.")
        }
    }

    const sendEmail = (req, res) => {

        const email = {...req.body}
        const possibleEmail = emails.filter(e => e.id == email.id)[0]
        
        if(possibleEmail){
            return res.status(400).send('Email já existe.')
        }else {
            emails.push(email)
            return res.status(201).send(email)
        }
    }

    return {sendEmail, getEmails, getEmailById}
}