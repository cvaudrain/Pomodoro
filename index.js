/* About:
Title: Pomodoro Timer Version 2.0
Description: A customizable timer with 25/5 work/break cycles as suggested format.
Front End: HTML, CSS, JavaScript, jQuery
Back End: Node.js, Express.
Owner: Chris Vaudrain
*/
//Global Variables
var chime = new Audio("sounds/jazzhop.m4a")
var minutes = 1;
var seconds = 0;
var minPassed = 0;
var idVar = setInterval(count,200) //this runs the interval on count. needs to be global so that clear(idVar) can be called from anywhere
function onOffSwitch(){
  clearInterval(idVar) //will be called to halt idVar.
}
onOffSwitch();//needs to be here or else counting starts on load.
var status = "off";

function count(){ //this increments and sets the clock accordingly.
  console.log(minutes+":"+seconds)
  if(seconds==0){
    minutes -=1;
    minPassed+=1;
    seconds = 60; //will be decremented prior to setting the HTML onscreen, so it will go from :00 to :59 smoothly.
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
console.log(minutes+":"+seconds)
if(minutes+seconds == 0){ return;}
$("#Start-pause").html("Pause");
idVar = setInterval(count,20); //THIS LINE IS KEY LOOK HERE. we can't reference idVar as idVar(). We also can't ref as let idVar= setInterval. It HAS to redefinean existing....
status="on"                      //..  let (i.e a variable). CANNOT create new Let, because the SCOPE is then BLOCK level and our pause() cannot reach it with onOffSwitch() anymore.
console.log(status)
          //Note to future self. Redefining at lock level is excellent. Re-DECLARING ruins scoping
}

function pause(){
  status="off"
if(minutes+seconds==0){return;}
$("#Start-pause").html("Start")
onOffSwitch(); //calls clearInterval with proper scope.
//onOffSwitch = clearInterval(idVar);
 //clearInterval(idVar); //and the "Off" switch with the magic phrase... might need to actually call function. We'll see. ??????????????????
console.log(idVar)
status="off"
console.log(status)

}

function reset(){
  pause();
minutes+=minPassed;
seconds=0; //TRYING
$("#Minutes").html(minutes);
$("#Seconds").html("00");
minPassed=0;
secPassed=0;
chime.pause();

$("#Start-pause").html("Start")
console.log("Reset: minutes ="+minutes)
}

function toggle(){
reset();
if(minutes>6){ //i.e if it's currently 25 after reset()
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

function chimeTime(){ //I did this to practice chaining the short loop sound. Just as well to make the alarm file 3x as long lol
  console.log(minutes+seconds)
  chime.play();
//    setTimeout(function(){
//     console.log("timeout begun success")
//   if(minutes+seconds==0){
// chime.play();
// }
// setTimeout(function(){
//  console.log("timeout 2 begun success")
// if(minutes+seconds==0){
// chime.play();
// }
// setTimeout(function(){
//  console.log("timeout 3 begun success")
// if(minutes+seconds==0){
// chime.play();
// }
// },10600)
// },10600)
// },10600)
}


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
