//rest & spred
const numbers = [1, 10, 99, -5]
console.log(Math.max(...numbers))

const turmaA: string[] = ['joao', 'maria', 'fernanda']
const turmaB: string[] = ['fernando', 'fernando', 'miguel', ...turmaA]

console.log(turmaB)