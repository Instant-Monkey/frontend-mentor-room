const numberOfSlider = document.querySelectorAll(
  '#slider-container .slider'
).length;

let slideState = 0;
let isMobileMenuOpen = false;

function setSlideState(updateFunction) {
  const result = updateFunction(slideState);
  if (result < 0) {
    slideState = numberOfSlider - 1;
  } else if (result >= numberOfSlider) {
    slideState = 0;
  } else {
    slideState = result;
  }
}
function animateTransformSlider(forward) {
  setSlideState((currentState) =>
    forward ? currentState + 1 : currentState - 1
  );

  const sliderContainer = document.getElementById('slider-container');

  sliderContainer.style.transform = `translateX(${-100 * slideState}vw)`;
}

function toggleIdElementVisibility(id) {
  const el = document.getElementById(id);
  el.classList.toggle('hide');
}

function toggleMobileMenu() {
  toggleIdElementVisibility('mobile-menu-burger');
  toggleIdElementVisibility('mobile-menu-close');

  const mobileMenuBackground = document.getElementById(
    'mobile-menu-background'
  );
  mobileMenuBackground.style.transform = `translateY(${
    isMobileMenuOpen ? -60 : 0
  }vw)`;

  const navItems = document.querySelectorAll('.nav-container .nav-item');
  for (let item of navItems) {
    item.classList.toggle('show');
  }
  isMobileMenuOpen = !isMobileMenuOpen;
}

const controlRight = document.getElementById('slider-control-right');
controlRight.addEventListener('click', () => animateTransformSlider(true));
const controlLeft = document.getElementById('slider-control-left');
controlLeft.addEventListener('click', () => animateTransformSlider(false));
const controlMobileMenu = document.getElementsByClassName('mobile-menu-cta');

for (let controlMobileMenuElement of controlMobileMenu) {
  controlMobileMenuElement.addEventListener('click', toggleMobileMenu);
}
