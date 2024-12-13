const tooltip = [...document.querySelectorAll('.has-tooltip')]

tooltip.forEach(el => {
    const div = document.createElement('div') 
    div.textContent = el.title
    div.className = "tooltip"
    div.style = "top:20px; left:0px" 
    div.style.position = "absolute"
    el.appendChild(div)
    el.style.position = "relative"

    el.addEventListener('click', (e) => {
        e.preventDefault()
        el.firstElementChild.classList.toggle("tooltip_active")

    })
})