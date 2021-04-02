/* About:
Title: Pomodoro Timer Version 2.0
Description: A customizable timer with 25/5 work/break cycles as suggested format.
Front End: HTML, CSS, JavaScript, jQuery
Back End: Node.js, Express.
Owner: Chris Vaudrain
*/
//Global Variables
var chime = new Audio("sounds/jazzhop.m4a")
var minutes = 25;
var seconds = 60;
var minPassed;
var secPassed;
let idVar = setInterval(count,1000) //this runs the interval on count. needs to be global so that clear(idVar) can be called from anywhere
let onOffSwitch = clearInterval(idVar) //will be redefined to remove functionality on start. Currently holding idVar back from starting.
//
//Functions

function count(){ //this increments and sets the clock accordingly.
seconds-=1;
secpassed+=1;
$("#Seconds").html(seconds);
if(seconds <10){
  $("#Seconds").html("0"+seconds);
}
if(seconds==0){
  minutes -=1;
  minPassed+=1;
  seconds = 60; //will be decremented prior to setting the HTML onscreen, so it will go from :00 to :59 smoothly.
}
if(minutes+seconds == 0){
  play(chime);
}
}

function start(){
onOffSwitch = "on"; //this is the "on" switch.
$("#Start-pause").html("Pause");
}

function pause(){
onOffSwitch = clearInterval(idVar); //and the "Off" switch with the magic phrase...
$("#Start-pause").html("Start")
}

function reset(){
minutes+=minPassed;
seconds+=secPassed;
minPassed=0;
secPassed=0;
pause(chime);
}

function toggle(){
reset();
if(minutes>5){ //i.e if it's currently 25 after reset()
  minutes=5;
  $(#timer)
}
else{
  minutes = 25
}

}

function chime(){

}


//
//Event Listeners
$("#Start-pause").click(function(){
  if(onOffSwitch=="on"){
start();
}
else{
  return;
}
});

// $("#Pause").click(function(){
//
// });

$("#Toggle").click(function(){

});

$("#Reset").click(function(){

});
//
