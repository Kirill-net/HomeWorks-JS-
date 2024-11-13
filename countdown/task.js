const p = document.getElementById("timer")

const num = setInterval (() => {
    if (Number(p.textContent) === 0) {
        clearInterval(num)
        alert("Вы победили в конкурсе.")

        // return : чтобы не выкидывало -1 после остановки цикла
        // и нажатия "ok"
        return 
        }
    p.textContent = Number(p.textContent) - 1;

    
}, 1000);

