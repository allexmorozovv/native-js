const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")
// const handler1 = (event) => {
//     if (event.currentTarget.id ==="small"){
//         alert(event.currentTarget.id)
//     }
// }
const handler1 = (event) => {
    event.stopPropagation()
    if (event.target.tagName ==="BUTTON"){
        alert(event.target.id)
    }
}
const handler2 = (e) => {
    e.stopPropagation()
    alert('yo!!!')
}
const handler3 = (e) => {
    e.stopPropagation()
    alert('hey')
}

// const handler2 = (event) => alert(event)
// sm.onclick = handler1
sm.addEventListener("click", handler1)
// sm.addEventListener("click", handler2)
// sm.removeEventListener("click", handler2)

md.addEventListener("click", handler2)
bg.addEventListener("click", handler3)
const a = document.getElementById("a")
a.addEventListener("click",(e)=>{
    e.preventDefault()
    alert('ты уверен???')
})