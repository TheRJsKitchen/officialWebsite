gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({defaults: {opacity: 0, y: 100, duration: 1}})


tl.from('.background', {y: 1400, duration: 2, ease: Power4.easeOut})
.from('.mainContent', {pointerEvents: "none"})
.from('.eggLogo', {}, "-=2")

var aboutUs = document.querySelector(".explore");

aboutUs.addEventListener('click', (e)=>{

    aboutUs.style.transform = "translateY(0.2rem)";

    setTimeout(function() {
        aboutUs.style.transform = "translateY(0rem)";
    }, 100)

    setTimeout(function() {
        
        e.preventDefault();
        document.querySelector('.featured').scrollIntoView({
            behavior : 'smooth'
        })

    }, 500)

})  

gsap.from('.phone1', {
    y: 200,
    scrollTrigger: {
        trigger: '.meals',
        scrub: 2,
        toggleActions: "play none reverse none",

    }
})

gsap.from('.phone2', {
    y: 100,
    scrollTrigger: {
        trigger: '.meals',
        scrub: 2,
        toggleActions: "play none reverse none",

    }
})

gsap.from('.phone3', {
    y: 200,
    scrollTrigger: {
        trigger: '.meals',
        scrub: 2,
        toggleActions: "play none reverse none",

    }
})