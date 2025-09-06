const conexao = require("../routes/infraestrutura/conexao");

class AtendimentosModel {
    listar() {
        const sql = `SELECT * FROM atendimentos`;

        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, resposta) => {
                if (error) {
                    console.log("Erro na consulta:", error);
                    reject(error); // rejeita a Promise se deu erro
                } else {
                    console.log("Consulta executada com sucesso");
                    resolve(resposta); // retorna os dados
                }
            });
        });
    }
}

module.exports = new AtendimentosModel();
