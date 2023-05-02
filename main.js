var burgerState = 0;

const handleBurger = () => {
  if (window.screen.width <= 600) {
    if (burgerState == 0) {
      burgerState = 1;
      const headerMenu = document.getElementById("headerMenu");
      headerMenu.style.height = "20vh";
      headerMenu.style.visibility = "visible";
      headerMenu.style.opacity = 1;
      console.log(burgerState);
    } else {
      burgerState = 0;
      const headerMenu = document.getElementById("headerMenu");
      headerMenu.style.height = "10vh";
      headerMenu.style.visibility = "hidden";
      console.log(burgerState);
    }
  }
};

var currentSlide = 0;
var delay = 400;
var z = 100;

const forwardSlider = (number) => {
  if (window.screen.width <= 600) {
    const slides = document.getElementsByClassName("section-card");
    slides[number].style.transform = "translateY(" + 100 + "vh)";
    console.log(slides[currentSlide % 3]);
    setTimeout(() => {
      z--;
      slides[number].style.transform = "translateY(" + 0 + "vh)";
      slides[number].style.zIndex = z;
      slides[number].style.transform = "rotate(" + 3 * (number) + "deg)"
    }, delay);
  } else {
    console.log("Mobile");
  }
};


