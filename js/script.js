var tl = new TimelineMax({ onUpdate: updatePercentage });
var t2 = new TimelineMax({ onUpdate: updatePercentage });
var t3 = new TimelineMax({ onUpdate: updatePercentage });
var t4 = new TimelineMax({ onUpdate: updatePercentage });
var t5 = new TimelineMax({ onUpdate: updatePercentage });
var controller = new ScrollMagic.Controller();


var exploreWrap1 = document.querySelector(".explore-wrap-1");
tl.from(".explore-wrap-1 .s-2-inner", 1, { y: -300, opacity: 0 });
tl.from(".explore-wrap-1 .s-2-inner h2", 1, { x: 200, opacity: 0 });
tl.from(".explore-wrap-1 .s-2-inner p", 1, { x: -200, opacity: 0 });
tl.from(".explore-wrap-1 .s-2-inner span", 1, { x: 100, opacity: 0 });
tl.from(".explore-wrap-1 .explore-img", 1, { scale: 0.2, rotation: 180, ease:"bounce.out", x: 50, opacity: 0 });

const scene = new ScrollMagic.Scene({
    triggerElement: ".explore-wrap-1",
    triggerHook: "onLeave",
    duration: "200%"
})
    .setPin(".explore-wrap-1")
    .setTween(tl)
    .addTo(controller);

function updatePercentage() {
    t1.progress()
}


t2.from(".explore-wrap-2 .s-2-inner", 1, { y: -300, opacity: 0 });
t2.from(".explore-wrap-2 .s-2-inner h2", 1, { x: 200, opacity: 0 });
t2.from(".explore-wrap-2 .s-2-inner p", 1, { x: -200, opacity: 0 });
t2.from(".explore-wrap-2 .s-2-inner span", 1, { x: 100, opacity: 0 });
t2.from(".explore-wrap-2 .explore-img", 1, { scale: 0.2, x: 50, opacity: 0 });

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".explore-wrap-2",
    triggerHook: "0",
    duration: "200%"

})
    .setPin(".explore-wrap-2")
    .setTween(t2)
    .addTo(controller);

function updatePercentage() {
    t2.progress()
}



t3.from(".explore-wrap-3 .s-2-inner", 1, { y: -300, opacity: 0 });
t3.from(".explore-wrap-3 .s-2-inner h2", 1, { x: 200, opacity: 0 });
t3.from(".explore-wrap-3 .s-2-inner p", 1, { x: -200, opacity: 0 });
t3.from(".explore-wrap-3 .s-2-inner span", 1, { x: 100, opacity: 0 });
t3.from(".explore-wrap-3 .explore-img", 1, { scale: 0.2, rotation: 180, x: 50, opacity: 0 });

const scene3 = new ScrollMagic.Scene({
    triggerElement: ".explore-wrap-3",
    triggerHook: "onLeave",
    duration: "200%"
})
    .setPin(".explore-wrap-3")
    .setTween(t3)
    .addTo(controller);

function updatePercentage() {
    t3.progress()
}

t4.from(".explore-wrap-4 .s-2-inner", 1, { y: -300, opacity: 0 });
t4.from(".explore-wrap-4 .s-2-inner h2", 1, { x: 200, opacity: 0 });
t4.from(".explore-wrap-4 .s-2-inner p", 1, { x: -200, opacity: 0 });
t4.from(".explore-wrap-4 .s-2-inner span", 1, { x: 100, opacity: 0 });
t4.from(".explore-wrap-4 .explore-img", 1, { scale: 0.2, x: 50, opacity: 0 });

const scene4 = new ScrollMagic.Scene({
    triggerElement: ".explore-wrap-4",
    triggerHook: "onLeave",
    duration: "200%"
})
    .setPin(".explore-wrap-4")
    .setTween(t4)
    .addTo(controller);

function updatePercentage() {
    t4.progress()
}

t5.from(".explore-wrap-5 .s-2-inner", 1, { y: -300, opacity: 0 });
t5.from(".explore-wrap-5 .s-2-inner h2", 1, { x: 200, opacity: 0 });
t5.from(".explore-wrap-5 .s-2-inner p", 1, { x: -200, opacity: 0 });
t5.from(".explore-wrap-5 .s-2-inner span", 1, { x: 100, opacity: 0 });
t5.from(".explore-wrap-5 .explore-img", 1, { scale: 0.2, rotation: 180, x: 50, opacity: 0 });

const scene5 = new ScrollMagic.Scene({
    triggerElement: ".explore-wrap-5",
    triggerHook: "onLeave",
    duration: "200%"
})
    .setPin(".explore-wrap-5")
    .setTween(t5)
    .addTo(controller);

function updatePercentage() {
    t5.progress()
}