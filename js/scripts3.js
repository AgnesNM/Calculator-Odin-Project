//Basic math operator functions
// function add (a,b){
//     let sum = a+b;
//     return sum;
// }

function subtract (c,d){
    let subt = c-d;
    return subt;
}

function multiply(e,f){
    let mult = e*f;
    return mult;
}

function division (g,h){
    let divide = g/h;
    return divide;    
}
//A function that takes two numbers and operator, and calls one of the above functions

function add (num1,num2){
    let sum = num1 + num2;
    return sum;
}

function operate(num1,num2, operator){
    num1 = 1;
    num2 = 2; 
    operator = document.getElementById('plus');
    operator.addEventListener('click', function(event){
        add(num1,num2);
    }); 
}
operate();