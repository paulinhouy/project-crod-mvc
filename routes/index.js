const {Router} = require('express');
const router = Router();
const controllers = require("./controllers/atendimentoController")

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
     const resposta = controllers.atualizar()
    res.send(resposta)
})
router.delete("/atendimento/:id",(req,res) => {
    const resposta = controllers.delete()
    res.send(resposta)
})

module.exports = (app) => {
  app.use("/", router);
};

