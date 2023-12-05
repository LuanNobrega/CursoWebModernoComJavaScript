//objeto que representara uma sequencia para pegar os id's dos objetos persistidos
const sequence = {
    _id: 1,
    get id() {return this._id++ }
}
//Criar o objeto produto que terá chave e valor
const produtos = {}

//Função para salvar os produtos
function salvarProduto(produto){
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

//Função para pegar o produto pelo ID
function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    //Retorna todos os valores que estão dentro do objeto Produtos que é a chave e o valor (id e produto)
    return Object.values(produtos)
}

//Função para deletar os produtos
function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

//Deixar as três funções visíveis para fora do arquivo
module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}