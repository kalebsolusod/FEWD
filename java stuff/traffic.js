let stopLight = document.getElementById('stopLight')
let slowLight = document.getElementById('slowLight')
let goLight = document.getElementById('goLight')

function resetColors() {
  stopLight.classList.remove('red');
  slowLight.classList.remove('yellow');
  goLight.classList.remove('green');
}

function turnRed() {
  resetColors()
  stopLight.classList.add('red');
}

function turnYellow() {
  resetColors()
  slowLight.classList.add('yellow');
}

function turnGreen() {
  resetColors()
  goLight.classList.add('green');
}

document.getElementById('stopButton').addEventListener('click', turnRed);
document.getElementById('slowButton').addEventListener('click', turnYellow);
document.getElementById('goButton').addEventListener('click', turnGreen);