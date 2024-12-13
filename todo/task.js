const form = document.getElementById("tasks__form")
const text_in = document.getElementById("task__input")
const task_list = document.getElementById("tasks__list")

const appElements = (text => {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let a = document.createElement("a");
    a.className = "task__remove"
    a.append("&times;")
    a.href = "#"
    div1.className = "task"
    div2.className = "task__title"
    div2.textContent = text
    div1.appendChild(div2)
    div1.appendChild(a)
    task_list.appendChild(div1)
    a.addEventListener("click", (e) => {
        e.preventDefault()
        // console.log(e.target.parentNode)
        remove_parent = e.target.parentNode
        remove_parent.remove()
    })
})


form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (text_in.value.length !== 0) {
    console.log(text_in.value)
    let text = text_in.value
    appElements(text)
    form.reset()
    }
})
