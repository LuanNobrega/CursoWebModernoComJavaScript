
const porta = 3003

//Importar o express que está dentro do node_modules
const express = require('express')

//Instanciar o express chamando o express
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: true
}));

const bancoDeDados = require('./bancoDeDados')

// //fazer o get e passar uma função midleware
// app.get('/produtos', (req, res, next) => {
//     console.log('medleware 1...')
//     next()
// })

//fazer o get e passar uma função midleware
app.get('/produtos', (req, res, next) => {
    //res.send({nome: 'Notebook', preco: 123.45}) //Converte para JSON altomaticamente
    res.send(bancoDeDados.getProdutos())
})

//Agora fazendo o get com o parametro id, retorna um produto expecifico pelo id
app.get('/produtos:id', (req, res, next) => {
    res.send(bancoDeDados.getProdutos(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Gera um JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Gera um JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //Gera um JSON
})

app.listen(porta, () => {
    console.log(`Servidor esta executando na porta ${porta}`)
})


