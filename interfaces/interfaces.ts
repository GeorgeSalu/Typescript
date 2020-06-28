function saudarComOla(pessoa: { nome: string }) {
  console.log('Ola, '+pessoa.nome)
}

function mudarNome(pessoa: { nome: string }) {
  pessoa.nome = 'joana'
}

const pessoa = {
  nome: 'joao',
  idade: 23
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
