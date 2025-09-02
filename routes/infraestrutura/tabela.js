class Tabelas {
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaAtendientos();

    }
        criarTabelaAtendientos(){
    const sql = `CREATE TABLE IF NOT EXISTS atenimentos (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
DATE DATE,
service VARCHAR(100),
cliente VARCHAR(100),
STATUS ENUM("pendente","ativo","cancelado") DEFAULT "ativo"
)

`
this.conexao.query(sql,(error) => {

    if(error){
        console.log('deu erro')
                console.log(error.message)
                return;
            }
            console.log('subiu,show')
        
    })
        }
    }

    module.exports = new Tabelas();
