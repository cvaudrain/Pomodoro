var minutes = 25;
var seconds = 0;
var start = $("#start");
var breakTime = $("#break")
var pause = $("#pause");
var reset = $("#reset");
var paused = false;
//countdown function for start button

function countdown(){

  // $('#minutes').html(24);
  // setInterval(function(){
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
// },1000)
}

//pause button function

function pause(){
  var run = setInterval(countdown,1000);
  clearInterval(run);
}

//Event Listeners to launch each function

$('#pause').click(function(){
  pause()
})
$("#start").one("click",function(){ //Using vanilla set syntax "one",function to stop the button from running the function if clicked again.

  setInterval(countdown,1000);
  // alert("function start");

})
