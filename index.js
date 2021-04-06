//Global Variables
var chime = new Audio("sounds/jazzhop.m4a")
var minutes = 25;
var seconds = 0;
var minPassed = 0;
var idVar = setInterval(count,1000) //runs the interval on count.

//Functions
function onOffSwitch(){
  clearInterval(idVar) // to halt idVar.
}
onOffSwitch();//Prevent setInterval on load.
var status = "off";

function count(){ // increments and sets the clock accordingly.
  console.log(minutes+":"+seconds)
  if(seconds==0){
    minutes -=1;
    minPassed+=1;
    seconds = 60;
    $("#Minutes").html(minutes);
  }
seconds-=1;
$("Minutes").html(minutes);
$("#Seconds").html(seconds);
if(seconds <10){
  $("#Seconds").html("0"+seconds);
}
if(minutes+seconds == 0){
  onOffSwitch();
  chimeTime();
}
                }

function start(){
if(minutes+seconds == 0){ return;}
$("#Start-pause").html("Pause");
idVar = setInterval(count,1000);
status="on"
}

function pause(){
  status="off"
if(minutes+seconds==0){return;}
$("#Start-pause").html("Start")
onOffSwitch(); //calls clearInterval with proper scope.
status="off"
}

function reset(){
  pause();
minutes+=minPassed;
seconds=0;
$("#Minutes").html(minutes);
$("#Seconds").html("00");
minPassed=0;
secPassed=0;
chime.pause();

$("#Start-pause").html("Start")
}

function toggle(){ //toggles break and work timers
reset();
if(minutes>6){
  minutes=5;
  $("#Toggle").html("Work")
}
else{
  minutes = 25
  $("#Toggle").html("Break")
}
$("#Minutes").html(minutes);
$("#Seconds").html("00");
}

function chimeTime(){ //alarm sound
  chime.play();
}

//Event Listeners
$(document).ready(function(){ //await page load

$("#Start-pause").click(function(){
  if(status=="on"){
pause();
}
else if(status =="off"){
  start();
}
});

$("#Toggle").click(function(){
toggle();
});

$("#Reset").click(function(){
reset();
});

})
