gsap.from("#page1 .box", {
    scale : 0,
    duration : 2,
    delay : 1,
    rotate : 360,
})

gsap.from("#page2 h1", {
    opacity : 0,
    duration : 2,
    delay : 1,
    x : 500,
    scrollTrigger : {
        trigger : "#page2 h1",
        scroller : "body",
        markers : true,
        start : "top 50%"
    }
})

gsap.from("#page2 h2", {
  opacity: 0,
  duration: 2,
  delay: 1,
  x: -500,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    markers: true,
    start: "top 50%",
  },
});

gsap.from("#page3 .box", {
    opacity : 0,
    duration : 2,
    scale : 0,
    rotate : 720,
    delay : 1,
    scrollTrigger : {
        trigger : "#page3",
        scroller : "body",
        markers : true,
        start : "top 60%",
        stop : "top 30%",
        scrub : true
    }
})

