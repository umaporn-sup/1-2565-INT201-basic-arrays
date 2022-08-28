//a simple array of numbers
let nums = [15, 30, 42]
console.log(nums)

// array contains a different type of values
let diffArr = [10, 'in progress', true]
console.log(diffArr)

// array contains a nested arrays
let colors = [
  ['yellow', 'red', 'orange'],
  ['blue', 'green', 'purple']
]
console.log(colors)

// array contains a collection of objects
let posts = [
  {
    id: 1,
    title: 'Fail fast and Learn Fast',
    body: 'Do not give up, just take some rest and go on',
    user: {
      id: 9,
      displayName: 'Somchai'
    },
    tags: ['learn', 'mindset', 'EF']
  },
  {
    id: 2,
    title: 'Practices make you better',
    body: 'Push yourself because Noone else to do it for you',
    user: {
      id: 12,
      displayName: 'Somsak'
    },
    tags: ['practice', 'mindset']
  }
]
console.log(posts)

// spread operator
let founders = ['John', 'Mary', 'Susan']
let webOwners = [...founders, 'Adam', 'Ann']
console.log(webOwners)
let friendGreeting = 'Hello'
let greeting = [...friendGreeting]
console.log(greeting)

//Array() constructor
const items = new Array()
console.log(items)
console.log(items.length)

const students = new Array(10) //10 is an initial length
console.log(students)
console.log(students.length)

const scores = new Array(55, 65, 30)
console.log(scores)
console.log(scores.length)
scores[3] = 100
console.log(scores)

// Array.of()
const x = Array.of(10) //10 is the first element of x
console.log(x)
console.log(x[0])

//Array.from()
const y = Array.from(x)
console.log(y)
y[1] = 50
console.log(y)
delete y[1]
console.log(y)
console.log(y.length)
