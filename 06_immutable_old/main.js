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
        scores: 150
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
        scores: 140
    },
]

const user = {
    name: 'Bob',
    age: 23,
    friends: ['Alex', 'Nick', 'John']
}

// Поверхностная копия user
let copyUser = {...user}

// Глубокая копия user
let deepCopyUser = {...user, friends: [...user.friends]}

//Поверхностная копия students
let copyStudents = [...students]

//Глубокая копия students
let deepCopyStudents = students.map(st => ({...st}))
console.log(deepCopyStudents)
// let deepCopyStudents = structuredClone(students)

// Сортировка по алфавиту deepCopyStudents

// function sortFn(a,b) {
//     switch (a.name>b.name) {
//         case true:
//             return 1
//         case false:
//             return -1
//         default:
//             return 0
//     }
// }

let sortByName = deepCopyStudents.sort((a, b) => a.name > b.name ? 1 : -1)
// console.log(sortByName)

//Сортировка по успеваемости

let sortByScores = deepCopyStudents.sort((a, b) => a.scores - b.scores)
// console.log(sortByScores)

// Сортировка по возрасту
let sortByAge = deepCopyStudents.sort((a, b) => a.age - b.age)
// console.log(sortByAge)

// Score > 100
const bestStudents = deepCopyStudents.filter(st => st.scores >= 100).sort((a, b) => b.scores - a.scores)
console.log(bestStudents)

const topStudents = deepCopyStudents.splice(0, 3)
console.log(topStudents)
console.log(deepCopyStudents)

// Объединить массивы deepCopyStudents и topStudents
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
console.log(newDeepCopyStudents)

// Холостые
let notMarriedStudents = newDeepCopyStudents.filter(st => !st.isMarried)
console.log(notMarriedStudents)

// Массив имен
let studentsNames = newDeepCopyStudents.map(st => st.name)
console.log(studentsNames)

// Строки имен с разделением запятой и пробелом
let namesWithSpase = studentsNames.join(" ")
console.log(namesWithSpase)
let namesWithComma = studentsNames.join(", ")
console.log(namesWithComma)

// Добавить всем студентам свойство
let trueStudents = newDeepCopyStudents.map(st => ({...st, isStudent: true}))
console.log(trueStudents)

// Bob женился
let marriedNick = newDeepCopyStudents.map(st => st.name === 'Bob' ? {...st, isMarried: true} : st)
console.log(marriedNick)
console.log(newDeepCopyStudents)

// Найти по имени Alex
let studentAlex = newDeepCopyStudents.find(st => st.name === 'Alex')
console.log(studentAlex)

// Студент с самым высоким баллом
let maxScoresStudent = newDeepCopyStudents.reduce((acc, st) => acc.scores > st.scores ? acc : st)
console.log(maxScoresStudent)


// Сумма балов
let scoresSum = newDeepCopyStudents.reduce((acc, st) => acc + st.scores, 0)
console.log(scoresSum)

//Функция addFriends принимает массив и добавляет каждому студенту свойство 'friends'
// значением которого является массив имен всех остальных студентов, за исключением собственного имени
const addFriends = (students) => {
    return students
        .map(st => (
            {
                ...st, friends: studentsNames
                    .filter(n => n !== st.name)
            }))
}
console.log(addFriends(students))



