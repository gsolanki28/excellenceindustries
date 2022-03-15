import './css/main.scss'
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import Experience from './Experience/Experience.js'


const slideIndicator = document.querySelectorAll('.indicator');
const allSlides = document.querySelectorAll('.slide');
const sliderContainer = document.querySelector('.slider-container');
const hotSpotIndicator = document.querySelectorAll('.explore-hotspot');
const scrollSnap = document.querySelector('#scrollSnap');
let scrollSlider = false;


const experience = new Experience(document.querySelector('canvas#product360'));
//slider 
const sliderFunction = (e) => {
    let getSlideId = scrollSlider ? e.dataset.target : e.target.dataset.target;
    // let slidedataType = scrollSlider ? e.dataset.type : e.target.dataset.type;
    // sliderContainer.classList.remove('type-2');
    // if (slidedataType == "type-2") {
    //     sliderContainer.classList.add('type-2');
    // }
    slideIndicator.forEach((indicator) => {
        indicator.classList.remove('active');
        if (indicator.dataset.target === (scrollSlider ? e.dataset.target : e.target.dataset.target)) {
            indicator.classList.add('active');
        }
    })
    allSlides.forEach((slide) => {
        slide.classList.remove('active');
    })
    document.querySelector(`[data-id=${getSlideId}]`).classList.add('active');
    if (!scrollSlider) {
        scrollSlider = true;
    }
}

slideIndicator.forEach((indicator) => {
    indicator.addEventListener('click', (e) => {
        scrollSlider = false;
        sliderFunction(e);
    })
});

hotSpotIndicator.forEach((hotspot) => {
    hotspot.addEventListener('click', (e) => {
        sliderContainer.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        sliderFunction(e);
    })
})

scrollSnap.addEventListener('scroll', function () {
    if (sliderContainer.offsetTop == scrollSnap.scrollTop ) {
        scrollSlider = true;
        sliderContainer.style.position = "sticky";
        scrollSnap.style.overflow = "hidden";
    } else {
        scrollSnap.style.overflowY = "auto";
        scrollSlider = false;
    }
});

// for scroll animation 
let nextSlide, prevSlide;
let removescrollSlider = false;
function scrollSlides() {
    let activeSlide;
    slideIndicator.forEach(indicator => {
        if (indicator.classList.contains('active')) {
            activeSlide = indicator;
            let activeDataset = activeSlide.dataset.target;
            let last = activeDataset.charAt(activeDataset.length - 1);
            nextSlide = document.querySelector(`[data-target=slide-${parseInt(last) + 1}]`)
            prevSlide = document.querySelector(`[data-target=slide-${parseInt(last) - 1}]`)
        }
    })
}

window.addEventListener('mousewheel', function (e) {
    if (scrollSlider) {
        scrollSlides();
        let wDelta = e.wheelDelta < 0 ? 'down' : 'up';
        if (wDelta === "down") {
            if (nextSlide) {
                sliderFunction(nextSlide);
            }
            else {
                removescrollSlider = true;
                scrollSnap.style.overflowY = "auto";
                sliderContainer.style.position = "relative";
            }
        }
        else {
            if (prevSlide) {
                sliderFunction(prevSlide);
            }
            else {
                removescrollSlider = true;
                scrollSnap.style.overflowY = "auto";
                sliderContainer.style.position = "relative";
            }
        }
        scrollSlider = false;
        if (!removescrollSlider) {
            setTimeout(function () { scrollSlider = true }, 1000)
        }
    }
});