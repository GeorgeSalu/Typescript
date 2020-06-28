interface Humano {
  nome: string
  idade?: number
  [prop: string]: any
}

function saudarComOla(pessoa: Humano) {
  console.log('Ola, '+pessoa.nome)
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'joana'
}

const pessoa = {
  nome: 'joao',
  idade: 23
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
saudarComOla({nome: 'jonas', idade: 22, xyz: true})