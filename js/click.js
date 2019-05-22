function click(i) {
  if (i !== current) {
    stopButton();
     alert("Game over" + "\n" + "You scored " + score);
  }
  else {
    score++;
    speed = speed - 10;
    document.getElementById('score').innerHTML = score;
    //if user press right color, this condtion apply and score++ will add everytime user press right color.
  }
}
