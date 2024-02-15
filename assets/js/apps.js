const nav = document.querySelector('#nav-clone');

window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        nav.classList.remove('hide')
        nav.classList.add('fixed');
    } else {
        nav.classList.add('hide')
        nav.classList.remove('fixed');
    }
})

const imgFirst = document.querySelectorAll('.popUpImg');
const popUpContainer = document.querySelector('.popup');
const popUpImg = document.querySelector('.popup img');
const popUpImgSpan = document.querySelector('.popup span');

imgFirst.forEach(image => {
    image.addEventListener('click', function () {
        popUpContainer.style.opacity = '1';
        popUpImg.src = image.getAttribute('src');
        popUpContainer.classList.toggle('active');
    })
})

popUpImgSpan.addEventListener('click', function () {
    popUpContainer.classList.toggle('active');
})
