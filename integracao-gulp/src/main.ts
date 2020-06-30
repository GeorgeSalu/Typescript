import $ from 'jquery'
import Livro from './modelo/livro'

const livro = new Livro('Dom quixote', 109.00, 0.10)
console.log(livro.precoComDesconto())

$('body').append(`<h1>${livro.nome}</h1>`)