function echo (objeto: any) {
  return objeto
}

console.log(echo('joao'))
console.log(echo(27))
console.log(echo({ nome: 'joao', idade: 23 }))

//usando generics
function echoMelhorado<T>(objeto: T): T {
  return objeto
}

console.log(echoMelhorado('joao'))
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({ nome: 'joao', idade: 23 }))


//Generics disponiveis na API
const avaliacoes: Array<number> = [10,2,33]
avaliacoes.push(8)
console.log(avaliacoes)

//array

function imprimir<T>(args: T[]) {
  args.forEach(elemento => console.log(elemento))
}

imprimir([1,2,3])
imprimir<number>([1,2,3])
imprimir<string>(['ana','bia', 'carlos'])
imprimir<{ nome: string, idade: number }>([
  { nome: 'fulano', idade: 22 }
])

type Aluno = { nome: string, idade: number }
imprimir<Aluno>([
  { nome: 'fulano', idade: 22 },
  { nome: 'ciclano', idade: 21 },
  { nome: 'beltrano', idade: 22 }
])

// Tipo Generico
type Echo = (data: any) => any
const chamarEcho: <T>(data: T) => T = echoMelhorado
console.log(chamarEcho<string>('alguma coisa'))

//classe com Generics
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}

  abstract executar(): R
}

//console.log(new OperacaoBinaria('Bom ', 'dia').executar())
//console.log(new OperacaoBinaria(3, 7).executar())
//console.log(new OperacaoBinaria(3, 'opa').executar())
//console.log(new OperacaoBinaria({}, null).executar())

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2
  }
}

console.log(new SomaBinaria(3,4).executar())
console.log(new SomaBinaria(3,422).executar())

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
  getTime(data: Data): number {
    let { dia, mes, ano } = data
    return new Date(`${mes}/${dia}/${ano}`).getTime()
  }

  executar(): string {
    const t1 = this.getTime(this.operando1)
    const t2 = this.getTime(this.operando2)
    const diferenca = Math.abs(t1 - t2)
    const dia = 1000 * 60 * 60 * 24
    return `${Math.ceil(diferenca / dia)} dia(s)`
  }
}

const d1 = new Data(1, 2, 2030)
const d2 = new Data(1, 3, 2030)
console.log(new DiferencaEntreDatas(d1, d2).executar())

/**
 * desafio classe fila
 * atributos: fila (array)
 * metodos : entrar , proxima imprimir
 */