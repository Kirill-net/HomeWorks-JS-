const form = document.getElementById("tasks__form")
const textIn = document.getElementById("task__input")
const taskList = document.getElementById("tasks__list")


const appElements = (text => {
    taskList.insertAdjacentHTML('afterbegin', `
        <div class="task">
          <div class="task__title">
            ${text}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>
        `);

    let a = [...document.querySelectorAll(".task__remove")]

    a.forEach((el) => {
        el.addEventListener("click", (e) => {
            e.preventDefault()
            // console.log(e.target.parentNode)
            remove_parent = e.target.parentNode
            remove_parent.remove()
        })
    })
})  


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let text = textIn.value.trim()
    if (text.length > 0) {
    let text = textIn.value
    appElements(text)
    form.reset()
    }
})
