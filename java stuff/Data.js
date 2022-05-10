const colorButton = document.querySelector("#color-button");

colorButton.addEventListener("click", changeColor);

function changeColor() {
  // get "data-color-class" data attribute from the color button element
  // note the `colorClass` camel case syntax
  // we can define custom values in our HTML elements that our JS can retrieve from those elements
  document.body.style.backgroundColor = colorButton.dataset.bkgColor;
  document.querySelectorAll(".text").forEach(
    t => t.style.color = colorButton.dataset.textColor
  )
}