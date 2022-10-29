//
// const names=["Bob","Tom", "Alex","bob"]
// console.log(names.sort())
// console.log([...names.sort()])
// console.log(names.reverse())
//
//
// const num = [100, 1000,9, 88]
// console.log(num.sort())
// const compareFn=(a,b)=>a-b
// console.log(num.sort(compareFn))

const students = [
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Helge",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "Bob",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
]

const ageSort = (a, b) => a.age - b.age
console.log([...students.sort(ageSort)])

// const nameSort = (a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
const nameSort = (a, b) => a.name.localeCompare(b.name)
console.log([...students.sort(nameSort)])



