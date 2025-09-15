const atendimentoModel = require("../models/model.js")

module.exports = {
    buscar: () => {
        return atendimentoModel.listar(); // ok, já existe
    },
    post: (novoAtendimento) => {
        return atendimentoModel.criar(novoAtendimento); // usar "criar", não "post"
    },
    atualizar: (id, dados) => {
        return atendimentoModel.atualizar(id, dados); // precisa implementar no model.js
    },
    delete: (id) => {
        return atendimentoModel.deletar(id); // precisa implementar no model.js
    }
}
