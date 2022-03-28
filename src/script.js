import './css/main.scss'
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import Experience from './Experience/Experience.js';

let modal360 = document.querySelector('.modal-360');
let fullPage = document.querySelector('#fullpage');
document.querySelector('.explore-360-icon').addEventListener('click', function () {
    modal360.style.display = "grid";
    const experience = new Experience(document.querySelector('canvas#product360'));
})

function closeModal() {
    modal360.style.display = "none";
}

document.querySelector('.modal-close').addEventListener('click', function () {
    closeModal()
})
    
    
var handleEvent = function(e) {
    e.preventDefault();
    e.stopPropagation();      // disables scrolling by mouse wheel and touch move
};
    
modal360.addEventListener('scroll', handleEvent, false);
modal360.addEventListener('wheel', handleEvent, false);
modal360.addEventListener('touchmove', handleEvent, false);





