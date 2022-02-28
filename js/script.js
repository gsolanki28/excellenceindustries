var tl = new TimelineMax({ onUpdate: updatePercentage });
var controller = new ScrollMagic.Controller({
    globalSceneOptions:
    {
        triggerHook: 'onLeave'
    }
});

tl.from(".s-2-inner", 1, { y: -300, opacity: 0 });
tl.from(".s-2-inner h2", 1, { x: 200, opacity: 0 });
tl.from(".s-2-inner p", 1, { x: -200, opacity: 0 });
tl.from(".s-2-inner a", 1, { x: 100, opacity: 0 });
tl.from(".explore-img", 1, { x: 50, opacity: 0 });

var scene = document.querySelectorAll('.explore-wrap');

for (const section of scene) {
    const scene = new ScrollMagic.Scene({
        triggerElement: section,
    })
        .setPin(section)
        .setTween(tl)
        .addTo(controller);
}


    function updatePercentage() {
        tl.progress();
        console.log(tl.progress());
    }

