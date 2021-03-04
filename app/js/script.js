const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', ()=> {
    if(header.classList.contains('open')) {
        header.classList.remove('open');
        body.classList.remove('noscrool')
        fadeElements.forEach((element)=> {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
    } else {
        header.classList.add('open');
        body.classList.add('noscrool')
        fadeElements.forEach((element)=> {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
    }
})