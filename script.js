gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector("#section_2");

// section.forEach((section) => {
const h2s = section.querySelectorAll("h2");
const h3s = section.querySelectorAll("h3");
const ps = section.querySelectorAll("p");
const image = section.querySelectorAll("img");
gsap
  .timeline({
    scrollTrigger: {
      trigger: section,
      start: "30% 80%",
      end: "+=300",
      scrub: true,
      markers: true,
    },
  })

  .from(h2s, {
    opacity: 0,
  })

  .from(h3s, {
    opacity: 0,
  })

  .from(image, {
    opacity: 0,
  })

  .from(ps, {
    // stagger: 1,
    opacity: 0,
    y: 100,
  });
// });
