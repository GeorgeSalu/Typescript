import Livro from './modelo/livro'

const livro = new Livro('Dom quixote', 109.00, 0.10)
console.log(livro.precoComDesconto())