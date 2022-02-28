var tl = new TimelineMax({ onUpdate: updatePercentage });
var controller = new ScrollMagic.Controller();

tl.from(".s-2-inner", 1, { y: -300, opacity: 0 });
tl.from(".s-2-inner h2", 1, { x: 200, opacity: 0 });
tl.from(".s-2-inner p", 1, { x: -200, opacity: 0 });
tl.from(".s-2-inner a", 1, { x: 100, opacity: 0 });
tl.from(".explore-img-right", 1, { x: 50, opacity: 0 });
tl.from(".s-3-inner", 1, { y: 300, opacity: 0 });
tl.from(".s-3-inner h2", 1, { x: -200, opacity: 0 });
tl.from(".s-3-inner p", 1, { x: 200, opacity: 0 });
tl.from(".s-3-inner a", 1, { x: -100, opacity: 0 });
tl.from(".explore-img-left", 1, { x: -50, opacity: 0 });

// const scene = new ScrollMagic.Scene({
//   triggerElement: "#scrollContainer",
//   triggerHook: "onLeave",
//   duration: "100%"
// })
//   .setPin("#scrollContainer")
//   .setTween(tl)
//   .addTo(controller);

// function updatePercentage() {
//   tl.progress();
//   console.log(tl.progress());
}
