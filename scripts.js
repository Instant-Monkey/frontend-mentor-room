const numberOfSlider = document.querySelectorAll(
  '#slider-container .slider'
).length;

let slideState = 0;

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

const controlRight = document.getElementById('slider-control-right');
controlRight.addEventListener('click', () => animateTransformSlider(true));
const controlLeft = document.getElementById('slider-control-left');
controlLeft.addEventListener('click', () => animateTransformSlider(false));
