let title = document.getElementById("title")
let button1 = document.getElementById("button-1")
let button2 = document.getElementById("button-2")
let reset = document.getElementById("reset")

function makeTitleColorRed(){
    title.style.color = "red"
}

function makeButton1BackgroundColorYellow(){
    button1.style.backgroundColor = "yellow"
}
function makeButton2BorderColorBlue(){
    button2.style.borderColor = "blue"
}
function makePageReset(){
    button2.style.borderColor = "black"
    button1.style.backgroundColor = "white"
    title.style.color = "black"
}

title.addEventListener("click", makeTitleColorRed)
button1.addEventListener("click", makeButton1BackgroundColorYellow)
button2.addEventListener("click", makeButton2BorderColorBlue)
reset.addEventListener("click", makePageReset)