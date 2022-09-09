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

// console.log(students.sort((a,b)=>a.scores-b.scores))
// console.log(students.sort((a,b)=>a.name.localeCompare(b.name)))
console.log(students.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1))

//bubble sort

const nums = [54, 11, 36, 32, 68, 87, 23]

for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false;
                //работает быстрее
                // const temp = nums[i]
                // nums[i] = nums[i + 1]
                // nums[i + 1] = temp
                [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
        }
    }
    if (isSorted) break
}

console.log(nums)