const atendimentoModel = require("../models/model")

module.exports = {
    buscar: () => {
        return atendimentoModel.listar(); // ok, já existe
    },
    post: (novoAtendimento) => {
        return atendimentoModel.criar(novoAtendimento); // usar "criar", não "post"
    },
    atualizar: (atendimentoAtualizado,id) => {
        return atendimentoModel.atualizar(); // precisa implementar no model.js
    },
    delete: (id) => {
        return atendimentoModel.deletar(id); // precisa implementar no model.js
    }
}
