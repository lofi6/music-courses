// nav
const sidebar = document.getElementById("sidebar");
const cross = document.getElementById("cross");
const hamburger = document.getElementById("hamburger");
const body = document.body;

hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  sidebar.classList.add("active");
  body.classList.add("no-scroll");
});

cross.addEventListener("click", function (e) {
  e.preventDefault();
  sidebar.classList.remove("active");
  body.classList.remove("no-scroll");
});

const sidebarLinks = sidebar.querySelectorAll("a");
sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
    body.classList.remove("no-scroll");
  });
});

// links.forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = this.href;

//     sidebar.classList.remove("active");

//     sidebar.addEventListener("transitionend", function handler() {
//       window.location.href = href;
//       sidebar.removeEventListener("transitionend", handler);
//     });
//   });
// });

// desktop nav
window.addEventListener("scroll", () => {
  if (window.scrollY > 160) {
    hamburger.classList.add("visible");
  } else {
    hamburger.classList.remove("visible");
  }
});

// scroll - fade
const scrollItems = document.querySelectorAll(".scroll-fade");

window.addEventListener("scroll", () => {
  scrollItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      item.classList.add("visible");
    }
  });
});

// audio pause
const audios = document.querySelectorAll(".audio-library-grid audio");

audios.forEach((audio) => {
  audio.addEventListener("play", () => {
    audios.forEach((other) => {
      if (other !== audio) {
        other.pause();
        other.currentTime = 0;
      }
    });
  });
});
