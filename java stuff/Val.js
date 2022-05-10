const  firstName = document.getElementById("name");
const age = document.getElementById("age");
const  lastName = document.getElementById("lastname");

firstName.addEventListener("input", function (event) {
  if (firstName.validity.patternMismatch) {
    firstName.setCustomValidity("Please enter a name at least 2 letters long!");
    firstName.reportValidity();
  } else {
    firstName.setCustomValidity("");

  }
});

age.addEventListener("input", function (event) {
    if (age.validity.typeMismatch || (event.target.value < 0)) {
    age.setCustomValidity("I am expecting a number above zero!");
    age.reportValidity();
  } else {
    age.setCustomValidity("");
  }
});

lastName.addEventListener("input", function (event) {
    if (lastName.validity.patternMismatch) {
      lastName.setCustomValidity("Please enter a name at least 2 letters long!");
      lastName.reportValidity();
    } else {
      lastName.setCustomValidity("");
  
    }
  });