class atendimentoController{
    buscar(){
        return("buscando atendimento")
    }
      post(){
        return("adicionando atendimento")
    }
      atualizar(){
        return("atualizando atendimento" + id)
    }
      delete(){
        return("deletando atendimento "+ id )
    }
}
module.exports = new atendimentoController();