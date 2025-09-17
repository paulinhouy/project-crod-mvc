const mysql = require("mysql");

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "project_crod_mvc",
});

conexao.connect((error) => {
    if (error) {
        console.log("❌ Erro ao conectar no MySQL:", error);
    } else {
        console.log("✅ Conectado ao MySQL");
    }
});

module.exports = conexao; 
