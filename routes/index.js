const express = require('express')
const app = express();
const port = 3000;
const { Router} = require('express')
const router = Router();

//get post put delete

router.get("/atendimento",(req,res) => {
    res.send('entrei no  get')
})

router.post("/atendimento",(req,res) => {
    res.send('estamos criando o postS')
})

router.put("/atendimento/:id",(req,res) => {
    const {id} = req.params;
    res.send(`put atualização ${id}`)
})
router.delete("/atendimento",(req,res) => {
        const {id} = req.params;
    res.send('put atualização')
})
app.listen(3000,(error) =>{
if(error){
    console.log('deu erro')
    return;
}
console.log('subiu,show')
})

module.exports = router;