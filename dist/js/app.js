const scene = document.querySelector('#scene');

const parallaxInstance = new Parallax(scene);


const tl = gsap.timeline();

tl.from('.logo', {x: -100, opacity: 0, duration: 0.3})
  .from('.header__nav .header__li', {x: -100, opacity: 0, duration: 0.3, stagger: 0.1})
  .from('.header__right', {x: -100, opacity: 0, duration: 0.3})
  .from('.hero__title', {y: 200, opacity: 0, duration: 0.3})
  .from('.hero__info', {x: 100, opacity: 0, duration: 0.3})
  .from('.hero .btn', {x: -100, opacity: 0, duration: 0.3})
  .from('.hero__juice', {y: 200, opacity: 0, duration: 0.3})
  .from('.hero__row--top', {y: -100, opacity: 0, duration: 0.3})
  .from('.hero__leaves', {y: -600, opacity: 0, duration: 0.3})