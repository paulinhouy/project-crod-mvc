const routerAtendimento = require('./atendientoRoute')
module.exports = (app)  => {
    app.use(routerAtendimento)

}