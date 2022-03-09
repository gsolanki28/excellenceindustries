import './css/main.scss'
import Experience from './Experience/Experience.js'


const experience = new Experience(document.querySelector('canvas#product360'));


let slideIndicator = document.querySelectorAll('.indicator');
let allSlides = document.querySelectorAll('.slide');
let slideContainer = document.querySelector('.slider-container');
slideIndicator.forEach((userItem) => {
    userItem.addEventListener('click', function (e) {
        let getSlideId = e.target.id;
        let getCurrentIndicator = e.target;
        let slidedataType = e.target.dataset.type;
        slideContainer.classList.remove('type-2');
        if (slidedataType == "type-2") {
            slideContainer.classList.add('type-2');
        }
        slideIndicator.forEach((indicator) => {
            indicator.classList.remove('active');
        })
        allSlides.forEach((slide) => {
            slide.classList.remove('active');
        })
        document.querySelector(`[data-id=${getSlideId}]`).classList.add('active');
        getCurrentIndicator.classList.add('active');
    })
});