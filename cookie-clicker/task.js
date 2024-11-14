const img = document.getElementById("cookie")
const counter = document.getElementById("clicker__counter")
i = true
img.onclick = () => {
    i = !i
    counter.textContent = Number(counter.textContent) + 1
    console.log(i)
    if (this.i)  {
        console.log(i)
        img.width += 20
    } else { img.width -= 20

    }

   
};