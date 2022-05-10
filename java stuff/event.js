document.addEventListener("click",
  event => {
  // if specific clicked element matches this selector (is an `li` element)
    if (event.target.matches("li")) {
      // access properties on the specific clicked element using `event.target`
      alert(`You clicked an li element. It contains the text ${event.target.innerText}.`);
    }
  }
)