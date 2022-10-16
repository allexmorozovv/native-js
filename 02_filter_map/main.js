const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: true,
        scores: 100
    }
]
// const getNames = (arr) => {
//     const result = []
//     const getNewValue = (el) => el.name
//     for (let i = 0; i < arr.length; i++) {
//         const newValue = getNewValue(arr[i])
//         result[i] = newValue
//     }
//     return result
// }
// console.log(getNames(students))

const easyMap = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = fn(arr[i])
        result[i] = newValue
    }
    return result
}
console.log(easyMap(students, st => st.name))
console.log(easyMap(students, st => `${st.name}, ${st.age} yo, ${st.scores} scores `))
console.log(easyMap(students, st => st.scores))

console.log(students.map(st => st.name))
console.log(students.map(st => `${st.name}, ${st.age} yo, ${st.scores} scores `))
console.log(students.map(st => st.scores))

const easyFilter = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(easyFilter(students, st => st.scores >= 100))
console.log(students.filter(st => st.scores >= 100))

const easyFind = (arr,fn) => {
    const result =[]
    for (let i=0; i<arr.length; i++){
        if (fn(arr[i])===true){
            return arr[i]
        }
    }
}
console.log(easyFind(students,st=>st.age<20))
console.log(students.find(st=>st.age<20))

//["Bob", "Alex","Nick", "John"]=> "Bob,Alex,Nick,John"
const easyJoin = (arr, separator=",")=>{
    let result = ""
    for (let i=0; i<arr.length ; i++){
        if (i<arr.length-1){
            result = result + arr[i]+separator
        }else {
            result+=arr[i]
        }
    }
    return result
}

console.log(easyJoin(["Bob", "Alex","Nick", "John"]))
console.log(easyJoin(["Bob", "Alex","Nick", "John"], " "))
console.log(["Bob", "Alex","Nick", "John"].join())
console.log(["Bob", "Alex","Nick", "John"].join(" "))























