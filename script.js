var heading=document.getElementById('colorValue');
// heading.innerHTML="Hello World!";

function setButtonColor(button, red, green, blue){
    button.setAttribute("style" , "background-color: rgb("+ red + " , " + green + " , " + blue + ")"
    );
}

function makeColorValue(){
    return Math.round(Math.random()*255);
}

function startGame(){
var buttons = document.getElementsByClassName('btn');
var answerButton= Math.round( Math.random()* (buttons.length-1));
var ans=document.getElementById("answer");

ans.innerHTML="";
document.body.style.background= '';

for(var i=0; i<buttons.length; i++){

var red=makeColorValue();
var green=makeColorValue();
var blue=makeColorValue();

setButtonColor(buttons[i], red, green ,blue);

if(i==answerButton){
    heading.innerHTML= `(${red}, ${green}, ${blue})`;
}


buttons[i].addEventListener('click', function() {
    if(this == buttons[answerButton]){
        ans.innerHTML= "Correct!";
        
    }
    else{
        ans.innerHTML= "Wrong Answer! Try Again."
    }
});



}


}
startGame();
let r=document.getElementById("reset");
r.addEventListener("click", startGame);