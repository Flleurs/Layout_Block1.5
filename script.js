let swiper;

function initSwiper() {
  if (document.documentElement.clientWidth < 768) {
    if (!swiper) {
      swiper = new Swiper(".swiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: false,
        breakpoints: {
          320: {
            dynamicBullets: true,
            slidesPerView: 1.3,
            spaceBetween: 15,
          },
          400: {
            dynamicBullets: true,
            slidesPerView: 1.6,
            spaceBetween: 15,
          },
          480: {
            dynamicBullets: true,
            slidesPerView: 2,
            spaceBetween: 16,
          },
          640: {
            dynamicBullets: true,
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
        },
      });
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }
}

initSwiper();

window.addEventListener("resize", initSwiper);

document.addEventListener("DOMContentLoaded", () => {
  const showHideButton = document.querySelector(
    ".brands-content__btns-show-hide"
  );
  const slides = document.querySelectorAll(".swiper-slide");
  let itemsToHide = 0;

  function updateHiddenSlides() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1120) {
      itemsToHide = 3;
    } else if (screenWidth >= 768) {
      itemsToHide = 5;
    } else {
      itemsToHide = 0;
    }

    for (let i = 0; i <= slides.length - 1; i++) {
      if (i >= slides.length - itemsToHide) {
        slides[i].classList.add("hidden-brands");
      } else {
        slides[i].classList.remove("hidden-brands");
      }
    }
    showHideButton.textContent = itemsToHide ? "Показать все" : "";
  }

  function toggleSlides() {
    const areHidden =
      slides[slides.length - 1].classList.contains("hidden-brands");

    for (let i = 0; i <= slides.length - 1; i++) {
      if (i >= slides.length - itemsToHide) {
        slides[i].classList.toggle("hidden-brands", !areHidden);
      }
    }
    showHideButton.textContent = areHidden ? "Скрыть" : "Показать все";
    showHideButton.classList.remove("button-show", "button-hide");
    showHideButton.classList.add(areHidden ? "button-hide" : "button-show");
  }

  showHideButton.addEventListener("click", toggleSlides);
  window.addEventListener("resize", updateHiddenSlides);

  updateHiddenSlides();
});
