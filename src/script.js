import './css/main.scss'
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import Experience from './Experience/Experience.js';

// const experience = new Experience(document.querySelector('canvas#product360'));
const slideIndicator = document.querySelectorAll('.indicator');
const allSlides = document.querySelectorAll('.features-item');
const sliderContainer = document.querySelector('.features-container');
const hotSpotIndicator = document.querySelectorAll('.explore-hotspot');
//slider 
const sliderFunction = (e) => {
    let getSlideId = e.target.dataset.target;
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
