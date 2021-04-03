/* About:
Title: Pomodoro Timer Version 2.0
Description: A customizable timer with 25/5 work/break cycles as suggested format.
Front End: HTML, CSS, JavaScript, jQuery
Back End: Node.js, Express.
Owner: Chris Vaudrain
*/
//Global Variables
var chime = new Audio("sounds/jazzhop.m4a")
var minutes = 24;
var seconds = 60;
var minPassed = 0;
// var secPassed = 0;
var idVar = setInterval(count,1000) //this runs the interval on count. needs to be global so that clear(idVar) can be called from anywhere
function onOffSwitch(){
  clearInterval(idVar) //will be redefined to remove functionality on start. Currently holding idVar back from starting.MAYBE NOT.
}
onOffSwitch();//needs to be here or else counting starts on load.
var status = "off";

function count(){ //this increments and sets the clock accordingly.
  console.log(minutes+":"+seconds)
seconds-=1;
// secPassed+=1;
$("#Seconds").html(seconds);
if(minutes==24){
  $("#Minutes").html("24")
}else{
  $("#Minutes").html("4")
}
if(seconds <10){
  $("#Seconds").html("0"+seconds);
}
if(seconds==0){
  minutes -=1;
  minPassed+=1;
  seconds = 60; //will be decremented prior to setting the HTML onscreen, so it will go from :00 to :59 smoothly.
  $("#Minutes").html(minutes);
}
if(minutes+seconds == 0){
  play(chime);
}

}

function start(){
//onOffSwitch = "on"; //this is the "on" switch. It redefines our clearInterval
$("#Start-pause").html("Pause");
idVar = setInterval(count,1000);
status="on"
console.log(status)
}

function pause(){
$("#Start-pause").html("Start")
onOffSwitch();
//onOffSwitch = clearInterval(idVar);
 //clearInterval(idVar); //and the "Off" switch with the magic phrase... might need to actually call function. We'll see. ??????????????????
console.log(idVar)
status="off"
console.log(status)
}

function reset(){
minutes+=minPassed;
seconds=60;
$("#Minutes").html(minutes+1);
setTimeout(function(){
  $("#Minutes").html(minutes);
},1000)
$("#Seconds").html("00");
minPassed=0;
secPassed=0;
pause(chime);
}

function toggle(){
reset();
if(minutes>5){ //i.e if it's currently 25 after reset()
  minutes=5;
}
else{
  minutes = 25
}
$("#Minutes").html(minutes);
$("#Seconds").html("00");
}

// function chime(){
//
// }


//
//Event Listeners
$("#Start-pause").click(function(){
  if(status=="on"){
pause();
}
else if(status =="off"){
  start();
}
});

// $("#Pause").click(function(){
//
// });

$("#Toggle").click(function(){
toggle();
});

$("#Reset").click(function(){
reset();
});
//
