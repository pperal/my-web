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

        end: () => "+=" + (document.querySelector(".container").offsetWidth / 3)
    }
});







