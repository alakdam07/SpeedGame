
let buttons = [
  document.getElementById("buttonOne"),
  document.getElementById("buttonTwo"),
  document.getElementById("buttonThree"),
  document.getElementById("buttonFour")
]; //All buttons put in only one variable 
buttons[0].onclick = function() {click(0)};
buttons[1].onclick = function() {click(1)};
buttons[2].onclick = function() {click(2)};
buttons[3].onclick = function() {click(3)};
// Put the buttons in arrays and convert into onclick function

let current = 0;
let score = 0;
let speed = 1500;

function startButton() {
  let next = pickNew(current);

  buttons [current].style.backgroundColor = "blue"; 
  buttons[next].style.backgroundColor = 'orange';

  current = next;


  timer = setTimeout(startButton, speed);

  function pickNew(previous){
    let next = getRndInteger(0, 3); //passing arguments 

    if (next != previous){
      return next;
    } else {
      return pickNew(previous);
    }
  }
}

function stopButton(){
  clearTimeout(timer);
  for (let i = 0; i < 4; i++) {
      buttons[i].style.backgroundColor = "red";
      buttons[i].onclick = null;
  }
  let overlay = document.getElementById('result');
  let stopButton = document.getElementById('finishGame');

  overlay.style.visibility = 'visible';
 stopButton.innerHTML = "your score is "+ score;
}
