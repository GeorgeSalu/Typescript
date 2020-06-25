// never
function falha(msg: string): never {
  throw new Error(msg)
}

const produto = {
  nome: 'sabão',
  preco: -1,
  validarProduto() {
    if(this.nome.trim().length == 0) {
      falha('precisa ter um nome')
    }
    if(this.preco <= 0) {
      falha('preco invalido')
    }
  }
}

produto.validarProduto()