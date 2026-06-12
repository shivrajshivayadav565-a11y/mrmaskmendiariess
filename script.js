window.addEventListener("load", function(){

document.body.classList.add("loaded");

});

const text =
"Explore Nature • Capture Adventures • Inspire Journeys";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing, 60);

}

}

typing();
