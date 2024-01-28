
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
  });

function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoScroll();


function cursorEffect(){
    let cursor = document.querySelector(".cursor");
let page1Content = document.querySelector(".page1-content");

page1Content.addEventListener("mousemove",(details)=>{
    gsap.to(cursor,{
        x: details.x,
        y: details.y
    })
})

page1Content.addEventListener("mouseenter",(details)=>{
    gsap.to(cursor,{
        scale:1,
        opacity:1
        
    })
})

page1Content.addEventListener("mouseleave",(details)=>{
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursorEffect();


function page2Animation(){
    gsap.from(".page2-nav h2",{
        y:20,
        stagger: 0.5,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".page2-nav h2",
            scroller:".main",
            start: "top 40%",
            end: "top 37%",
            scrub:2
        }
    })

    gsap.from(".elem h1",{
        y:20,
        stagger: 0.5,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".elem h1",
            scroller:".main",
            start: "top 40%",
            end: "top 37%",
            scrub:2
        }
    })
}
page2Animation();

function page3Animation(){
    gsap.from(".underlinewaladiv h2",{
        y:70,
        stagger: 0.25,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".underlinewaladiv h2",
            scroller:".main",
            start: "top 40%",
            end: "top 37%",
            scrub:2
        }
    })

}
page3Animation();


function page4Animation(){
    gsap.from(".page4-nav h2",{
        y:120,
        stagger: 0.25,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".page4-nav h2",
            scroller:".main",
            start: "top 40%",
            end: "top 37%",
            scrub:2
        }
    })

    gsap.from(".elem1 h1",{
        y:120,
        stagger: 0.25,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".elem1 h1",
            scroller:".main",
            start: "top 40%",
            end: "top 37%",
            scrub:2
        }
    })
}
page4Animation();



var tl = gsap.timeline();
tl.from(".loader h3",{
    x:60,
    opacity:0,
    delay:3,
    duration:1,
    stagger:.1
})
tl.to(".loader h3",{
    y:-60,
    opacity:0,
    duration:.5,
    stagger:.1
})

tl.to(".loader",{
    opacity:0
    
})

tl.from(".page1-content h1 span",{
    y:200,
    opacity:0,
    duration:.6,
    stagger:.1,
    delay:-.3
})

tl.to(".loader",{
    display: "none"
    
})

