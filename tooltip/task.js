const tooltips = [...document.querySelectorAll('.has-tooltip')]

const clear = (() =>{
    tooltips.forEach(el => {
        el.nextElementSibling.className = "tooltip"
    })
});

tooltips.forEach(el => {
    el.insertAdjacentHTML('afterEnd', `
        <div class="tooltip" style="top: 20vw; left: 0px;">
        ${el.title}
        </div>
    `);

    el.addEventListener('click', (e) => {
        e.preventDefault()
        clear()
        el.nextElementSibling.classList.toggle("tooltip_active")

    })
})