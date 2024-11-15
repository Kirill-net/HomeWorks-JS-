const tab__content = document.querySelectorAll('.tab__content')
const tab = document.querySelectorAll('.tab')

const clear = () => {
    tab.forEach (el => {el.className = "tab"})
    tab__content.forEach (el => {el.className = "tab__content"})
};

tab.forEach((el, index) => {
    el.addEventListener('click', () => {
        clear();
        el.classList.toggle('tab_active')
        tab__content[index].classList.toggle('tab__content_active')

    })
});