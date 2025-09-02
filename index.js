const express = require('express')
const app = express();
const port = 3000;
const conexao = require("./routes/infraestrutura/conexao")
const Tabelas = require("./routes/infraestrutura/tabela")



app.listen(port,(error) =>{
if(error){
    console.log('deu erro')
    return;
}
console.log('subiu,show')
})