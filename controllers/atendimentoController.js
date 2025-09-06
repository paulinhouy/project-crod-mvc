module.exports = {
    buscar: () => {
        return "Listando atendimentos...";
    },
    post: () => {
        return "Criando atendimento...";
    },
    atualizar: (id) => {
        return `Atualizando atendimento ${id}...`;
    },
    delete: (id) => {
        return `Deletando atendimento ${id}...`;
    }
}