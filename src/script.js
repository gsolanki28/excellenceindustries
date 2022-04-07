import './css/main.scss'
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { scrollIntoView } from "seamless-scroll-polyfill";

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




const slideIndicator = document.querySelectorAll(".indicator");
const allSlides = document.querySelectorAll(".feature");
const featuredContainer = document.querySelector(".features-container");
const exploreContainer = document.querySelector(".explore");
const hotSpotIndicator = document.querySelectorAll(".feature-hotspot");
document.querySelectorAll(".explore-hotspot").forEach((hotspot) => {
    hotspot.addEventListener("click", (e) => {
        sliderFunction(e);
        scrollIntoView(featuredContainer, { behavior: "smooth", block: "center", inline: "center" });
        // featuredContainer.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        e.preventDefault();
    });
});

document
    .querySelector(".scroll-down")
    .addEventListener("click", (e) => {
        scrollIntoView(exploreContainer, { behavior: "smooth", block: "center", inline: "center" });
        // exploreContainer.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        e.preventDefault();
    });

slideIndicator.forEach((indicator) => {
    indicator.addEventListener("click", (e) => {
        sliderFunction(e);
        featuredContainer.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    });
});

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







