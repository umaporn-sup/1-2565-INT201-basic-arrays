// array destructuring
const [m] = [10, 20, 30, 40]
console.log(m)

const [, , n] = [8, 16, 24, 32]
console.log(n)

const [a, b] = [5, 10]
console.log(a)
console.log(b)

const [x, y, ...z] = [5, 10, 15, 20, 25]
console.log(z) // [15,20,25]
