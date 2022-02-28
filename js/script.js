var tl = new TimelineMax({onUpdate:updatePercentage});
// var t2 = new TimelineMax();
var controller = new ScrollMagic.Controller();


var exploreWrap1 = document.querySelector(".explore-wrap-1");
tl.from(exploreWrap1.querySelector(".s-2-inner"), 1, { y: -300, opacity: 0 });
tl.from(exploreWrap1.querySelector(".s-2-inner h2"), 1, { x: 200, opacity: 0 });
tl.from(exploreWrap1.querySelector(".s-2-inner p"), 1, { x: -200, opacity: 0 });
tl.from(exploreWrap1.querySelector(".s-2-inner a"), 1, { x: 100, opacity: 0 });
tl.from(exploreWrap1.querySelector(".explore-img"), 1, { x: 50, opacity: 0 });

// var scene = document.querySelectorAll('.explore-wrap');

const scene = new ScrollMagic.Scene({
    triggerElement: exploreWrap1,
    triggerHook:"onLeave",
    duration:"100%"
})
    .setPin(exploreWrap1)
    .setTween(tl)
    .addTo(controller);

    function updatePercentage(){
        t1.progress()
    }
// // second 

// const exploreWrap2 = document.querySelector(".explore-wrap-2");
// t2.from(exploreWrap2.querySelector(".s-2-inner"), 1, { y: -300, opacity: 0 });
// t2.from(exploreWrap2.querySelector(".s-2-inner h2"), 1, { x: 200, opacity: 0 });
// t2.from(exploreWrap2.querySelector(".s-2-inner p"), 1, { x: -200, opacity: 0 });
// t2.from(exploreWrap2.querySelector(".s-2-inner a"), 1, { x: 100, opacity: 0 });
// t2.from(exploreWrap2.querySelector(".explore-img"), 1, { x: 50, opacity: 0 });

// const scene2 = new ScrollMagic.Scene({
//     triggerElement: exploreWrap2,
// })
//     .setPin(exploreWrap2)
//     .setTween(t2)
//     .addTo(controller);

