// Services page
const animateNumbers = category => {
  const STEPS = 50
  const pricingSections = document.querySelectorAll("[data-services]");

  [...pricingSections].forEach((section) => {
    if (section.dataset.services === category) {
      const nodes = document.querySelectorAll("[data-price-animate]");

      [...nodes].forEach((node) => {
        const endValue = +node.dataset.priceAnimate;
        const increase = Math.round(endValue / STEPS) || 1;
        let value = 0;
    
        const animateText = () => {
          if (value === endValue) return;

          node.textContent = value;
          value = value + increase > endValue ? endValue : value + increase;
    
          window.requestAnimationFrame(animateText);
        };
        window.requestAnimationFrame(animateText);
      });
    }
  })
};

const fadeInDetails = category => {
  const pricingSections = document.querySelectorAll("[data-services]");

  [...pricingSections].forEach((section) => {
    const descriptions = section.querySelectorAll("ul");

    if (section.dataset.services === category) {
      section.style.position = "relative";
      section.style.opacity = 1;
      section.style.left = 0;

      [...descriptions].forEach((ul) => {
        const lis = ul.querySelectorAll("li");
        [...lis].forEach((li, i) => {
          setTimeout(() => li.classList.add("fadeIn"), i * 50);
        });
      });
    } else {
      section.style.position = "absolute";
      section.style.opacity = 0;
      section.style.left = '-9999px';

      [...descriptions].forEach((ul) => {
        const lis = ul.querySelectorAll("li");
        [...lis].forEach((li) => li.classList.remove("fadeIn"));
      });
    }
  });
};

window.addEventListener("load", () => {
  const selectList = document.querySelector("select");
  const pricingSections = document.querySelectorAll("[data-services]");

  if (selectList && pricingSections) {
    animateNumbers('professional');
    fadeInDetails('professional');
  
    selectList.addEventListener("change", (e) => {
      animateNumbers(e.target.value);
      fadeInDetails(e.target.value);
    });
  }
});
