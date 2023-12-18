/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER PRODUCTS ===============*/
let productSwiper = new Swiper(".product__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1024: {
            spaceBetween: 72
        }
    }
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')

    if (this.scrollY >= 400) scrollUp.classList.add('show__scroll'); else scrollUp.classList.remove('show__scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button'),
    darkTheme = 'dark-theme',
    iconTheme = 'ri-sun-line'

// Previously if user selected
const selectedTheme = localStorage.getItem('selected-theme'),
    selectedIcon = localStorage.getItem('selected-icon')

// Obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light',
    getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously choose the topic
if(selectedTheme){
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-sun-line'? 'add' : 'remove'](iconTheme)
}

// Activate / Deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or Remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('.selected-theme', getCurrentTheme())
    localStorage.setItem('.selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
reve = new ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 450
})

reve.reveal(`.home__data, .product__container, .footer__container`)
reve.reveal(`.home__img`, {origin: 'bottom', delay: 600})
reve.reveal(`.new__card, .brand__img`, {interval: 100})
reve.reveal(`.collection__explore:nth-child(1)`, {origin: 'right'})
reve.reveal(`.collection__explore:nth-child(2)`, {origin: 'left'})
reve.reveal(`.footer__info`, {origin: 'top', delay: 600})
