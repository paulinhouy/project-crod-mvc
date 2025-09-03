const express = require('express')
const app = express();
const port = 3000;
const rotas = require("./routes/index")
const conexao = require("./routes/infraestrutura/conexao")
const Tabelas = require("./routes/infraestrutura/tabela")

Tabelas.init(conexao);
rotas(app)


app.listen(port,(error) =>{
if(error){
    console.log('deu erro aqui')
    return;
}
console.log('subiu,show')
})
module.exports = rotas;