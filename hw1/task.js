const p = document.getElementById("timer")

setInterval (() => {
    p.textContent = Number(p.textContent) - 1
}, 1000);