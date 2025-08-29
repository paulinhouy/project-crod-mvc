const { router} = require('express')
const router = Router();

//get post put delete

router.get("/atendimento",(req,res) => {
    res.send('entrei no  get')
})

router.post("/atendimento",(req,res) => {
    res.send('estamos criando o postS')
})

router.put("/atendimento",(req,res) => {
    res.send('put atualização')
})