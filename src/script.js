import './css/main.scss'
import Experience from './Experience/Experience.js'


const experience = new Experience(document.querySelector('canvas#product360'));
const slideIndicator = document.querySelectorAll('.indicator');
const allSlides = document.querySelectorAll('.slide');
const slideContainer = document.querySelector('.slider-container');
const hotSpotIndicator = document.querySelectorAll('.explore-hotspot');

const sliderFunction = (e) => {
    let getSlideId = e.target.dataset.target;
    let getCurrentIndicator = e.target;
    let slidedataType = e.target.dataset.type;
    slideContainer.classList.remove('type-2');
    if (slidedataType == "type-2") {
        slideContainer.classList.add('type-2');
    }
    slideIndicator.forEach((indicator) => {
        indicator.classList.remove('active');
        if (indicator.dataset.target === e.target.dataset.target) {
            indicator.classList.add('active');
        }
    })
    allSlides.forEach((slide) => {
        slide.classList.remove('active');
    })
    document.querySelector(`[data-id=${getSlideId}]`).classList.add('active');
}

slideIndicator.forEach((indicator) => {
    indicator.addEventListener('click', (e) => {
        sliderFunction(e);
    })
});

hotSpotIndicator.forEach((hotspot) => {
    hotspot.addEventListener('click', (e) => {
        sliderFunction(e);
    })
})