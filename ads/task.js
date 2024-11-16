const rotator_case =Array.from(document.querySelectorAll(".rotator__case"))

//чистим лист
const clearClass = () => {
    rotator_case.forEach(el => {
        el.className = "rotator__case"
    })
}
// обработчик (замыкание)
let count = 0;
const handler = function () {
    clearClass()
    rotator_case[count].classList.add("rotator__case_active")
    ++count;
    if (count === rotator_case.length) {
        count = 0
    }
};

// запускаем цикл
setInterval(handler, 1000)
