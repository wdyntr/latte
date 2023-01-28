// toggleclass active
const navbarLink = document.querySelector('.nav-link')

// ketika humburger diklik
document.querySelector('#menu').onclick = () => {
    navbarLink.classList.toggle('active')
}

// klik diluar sidebar untuk menghilangkan hamburger menu
const hamburger = document.querySelector('#menu')

document.addEventListener('click', function(e) {
    // jika bukan haburger menu dan link home dll yang diklik maka
    if(!hamburger.contains(e.target) && !navbarLink.contains(e.target)) {
        navbarLink.classList.remove('active')
    } 
})