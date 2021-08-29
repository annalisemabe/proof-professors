// Testimonials slideshow
const sliderEl = document.querySelector(".glider")

if (sliderEl) {
  new Glider(sliderEl, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    rewind: true,
    dots: ".dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next"
    }
  });
}
