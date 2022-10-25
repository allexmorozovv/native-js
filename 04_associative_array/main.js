todolistId_1 = "1"
todolistId_2 = "2"

const todoLists = [
    {id: todolistId_1, title: "What to learn", filter: "all",},
    {id: todolistId_2, title: "What to buy", filter: "all",}
]

const tasks = {
    [todolistId_1]: [
        {id: '11', title: 'HTML', isDone: true},
        {id: '12', title: 'JS', isDone: true},
        {id: '13', title: 'React', isDone: true},
    ],
    [todolistId_2]: [
        {id: '21', title: 'Beer', isDone: true},
        {id: '22', title: 'Fish', isDone: true},
        {id: '23', title: 'Cheese', isDone: true},
    ],
}

console.log([...tasks[todolistId_1].map(el => el.title)])
console.log([...tasks[todolistId_1], {id: '14', title: 'Redux', isDone: true}])
console.log(tasks[todolistId_2].find(t => t.id === '22'))
console.log(tasks[todolistId_1][0].title)

//Create => [...], concat, push
//Read   => map, filter, sort, find
//Update => map
//Delete => filter

const numbers = [1,2,3,4,5]
console.log(numbers.reduce((acc,el)=>acc+el,0))
console.log(numbers.reduce((acc,el)=>acc>el?acc:el))

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
console.log(students.reduce((acc,el)=>acc.scores>el.scores?acc:el))
console.log(students.reduce((acc,el)=>{
    acc[el.name]={...el}
    delete acc[el.name].name
    return acc
},{}))