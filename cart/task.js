const controls = [...document.querySelectorAll(".product__quantity-controls")]
const product__value = [...document.querySelectorAll(".product__quantity-value")]
const product__add = [...document.querySelectorAll(".product__add")]
const cart = document.querySelector(".cart__products")
const products = []

controls.forEach((element, index) => {
    element.addEventListener('click', (e) => {
    if (e.target.innerText === "+") {
        product__value[index].textContent = Number(product__value[index].textContent) + 1
    }
    else if (e.target.innerText === "-" & Number(product__value[index].textContent) > 1) {
        product__value[index].textContent = Number(product__value[index].textContent) - 1
    }
    })
})

const addCart = ((img, count, id) => {
    if (products.includes(id)) {
        let cart_products = [...document.querySelectorAll(".cart__product")]
        cart_products.forEach((product) => {
            if (product.getAttribute('data-id') === id) {
                product.lastElementChild.textContent = Number(product.lastElementChild.textContent) + count
            }
        })
    }
    else {
    products.push(id)

    let p1 = document.createElement("div")
    let p2 = document.createElement("img")
    let p3 = document.createElement("div")

    p1.className = "cart__product"
    p1.setAttribute("data-id", `${id}`)
    p2.className = "cart__product-image"
    p2.src = img
    p3.className = "cart__product-count"
    p3.textContent = `${count}`

    p1.appendChild(p2)
    p1.appendChild(p3)
    cart.appendChild(p1)
    }
})

product__add.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        let product = e.target.closest(".product")
        let img = `${product.getElementsByTagName("img")[0].src}`
        let count = Number(product__value[index].textContent)
        let id = product.getAttribute("data-id")
        addCart(img, count, id)
    })
})
