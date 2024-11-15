const list_active = document.querySelector('.dropdown__list')
const dropdown__value = document.querySelector('.dropdown__value')
const list__item = document.querySelectorAll('.dropdown__link')

dropdown__value.addEventListener('click', () => {
    list_active.classList.toggle("dropdown__list_active")
});

list__item.forEach(item => {
        item.addEventListener('click', (event) => {
        event.preventDefault();
        list_active.classList.remove('dropdown__list_active');
        dropdown__value.textContent = item.textContent
        });
});
