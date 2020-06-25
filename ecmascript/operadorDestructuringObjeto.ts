// destructuring (objeto)
const item = {
  nome: 'ssd',
  preco: 200
}

//const nomeItem = item.nome
//const preco = item.preco

const {nome: n, preco: p} = item 
console.log(n)
console.log(p)