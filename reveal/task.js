const reveal = Array.from(document.querySelectorAll('.reveal'))
const handler = () => {
  console.log('+++')
  reveal.forEach((el) => {
    const {top, bottom} = el.getBoundingClientRect()
    if (top > window.innerHeight) {
      // console.log("нет")
      el.className = 'reveal'
    }
    else if (bottom < 0) {
      // console.log("нет")
      el.className = 'reveal'
    } else {
      // console.log("да")
      el.className = 'reveal reveal_active'
    }
      
  });
}

document.addEventListener('scroll', handler)