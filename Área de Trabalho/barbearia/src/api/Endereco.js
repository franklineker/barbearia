

module.exports = app => {

    const mostrarLocalizacao = (req, res) => {
        return res.send('Aqui aparecerá a localização da barbearia no Google Maps.')
    }

    return {mostrarLocalizacao}
}