const atendimentoModel = require("../models/model.js")

module.exports = {
    buscar: () => {
        return atendimentoModel.listar();
    },
    post: (novoAtendimento) => {
        return "Criando atendimento...";
    },
    atualizar: (id) => {
        return `Atualizando atendimento ${id}...`;
    },
    delete: (id) => {
        return `Deletando atendimento ${id}...`;
    }
}