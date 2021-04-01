var minutes = 25;
var seconds = 0;
var paused = false;
var running = false;
var btnRead = "break"
var startClicked = false;

$('#start').data('clicked', false)


function pauseToggle(){
  // if(running == false && paused == false){
  //   return;
  // }
  if (paused == false && running == true){
running = false;
  paused = true;
  $('#pause').html("Resume");
} else if(running == false ){
  paused = false;
  running = true;
  $('#pause').html("Pause");
}

}
//break/work toggle button BEFORE timer start has been clicked
$('#break').click(function(){
if(startClicked == true){
  return;
  console.log("Clicked is TRUE 1st break version");
}
// else {
//
// }
  if(btnRead == "break"){
  minutes = 5;
  $('#minutes').html(minutes)
  seconds = 0;
  $('#seconds').html(seconds+"0")
  running = false;
  paused = false;
  $('#pause').html("Pause")
  btnRead = "work"
    $('#break').html("Work")
} else{
  console.log("btnRead not set to break")
  minutes = 25;
  $('#minutes').html(minutes)
  seconds = 0;
  $('#seconds').html(seconds+"0")
  running = false;
  paused = false;
  $('#pause').html("Pause")
  btnRead = "break"
    $('#break').html("Break")
}

})
//Event Listeners to launch each function


$('#pause').click(function(){
  pauseToggle()
})

//start and reset must be scoped into tyhe same locality i.e this function, in order to allow clearInterval to reference let countdown. countdown is now bound to a let for this reason.
$("#start").on("click",function(){
  startClicked = true;
if(paused == false &&  running == false){
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
},1000)


  $('#reset').click(function(){ //This event listener only works after start has been clicked. It's fine bc you wouldn't need this button if the clock was already at 25:00.
     function reset(){
        clearInterval(countdown);
      if(btnRead == "break"){ //bc btn will read break if timer is currently work mode. reset() should reset timer for either one, depending.
  minutes = 25;
}else{
  minutes = 5;
}
  $('#minutes').html(minutes)
  seconds = 0;
  $('#seconds').html(seconds+"0")
  running = false;
  paused = false;
  $('#pause').html("Pause")


}
reset();
//break/work toggle button
//

})
$('#break').click(function(){
  console.log("second break function ran")
  clearInterval(countdown); //stops timer running
//Next comes reset function:
// clearInterval(countdown);
// if(btnRead == "break"){ //bc btn will read break if timer is currently work mode. reset() should reset timer for either one, depending.
// minutes = 5;
// }else{
// minutes = 25;
// }
$('#minutes').html(minutes)
seconds = 0;
$('#seconds').html(seconds+"0")
running = false;
paused = false;
$('#pause').html("Pause")

  if(btnRead == "break"){
  minutes = 5;
  $('#minutes').html(minutes)
  seconds = 0;
  $('#seconds').html(seconds+"0")

  $('#pause').html("Pause")
  btnRead = "work"
    $('#break').html("Work")
    running = false;
    paused = false;
} else{
  minutes = 25;
  $('#minutes').html(minutes)
  seconds = 0;
  $('#seconds').html(seconds+"0")

  $('#pause').html("Pause")
  btnRead = "break"
    $('#break').html("Break")
    running = false;
    paused = false;
}

})
  // })
//
}

})


$(document).keydown(function(){
  console.log("Puased = "+paused)
  console.log("Running = "+running)
  console.log("btnRead = "+btnRead)

})
