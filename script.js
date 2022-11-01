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
        });
    }
    for(var i=0; i<operator.length; i++){
        operator[i].addEventListener("click", function(e){
            var currentstring=input.innerHTML;
            var lastchar= currentstring[currentstring.length -1];

            if(lastchar==="+" || lastchar==="-" || lastchar==="×" || lastchar==="÷"){
                var newString = currentstring.substring(0, currentstring.length -1) + e.target.innerHTML;
                input.innerHTML= newString;
            }else if(currentstring.length==0){
                console.log("Enter a number first");
            }else{
                input.innerHTML+=e.target.innerHTML;
            }
        });
}
result.addEventListener("click", function(){
    var inputString =input.innerHTML;
    var numbers= inputString.split(/\+|\-|\×|\÷/g);

    var operators = inputString.replace(/[0-9]|\./g, "").split("");

    console.log(inputString);
    console.log(operators);
    console.log(numbers);
    console.log("-----------------");


    var divide = operators.indexOf("÷");
    while(divide !=-1){
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
    }

    var multiply = operators.indexOf("×");
    while(multiply !=-1){
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }

    var subtract = operators.indexOf("-");
    while (subtract !=-1){
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }

    var add = operators.indexOf("+");
    while(add !=-1){
        numbers.splice(add,2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add= operators.indexOf("+");
    }

    input.innerHTML = numbers[0];

    resulDisplayed = true;

});
clear.addEventListener("click", function(){
    input.innerHTML = "";
});