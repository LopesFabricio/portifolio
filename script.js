// Scroll Reveal

window.sr = ScrollReveal({ reset: true });

sr.reveal(".card", { distance: "150px", interval: 600 });
sr.reveal(".box", {
  rotate: { x: 0, y: 30, z: 0 },
  duration: 2000,
  interval: 250,
});

// scroll suave navbar
const menuItems = document.querySelectorAll('#navigation-header a[href^="#"]');

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 40;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
  smoothScrollTo(0, to);
}

// Header menu

let header = document.querySelector("#header");
let navigationHeader = document.querySelector("#navigation-header");
let showSidebar = false;

const toggleSidebar = () => {
  showSidebar = !showSidebar;
  if (showSidebar) {
    navigationHeader.style.marginLeft = "-10vw";
    navigationHeader.style.animationName = "showSidebar";
  } else {
    navigationHeader.style.marginLeft = "-100vw";
    navigationHeader.style.animationName = ""; //retirando animação
  }
};
