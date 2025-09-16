const atendimento = require("../routes/index");
const conexao = require("../routes/infraestrutura/conexao");
const atendimentoModel = require('../models/model'); // ajuste o caminho se necessário



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
    criar(atendimento){
        const sql = `INSERT INTO ATENDIMENTOS SET ?`
       return new Promise ((resolve,reject) => {
           conexao.query(sql,atendimento, (error,resposta) => {
               if(error){
                   console.log("erro ao listar")
                   reject(error)
               }
               console.log("deu bom listar")
               resolve(resposta)
   
           })
       })
    }

       atualizar(atendimentoAtualizado,id){
        const sql = `UPDATE atendimentos SET ? WHERE id = ?`
       return new Promise ((resolve,reject) => {
           conexao.query(sql,[atendimentoAtualizado,id], (error,resposta) => {
               if(error){
                   console.log("erro ao listar")
                   reject(error)
               }
               console.log("deu bom listar")
               resolve(resposta)
   
           })
       })
    }
deletar(id) {
    const sql = "DELETE FROM atendimentos WHERE id = ?";
    return new Promise((resolve, reject) => {
        conexao.query(sql, id, (error, resposta) => {
            if (error) {
                console.log("Erro ao deletar:", error);
                reject(error);
            } else {
                console.log(`Atendimento ${id} removido com sucesso ✅`);
                resolve(resposta);
            }
        });
    });
}

}

module.exports = new AtendimentosModel();
