namespace Geometria {
  export namespace Areas {

    const PI = 3.14
    
    export function circunferencia(raio: number): number {
      return PI * Math.pow(raio, 2)
    }
    
    export function retangulo(base: number, altura: number): number {
      return base * altura
    }
    
  }
}

console.log(Geometria.Areas.circunferencia(10))
console.log(Geometria.Areas.retangulo(10,20))

