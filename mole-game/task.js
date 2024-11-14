
// определяем все константы
const count_dead = document.getElementById("dead");
const count_lost = document.getElementById("lost");

// вспомогательные функции
const geth = (index) => document.getElementById(`hole${index}`);
clear_count = () => {
    count_dead.textContent = 0
    count_lost.textContent = 0
}

// основная функция клика ячейки - "index"
const hole = function (index) {
    geth(index).onclick = () =>{
        if (geth(index).className === "hole hole_has-mole") {
            count_dead.textContent = Number(count_dead.textContent) + 1;
            if (Number(count_dead.textContent) === 10) {
                alert("Победа")
                clear_count()
            };
        } else { 
            count_lost.textContent = Number(count_lost.textContent) + 1;
            if (Number(count_lost.textContent) === 5) {
                alert("Вы проиграли")
                clear_count()
            };
        }
    }
};
// запускаем ячейки (можно наверное в цикле)
const hole1 = hole(1)
const hole2 = hole(2)
const hole3 = hole(3)
const hole4 = hole(4)
const hole5 = hole(5)
const hole6 = hole(6)
const hole7 = hole(7)
const hole8 = hole(8)
const hole9 = hole(9)

