let button = document.querySelector('.material-symbols-outlined')
let menu = document.querySelector('nav')

button.addEventListener('click', checkMenu)

function checkMenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        button.innerHTML = 'menu'
    } else {
        menu.style.display = 'block'
        button.innerHTML = 'close'
    }
}

function windowSize() {
    if (window.innerWidth >= 1200) {
        button.innerHTML = 'menu'
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}
