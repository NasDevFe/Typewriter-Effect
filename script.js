var messageArray1 = ['I am a Front-End Developer']
var messageArray2 = ['I Love Creating Responsive Websites']
var messageArray3 = ['Using HTML,CSS and Javascript']
var messageArray4 = ['I am proficient in CSS Libraries']
var messageArray5 = ['I am Currently Learning React']
var messageArray6 = ['I Aspire to be a MERN Developer in Future']
var textPosition = 0;
var speed = 100;


typewriter1=()=>{
  document.querySelector("#message1").innerHTML = messageArray1[0].substring(0,textPosition)
  + "<span>\u25ae</span>"

  if(textPosition++ != messageArray1[0].length)
    setTimeout(typewriter1 , speed)

}

window.addEventListener("load", typewriter1);


typewriter2=()=>{
  document.querySelector("#message2").innerHTML = messageArray2[0].substring(0,textPosition)
  + "<span>\u25ae</span>"

  if(textPosition++ != messageArray2[0].length)
    setTimeout(typewriter2 , speed)

}

window.addEventListener("load", typewriter2);




function typewriter3(){
  document.querySelector("#message3").innerHTML = messageArray3[0].substring(0,textPosition)
  + "<span>\u25ae</span>"

for(i=0 ; i<=messageArray3[0].length; i++){
    messageArray3[0].substring(0,i)}
    setTimeout(typewriter3, speed)

}
window.addEventListener("load", typewriter3);

function typewriter4(){
  document.querySelector("#message4").innerHTML = messageArray4[0].substring(0,textPosition)
  + "<span>\u25ae</span>"

for(i=0 ; i<=messageArray4[0].length; i++){
    messageArray4[0].substring(0,i)}
    setTimeout(typewriter4, speed)

}
window.addEventListener("load", typewriter4);


function typewriter5(){
  document.querySelector("#message5").innerHTML = messageArray5[0].substring(0,textPosition)
  + "<span>\u25ae</span>"

  var i = 0;
  while(i<=messageArray5[0].length){
  	messageArray5[0].substring(0,i)
  	i++
  }
    setTimeout(typewriter5, speed)

}
window.addEventListener("load", typewriter5);


function typewriter6(){
  document.querySelector("#message6").innerHTML = messageArray6[0].substring(0,textPosition)
  + "<span>\u25ae</span>";

  
  if(textPosition++ != messageArray6[0].length)
    setTimeout(typewriter6, speed)

}
window.addEventListener("load", typewriter6);




