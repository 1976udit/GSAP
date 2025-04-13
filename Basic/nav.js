var tl = gsap.timeline();

tl.from("h1", {
    y : -30,
    opacity : 0,
    duration : 1,
    delay : 0.5
})

tl.from("h3", {
    y : -30,
    opacity : 0,
    duration : 1,
    stagger : 0.3
})