"use strict";

var input=document.getElementById("input");

Number=document.querySelectorAll(".numbers div");
operator=document.querySelectorAll(".operators div");

result=document.getElementById("equal");
clear=document.getElementById("clear");

resultDisplay=false;

for(var i=0; i<Number.length; i++){
    Number[i].addEventListener("click", function(e){
        var currentstring= input.innerHTML;
        var lastchar=currentstring[currentstring.length -1];

        if(resultDisplay===false){
            input.innerHTML +=e.target.innerHTML;
        } else if(resultDisplay===true && lastchar==="+" || lastchar==="-" || lastchar==="x" || lastchar==="/"){
            resulDisplayed=false;
            input.innerHTML="";
            input.innerHTML +=e.target.innerHTML;}
        })
    }
    