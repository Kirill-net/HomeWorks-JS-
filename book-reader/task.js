
const book = document.getElementById("book")
const font_size = document.querySelectorAll(".font-size")
console.log(book)
const clear = () => {
    font_size.forEach (el => {
        el.classList.remove("font-size_active")
        book.className = "book"
    });

};

font_size.forEach((el, index) => {
    el.addEventListener('click', (e) => {
        e.preventDefault()
        clear();
        el.classList.toggle('font-size_active')
        if (index === 0) {
            book.classList.toggle("book_fs-small")
        }
        else if (index === 2) {
            book.classList.toggle("book_fs-big")
        }

    });
}); 