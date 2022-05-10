// Let's create a document event listener.

// Let's add the following data attributes:
// `target` to the button elements: this will be the selector of the bulb that should be toggled when that button is clicked
// `color` to the bulb element: this will be the class that we should add to the bulb element

document.addEventListener("click", changeLight);

function changeLight(event) {
  let clickedLightButton = event.target.matches(".button");
  // run some code if we clicked element with class "button"
  if (clickedLightButton) {
    // resetting back to "all off" / initial state
    // before we turn on this specific light
    turnOffLights();
    // getting data-target attribute string and assigning to variable
    let selector = event.target.dataset.target;
    let targetElement = document.querySelector(selector);
    // add some class to this target element
    // get class as data attribute from bulb element
    let colorClass = targetElement.dataset.color;
    targetElement.classList.add(colorClass);
  }
}

function turnOffLights() {
  // we don't know which light is on based on what class it has
  const lights = document.querySelectorAll(".bulb");
  // returns a NodeList object - which we can loop through
  for (light of lights) {
    // each element with class `bulb`
    // remove all other classes
    // reset class attribute to just "bulb"
    light.setAttribute("class", "bulb");
  }
}

