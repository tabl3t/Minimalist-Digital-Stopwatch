let display = document.getElementById("display");
let startButton = document.getElementById("startbtn");
let stopButton = document.getElementById("stopbtn");
let resetButton = document.getElementById("resetbtn");

let seconds = 0;
let tens = 0;
let interval;

function startTimer(){
  tens = tens+1;
  
  if(tens>99){
    seconds = seconds+1;
    tens = 0;
  }
  let tensText = tens;
  if(tens<10){
    tensText = "0"+ tens;
  }
  let secondsText = seconds;
  if(seconds<10){
    secondsText = "0"+ seconds;
  }
  display.innerText = secondsText + ":" + tensText;
}

startButton.addEventListener("click", function(){
  clearInterval(interval);
  interval = setInterval(startTimer,10);
});

stopButton.addEventListener("click", function(){
  clearInterval(interval);
});

resetButton.addEventListener("click", function() {
  clearInterval(interval);
  tens = 0;
  seconds = 0;
  display.innerText = "00:00";
});