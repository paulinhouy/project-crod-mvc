const {Router} = require('express');
const router = Router();
const controllers = require("../controllers/atendimentoController.js")
const atendimentoModel = require("../models/model");
const atendimentoController = require('../controllers/atendimentoController.js');

//get post put delete

router.get("/atendimento",(req,res) => {
    
    const resposta = atendimentoModel.buscar();
    console.log(resposta + "ola")
    res.send(resposta)
    listaAtendimentos.then(atendimentos = res.status(200).json(atendimentos)).catch(error => res.status(404).json(error))
      return atendimentoModel.listar();
      
})

router.post("/atendimento",(req,res) => {
    const novoAtendimento = req.body;
    const atendimento = atendimentoModel.post(novoAtendimento)
    res.send(resposta)
    atendimento.then(atendimentoCriado => res.status(200).json(atendimentoCriado).catch((error) => res.status(400).json(error.message)))
})

router.put("/atendimento/:id",(req,res) => {
    const {id} = req.params;
    const atendimentoAtualizado = req.body;
    const atendimento = atendimentoController.atualizar(atendimentoAtualizado,id)
    atendimento.then((resultAtendimentoAtualizado) => res.status(200).json(resultAtendimentoAtualizado)).catch ((error) => res.status(401).json(error.message))
    res.send(resposta )
})
router.delete("/atendimento/:id",(req,res) => {
    const {id} = req.params;
    const resposta = controllers.delete(id)
    res.send(resposta)
})
module.exports = router;


