const {Router} = require('express');
const router = Router();
const controllers = require("../controllers/atendimentoController.js")

//get post put delete

router.get("/atendimento",(req,res) => {
    
    const resposta = controllers.buscar();
    console.log(resposta + "ola")
    res.send(resposta)
    listaAtendimentos.then(atendimentos = res.status(200).json(atendimentos)).catch(error => res.status(404).json(error))
      return atendimentoModel.listar();
      
})

router.post("/atendimento",(req,res) => {
    const novoAtendimento = req.body;
    const resposta = controllers.post(novoAtendimento)
    res.send(resposta)
})

router.put("/atendimento/:id",(req,res) => {
    const {id} = req.params;
    const resposta = controllers.atualizar(id)
    res.send(resposta )
})
router.delete("/atendimento/:id",(req,res) => {
    const {id} = req.params;
    const resposta = controllers.delete(id)
    res.send(resposta)
})
module.exports = router;


