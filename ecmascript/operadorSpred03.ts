//rest & spred (tupla)

const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1 (a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2 (...params: [number, string, boolean])  {
  console.log(Array.isArray(params))
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)