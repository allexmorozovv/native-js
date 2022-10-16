const user = {
    name: "Alex",
    age: 25,
    isStudent: true
}

const address = [
    {
        id: 1,
        country: "Peru",
        city: "Lima"
    },
    {
        id: 2,
        country: "Chili",
        city: "Santiago"
    },
]

const copyUser = {...user, name: "Bob", isMarried: true}
const copyUser2 = {...user, ...address}
console.log(user)
console.log(copyUser)
console.log(copyUser2)

const user1 = {
    name: "Alex",
    age: 25,
    isStudent: true,
    address: {
        country: "Peru",
        city: "Lima"
    }
}

const deepCopyUser = {...user1, address: {...user1.address, city: "Moscow"}}
console.log(deepCopyUser)


const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        address: {
            country: "Peru",
            city: "Lima"
        }
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89,
        address: {
            country: "Peru",
            city: "Lima"
        }
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
        address: {
            country: "Peru",
            city: "Lima"
        }
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: true,
        scores: 100,
        address: {
            country: "Peru",
            city: "Lima"
        }
    }
]
const newStudent = {
    id: 5,
    name: "John",
    age: 19,
    isMarried: true,
    scores: 100,
    address: {
        country: "Peru",
        city: "Lima"
    }
}
const students2 = [...students, newStudent]
console.log(students2)

const students3 = students2.map(st => st.id === 5 ? {...st, name: "Joe"} : st)
console.log(students3)