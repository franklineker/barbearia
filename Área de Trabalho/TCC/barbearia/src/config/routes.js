const { get } = require("express/lib/response")


module.exports = app => {

    
    app.route('/clientes')
        .get(app.src.api.Cliente.getClientes)
        .post(app.src.api.Cliente.setCliente)

    app.route('/clientes/:cpf')
        .get(app.src.api.Cliente.getClienteByCPF)
        .put(app.src.api.Cliente.updateCliente)
        .delete(app.src.api.Cliente.deleteCliente)

    app.route('/barbeiros')
        .get(app.src.api.Barbeiro.getBarbeiros)
        .post(app.src.api.Barbeiro.setBarbeiro)


    app.route('/barbeiros/:cpf')
        .get(app.src.api.Barbeiro.getBarbeiroByCPF)
        .put(app.src.api.Barbeiro.updateBarbeiro)
        .delete(app.src.api.Barbeiro.deleteBarbeiro)
        

    app.route('/cadeiras')
        .get(app.src.api.Cadeira.getCadeiras)
        .post(app.src.api.Cadeira.setCadeira)

    app.route('/cadeiras/:id')
        .get(app.src.api.Cadeira.getCadeiraByID)
        .put(app.src.api.Cadeira.updateCadeira)
        .delete(app.src.api.Cadeira.deleteCadeira)

    app.route('/cortes')
        .get(app.src.api.Corte.getCortes)
        .post(app.src.api.Corte.setCorte)

    app.route('/cortes/:id')
        .get(app.src.api.Corte.getCorteById)
        .put(app.src.api.Corte.updateCorte)
        .delete(app.src.api.Corte.deleteCorte)

    app.route('/admin')
        .get(app.src.api.Admin.getAdmin)
        .post(app.src.api.Admin.setAdmin)
    
    app.route('/admin/:id')
        .get(app.src.api.Admin.getAdminById)
        .put(app.src.api.Admin.updateAdmin)
        .delete(app.src.api.Admin.deleteAdmin)

    app.route('/relatorios')
        .get(app.src.api.Relatorio.getRelatorios)
        .post(app.src.api.Relatorio.setRelatorio)

    app.route('/relatorios/:id')
        .get(app.src.api.Relatorio.getRelatorioById)
        .put(app.src.api.Relatorio.updateRelatorio)
        .delete(app.src.api.Relatorio.deleteRelatorio)
    
    app.route('/contato/emails')
        .get(app.src.api.Contato.getEmails)
        .post(app.src.api.Contato.sendEmail)

    app.route('/contato/emails/:id')
        .get(app.src.api.Contato.getEmailById)

    app.route('/endereco')
        .get(app.src.api.Endereco.mostrarLocalizacao)

    app.route('/perfil/:cpf')
        .get(app.src.api.Cliente.getClienteByCPF)
        .put(app.src.api.Cliente.updateCliente)

    app.route('/agenda')
        .get(app.src.api.Agenda.getAgendamentos)
        .post(app.src.api.Agenda.setAgendamento)

    app.route('/agenda/:id')
        .get(app.src.api.Agenda.getAgendamentoById)
        .put(app.src.api.Agenda.updateAgendamento)
        .delete(app.src.api.Agenda.deleteAgendamento)

}
