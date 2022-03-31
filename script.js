var messageArray = ['This is the Type-Writer Effect']
var textPosition = 0;
var speed = 100;


typewriter1=()=>{
  document.querySelector("#message1").innerHTML = messageArray[0].substring(0,textPosition)
  + "<span>\u25ae</span>"

  if(textPosition++ != messageArray[0].length)
    setTimeout(typewriter1 , speed)

}

window.addEventListener("load", typewriter1);


typewriter2=()=>{
  document.querySelector("#message2").innerHTML = messageArray[0].substring(0,textPosition)
  + "<span>\u25ae</span>"

  if(textPosition++ != messageArray[0].length)
    setTimeout(typewriter2 , speed)

}

window.addEventListener("load", typewriter2);




function typewriter3(){
  document.querySelector("#message3").innerHTML = messageArray[0].substring(0,textPosition)
  + "<span>\u25ae</span>"

for(i=0 ; i<=messageArray[0].length; i++){
    messageArray[0].substring(0,i)}
    setTimeout(typewriter3, speed)

}
window.addEventListener("load", typewriter3);

function typewriter4(){
  document.querySelector("#message4").innerHTML = messageArray[0].substring(0,textPosition)
  + "<span>\u25ae</span>"

for(i=0 ; i<=messageArray[0].length; i++){
    messageArray[0].substring(0,i)}
    setTimeout(typewriter4, speed)

}
window.addEventListener("load", typewriter4);


function typewriter5(){
  document.querySelector("#message5").innerHTML = messageArray[0].substring(0,textPosition)
  + "<span>\u25ae</span>"

  var i = 0;
  while(i<=messageArray[0].length){
  	messageArray[0].substring(0,i)
  	i++
  }
    setTimeout(typewriter5, speed)

}
window.addEventListener("load", typewriter5);


function typewriter6(){
  document.querySelector("#message6").innerHTML = messageArray[0].substring(0,textPosition)
  + "<span>\u25ae</span>";

  	messageArray.map( ()=>{
  		messageArray[0].substring(0,textPosition)
  	})
  
    setTimeout(typewriter6, speed)

}
window.addEventListener("load", typewriter6);




