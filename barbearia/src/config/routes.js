

module.exports = app => {

    
    app.route('/clients')
        .get(app.src.api.Client.getClients)
        .post(app.src.api.Client.setClient)

    app.route('/clients/:cpf')
        .get(app.src.api.Client.getClientByCPF)
        .put(app.src.api.Client.updateClient)
        .delete(app.src.api.Client.deleteClient)

    app.route('/barbers')
        .get(app.src.api.Barber.getBarbers)
        .post(app.src.api.Barber.setBarber)


    app.route('/barbers/:cpf')
        .get(app.src.api.Barber.getBarberByCPF)
        .put(app.src.api.Barber.updateBarber)
        .delete(app.src.api.Barber.deleteBarber)
        

    app.route('/chairs')
        .get(app.src.api.Chair.getChairs)
        .post(app.src.api.Chair.setChair)

    app.route('/chairs/:id')
        .get(app.src.api.Chair.getChairByID)
        .put(app.src.api.Chair.updateChair)
        .delete(app.src.api.Chair.deleteChair)

    app.route('/orders')
        .get(app.src.api.Order.getOrders)
        .post(app.src.api.Order.setOrder)

    app.route('/orders/:id')
        .get(app.src.api.Order.getOrderById)
        .put(app.src.api.Order.updateOrder)
        .delete(app.src.api.Order.deleteOrder)

    app.route('/admin')
        .get(app.src.api.Admin.getAdmin)
        .post(app.src.api.Admin.setAdmin)
    
    app.route('/admin/:id')
        .get(app.src.api.Admin.getAdminById)
        .put(app.src.api.Admin.updateAdmin)
        .delete(app.src.api.Admin.deleteAdmin)

    app.route('/reports')
        .get(app.src.api.Report.getReports)
        .post(app.src.api.Report.setReport)

    app.route('/reports/:id')
        .get(app.src.api.Report.getReportById)
        .put(app.src.api.Report.updateReport)
        .delete(app.src.api.Report.deleteReport)
    
    app.route('/contact/emails')
        .get(app.src.api.Contact.getEmails)
        .post(app.src.api.Contact.sendEmail)

    app.route('/contact/emails/:id')
        .get(app.src.api.Contact.getEmailById)

    app.route('/address')
        .get(app.src.api.Admin.showLocation)

    app.route('/perfil/:cpf')
        .get(app.src.api.Client.getClientByCPF)
        .put(app.src.api.Client.updateClient)

    app.route('/appointment')
        .get(app.src.api.Appointment.getAppointments)
        .post(app.src.api.Appointment.setAppointment)

    app.route('/appointment/:id') 
        .get(app.src.api.Appointment.getAppointmentById)
        .put(app.src.api.Appointment.updateAppointment)
        .delete(app.src.api.Appointment.deleteAppointment)

}
