var minutes = 25;
var seconds = 0;
var paused = false;
var running = false; /* use this var to toggle when timer is running or not. This can switch on/off the
start button click event, so that you can't mash the button and run the countdown function over and over to break it.  */
//pause button function
function pauseToggle(){
  if (paused == false){
running = false;
  paused = true;
  $('#pause').html("Resume");
} else if(running == false && paused == true){
  paused = false;
  running = true;
  $('#pause').html("Pause");
}

}

//Break Button function

//Reset Button function



//Event Listeners to launch each function


$('#pause').click(function(){

  pauseToggle()
})

//start and reset must be scoped into tyhe same locality i.e this function, in order to allow clearInterval to reference let countdown. countdown is now bound to a let for this reason.
$("#start").on("click",function(){
if(/*paused == false && */ running == false){
  running = true;
  let countdown = setInterval(function(){
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

  if(minutes + seconds == "000"){
  console.log("Time's up.")
  clearInterval(countdown)
  }
  console.log("running")
  },10)

  $('#reset').click(function(){ //This event listener only works after start has been clicked. It's fine bc you wouldn't need this button if the clock was already at 25:00.
      clearInterval(countdown)
  minutes = 25;
  $('#minutes').html(minutes)
  seconds = 0;
  $('#seconds').html(seconds+"0")
  running = false;
  paused = false;
  $('#pause').html("Pause")



  })
}

})
