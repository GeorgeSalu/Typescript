interface Humano {
  nome: string
  idade?: number
  [prop: string]: any
  saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
  console.log('Ola, '+pessoa.nome)
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'joana'
}

const pessoa: Humano = {
  nome: 'joao',
  idade: 22,

  saudar(sobrenome: string) {
    console.log('Ola meu nome é '+this.nome + ' '+sobrenome)
  }

}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
pessoa.saudar('silva')
//saudarComOla({nome: 'jonas', idade: 22, xyz: true})


// interfaces com classes 
class Cliente implements Humano {
  nome: string = ''
  saudar(sobrenome: string) {
    console.log('Ola meu nome é'+this.nome)
  }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)

//interface Funcao

interface FuncaoCalculo {
  (a: number, b: number): number
}

let potencia: FuncaoCalculo 

potencia = function(base: number, exp: number) : number {
  // Math.pow(3,10)
  // 3 ** 10
  return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3, 10))

// Heranca
interface A {
  a(): void
}

interface B {
  b(): void
}

interface ABC extends A, B {
  c(): void
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class AbstractABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void
}

function teste(a: B) {

}

teste(new RealABC)

// interface para estender Object

interface Object {
  log(): void
}

Object.prototype.log = function() {
  console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

console.log(x)
console.log(y)
console.log(z)

x.log()
y.log()
z.log()