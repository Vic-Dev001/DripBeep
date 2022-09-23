"use strict";
document.addEventListener("DOMContentLoaded", function () {
  //Elements
  const section = document.querySelector(".section1");
  const nav = document.querySelector("nav");
  const revealBtn = document.querySelector(".reveal");
  const closeBtn = document.querySelector(".close");
  const handBurger = document.querySelector(".hand-bugger");
  const signUp = document.querySelector(".sign-up");
  const links = document.querySelectorAll(".links");

  const initialCoord = section.getBoundingClientRect();

  window.addEventListener("scroll", function () {
    if (this.window.scrollY > initialCoord.top) {
      nav.classList.add("sticky");
      handBurger.classList.add("hidden");
      revealBtn.classList.add("top");
      handBurger.classList.add("top");
      signUp.classList.add("top-sign");
      links.forEach((link) => (link.style.color = "white"));
      signUp.style.display = "none";
    } else {
      nav.classList.remove("sticky");
      signUp.classList.remove("top-sign");
      revealBtn.classList.remove("top");
      links.forEach((link) => (link.style.color = "black"));
      signUp.style.display = "block";
    }
  });

  //   reveal sections
  const sections = document.querySelectorAll(".secs");

  const revealSection = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  };
  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.2,
  });

  sections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
  });

  //handle handburger

  revealBtn.addEventListener("click", function () {
    handBurger.classList.remove("hidden");
    revealBtn.classList.add("hidden");
  });
  // close hand burger
  closeBtn.addEventListener("click", function () {
    handBurger.classList.add("hidden");
  });
});
