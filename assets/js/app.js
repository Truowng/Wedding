const musicBtn = document.querySelector("#music");
const music = document.querySelector(".music");
let toggle = true;

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

const toggleMusic = () => {
  if (toggle) {
    musicBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    music.play();
    toggle = false;
  } else {
    musicBtn.innerHTML = ` <i class="fa-solid fa-play"></i>`;
    toggle = true;
    music.pause();
  }
};
