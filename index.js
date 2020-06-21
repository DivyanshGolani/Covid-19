var menu = document.getElementById('menu')
var nav = document.getElementById('nav')
var exit = document.getElementById('exit')

console.log(nav)

menu.addEventListener('click', () => {
    nav.classList.toggle('hide-mobile')
})

console.log(nav)

exit.addEventListener('click', () => {
    nav.classList.toggle('hide-mobile')
})