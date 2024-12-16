const controls = [...document.querySelectorAll(".product__quantity-controls")]
const productValue = [...document.querySelectorAll(".product__quantity-value")]
const productAdd = [...document.querySelectorAll(".product__add")]
const cart = document.querySelector(".cart__products")

controls.forEach((element, index) => {
    element.addEventListener('click', (e) => {
    if (e.target.innerText === "+") {
        productValue[index].textContent = Number(productValue[index].textContent) + 1
    }
    else if (e.target.innerText === "-" & Number(productValue[index].textContent) > 1) {
        productValue[index].textContent = Number(productValue[index].textContent) - 1
    }
    })
})

const addCart = ((img, count, id) => {
    let cartProducts = [...document.querySelectorAll(".cart__product")]

    const productInCard =  cartProducts.find((element) =>
        element.getAttribute('data-id') === id
    )
    if(productInCard) {
        productInCard.lastElementChild.textContent = Number(productInCard.lastElementChild.textContent) + count

      } 
    else {
        cart.insertAdjacentHTML('afterbegin', `
            <div class="cart__product" data-id=${id}>
                <img class="cart__product-image" src=${img}>
                <div class="cart__product-count">${count}</div>
            </div>
            `);
    }
})

productAdd.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        let product = e.target.closest(".product")
        let img = `${product.getElementsByTagName("img")[0].src}`
        let count = Number(productValue[index].textContent)
        let id = product.getAttribute("data-id")
        addCart(img, count, id)
    })
})
