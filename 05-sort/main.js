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

// Bubble sort

const nums1 = [54, 11, 36, 32, 68, 87, 23,]

for (let j = 0; j < nums1.length - 1; j++) {

    for (let i = 0; i < nums1.length - 1; i++) {
        if (nums1[i] > nums1[i + 1]) {

            const temp = nums1[i]
            nums1[i] = nums1[i + 1]
            nums1[i + 1] = temp
        }
    }
}

console.log(nums1)


const nums2 = [54, 11, 36, 32, 68, 87, 23, 1, 22]

for (let j = 0; j < nums2.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < nums2.length - 1 - j; i++) {
        if (nums2[i] > nums2[i + 1]) {
            isSorted = false;
            //работает быстрее
            // const temp = nums[i]
            // nums[i] = nums[i + 1]
            // nums[i + 1] = temp
            [nums2[i + 1], nums2[i]] = [nums2[i], nums2[i + 1]]
        }
    }
    if (isSorted) break
}

console.log(nums2)



