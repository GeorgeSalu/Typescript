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