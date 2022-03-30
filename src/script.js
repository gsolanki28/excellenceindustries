import './css/main.scss'
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import Experience from './Experience/Experience.js';

let modal360 = document.querySelector('.modal-360');
let fullPage = document.querySelector('#fullpage');
document.querySelector('.experience-360').addEventListener('click', function () {
    modal360.style.display = "grid";
    const experience = new Experience(document.querySelector('canvas#product360'));
})

function closeModal() {
    modal360.style.display = "none";
}

document.querySelector('.modal-close').addEventListener('click', function () {
    closeModal()
})


var handleEvent = function (e) {
    e.preventDefault();
    e.stopPropagation();      // disables scrolling by mouse wheel and touch move
};

modal360.addEventListener('scroll', handleEvent, false);
modal360.addEventListener('wheel', handleEvent, false);
modal360.addEventListener('touchmove', handleEvent, false);



// full page JS

// new fullpage("#fullpage", {
//     //options here
//     //anchors: ["firstPage", "secondPage", "3rdPage", "4thpage"],
//     menu: "#menu",
//     dragAndMove: true,
//     licenseKey: "8EF54198-043049E8-A2559EAF-7849E171",
//     dragAndMoveKey: "ZXhpdGVzdC5jb21fQ09FWkhKaFowRnVaRTF2ZG1VPTgycg==",
//     offsetSections: false,
//     slidesNavigation: true,
//     scrollOverflow: false,
//     onLeave: function (origin, destination, direction) {
//         destination.item.classList.add("lazy-loaded");
//     }
// });

// const slideIndicator = document.querySelectorAll(".indicator");
// const allSlides = document.querySelectorAll(".feature");
// const sliderContainer = document.querySelector(".features-container");
// const hotSpotIndicator = document.querySelectorAll(".feature-hotspot");
// document.querySelectorAll(".explore-hotspot").forEach((hotspot) => {
//     hotspot.addEventListener("click", (e) => {
//         sliderFunction(e);
//         fullpage_api.moveTo(3);
//         e.preventDefault();
//     });
// });

// document
//     .querySelector(".scroll-down")
//     .addEventListener("click", (e) => {
//         fullpage_api.moveTo(2);
//         e.preventDefault();
//     });

// slideIndicator.forEach((indicator) => {
//     indicator.addEventListener("click", (e) => {
//         sliderFunction(e);
//         fullpage_api.moveTo(3);
//     });
// });

const sliderFunction = (e) => {
    let getSlideId = e.target.dataset.target;
    slideIndicator.forEach((indicator) => {
        indicator.classList.remove("active");
        if (indicator.dataset.target === e.target.dataset.target) {
            indicator.classList.add("active");
        }
    });
    allSlides.forEach((slide) => {
        slide.classList.remove("active");
    });
    document
        .querySelector(`[data-id=${getSlideId}]`)
        .classList.add("active");
};







