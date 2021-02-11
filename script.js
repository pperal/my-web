gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".container .panel");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".side-scrolling-wrapper",
        pin: true,
        scrub: 1,
        snap: {
            snapTo: 1 / (sections.length - 1),
            duration: { min: 0.2, max: 0.3 },
            delay: 0
        },

        end: () => "+=" + (document.querySelector(".container").offsetWidth / 2)
    }
});

//////////-------------------------yoyo


let config = { strength: 1 };

gsap.set("h1", { xPercent: -50, x: -1 });

gsap.to("h1", {
    repeat: -1,
    yoyo: true,
    x: 1,
    duration: 0.2,
    ease: "power1.inOut",
    modifiers: {
        x: gsap.utils.unitize(value => value * config.strength, "px")
    }
});

gsap.to(config, {
    strength: 100,
    ease: "none",
    scrollTrigger: {
        // defaults to using the window as the trigger, starting at the top, ending at the bottom.
        scrub: true
    }
});

//-------------------------------------------------





