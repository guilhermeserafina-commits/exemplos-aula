import express from 'express' // TYPE MODULE
// const express = ("express") // Type common JS

// inicializando o express - new 
const app = express()

app.get("/api/somar",(req, res ) => {
    //const exemplo = "batata"
    //let alterada = 0
    //exemploAlterar = [1, "teste"]
    //var
    const num1 = Number(req.query.num1)
    const num2 = Number (req.query.num2)
    res.send({message: num1 + num2})

    
})
app.listen(3000,() => {
    console.log("Servidor rodando na porta 3000")
})