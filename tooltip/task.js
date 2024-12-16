const tooltips = [...document.querySelectorAll(".has-tooltip")]

tooltips[0].insertAdjacentHTML('afterEnd', `
    <div class="tooltip" style="top: 0vw; left: 0px;"></div>
`);
const tooltip = document.querySelector(".tooltip")


tooltips.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault()
        let left = (el.getBoundingClientRect().left)
        let top = (el.getBoundingClientRect().bottom) + 5

       if (el.title === tooltip.textContent) {
        tooltip.classList.toggle("tooltip_active")
       }
       else {
        tooltip.textContent = el.title
        tooltip.style=`top: ${top}px; left: ${left}px;`
        tooltip.classList.add("tooltip_active")
       }
    })
})