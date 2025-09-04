const {Router} = require('express');
const router = Router();
const controllers = require("../controllers/atendimentoController.js")

//get post put delete

router.get("/atendimento",(req,res) => {
    const resposta = controllers.buscar();
    res.send(resposta)
})

router.post("/atendimento",(req,res) => {
    const resposta = controllers.post()
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


