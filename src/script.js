import './css/main.scss'
import Experience from './Experience/Experience.js'


const experience = new Experience(document.querySelector('canvas#product360'));



// const slideIndicator = document.querySelectorAll('.indicator');
// const allSlides = document.querySelectorAll('.slide');
// const slideContainer = document.querySelector('.slider-container');
// const hotSpotIndicator = document.querySelectorAll('.explore-hotspot');

// const sliderFunction = (e) => {
//     let getSlideId = e.target.dataset.target;
//     slideIndicator.forEach((indicator) => {
//         indicator.classList.remove('active');
//         if (indicator.dataset.target === e.target.dataset.target) {
//             indicator.classList.add('active');
//         }
//     })
//     allSlides.forEach((slide) => {
//         slide.classList.remove('active');
//     })
//     document.querySelector(`[data-id=${getSlideId}]`).classList.add('active');
// }

// slideIndicator.forEach((indicator) => {
//     indicator.addEventListener('click', (e) => {
//         sliderFunction(e);
//     })
// });

// hotSpotIndicator.forEach((hotspot) => {
//     hotspot.addEventListener('click', (e) => {
//         slideContainer.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
//         sliderFunction(e);
//     })
// })