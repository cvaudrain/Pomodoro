var minutes = 25;
var seconds = 0;
// var start = $("#start");
// var breakTime = $("#break")
// var pause = $("#pause");
// var reset = $("#reset");
var paused = false;
//countdown function for start button

function countdown(){

  setInterval(function(){
if(paused == false && minutes + seconds > 0){
    if(seconds <=0){
      seconds = 60;
      minutes-=1;
      $('#minutes').html(minutes);
    }
  seconds -=1
  if(seconds<=9){ //make second format 09, 08 etc
    seconds = "0" + seconds
  }
  $('#seconds').html(seconds)
}

if(minutes + seconds == "000"){ //Replace with audio to be an alarm chime
  var clearVar = setInterval(countdown,10)
clearInterval(clearVar)
  // reset();
}
},10)

}
//pause button function
function pauseToggle(){
  if (paused == false){
  paused = true;
  $('#pause').html("Resume");
} else{
  paused = false;
  $('#pause').html("Pause");
}

}

//Break Button function

//Reset Button function
function reset(){
minutes = 25;
$('#minutes').html(minutes)
seconds = 0;
$('#seconds').html(seconds)
paused = false;
$('#pause').html("Pause")
}


//Event Listeners to launch each function
$('#reset').click(function(){
reset();
})

$('#pause').click(function(){
  pauseToggle()
})

$("#start").one("click",function(){ //Using vanilla set syntax "one",function to stop the button from running the function if clicked again.
if(paused == false){
  countdown();
}
})
