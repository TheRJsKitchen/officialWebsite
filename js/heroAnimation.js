gsap.registerPlugin(ScrollTrigger);

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
        end: "bottom 60%"

    }
})

gsap.from('.phone2', {
    y: 100,
    scrollTrigger: {
        trigger: '.meals',
        scrub: 2,
        toggleActions: "play none reverse none",
        end: "bottom 60%"

    }
})

gsap.from('.phone3', {
    y: 200,
    scrollTrigger: {
        trigger: '.meals',
        scrub: 2,
        toggleActions: "play none reverse none",
        end: "bottom 60%"

    }
})

var foodies = document.querySelectorAll('.foodDiv');

gsap.from(foodies, {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: Power4.inOut,
    stagger: 0.2,
    

    scrollTrigger: {
        trigger: foodies,
        toggleActions: "restart none none reset",
   
    }
})