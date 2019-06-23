//on clicking the number and operator buttons, they should display on the screen
let displVals = [];
function screen (){
    let nums = document.getElementsByClassName('numbers');
    for(let num of nums){
        num.addEventListener('click', function(){
            let dispNum = parseInt(num.value);            
            document.getElementById('display-dummy').innerHTML = dispNum;
            displVals.push(dispNum);
        });            
    }
    function opDisp(){
        let opNums = document.getElementsByClassName('ops');
        for(let opNum of opNums){
            opNum.addEventListener('click', function(){
                let dispOp = opNum.value;            
                document.getElementById('display-dummy').innerHTML = dispOp;
                displVals.push(dispOp);
            });            
        }
    }
    opDisp();    
}

screen();

//basic math operator functions as arrow functions
let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let division = (a,b) => a/b;

//a function that takes two numbers and an operator and calls any of the basic math operator 
//functions on the numbers
function operate (operator, a, b){    
        a = displVals[0];    
        b = displVals[2];    
        operator = displVals[1];    
        if(operator === '+'){  
            return add(a,b);             
        } else if (operator === '-'){      
            return subtract(a,b);
        } else if (operator === '*'){        
           return multiply(a,b);
        } else {    	
            return division(a,b);
        }       
}   

function equals(){
    let calculation = document.getElementById('equals');
    calculation.addEventListener('click', function(){        
        document.getElementById('display-dummy').innerHTML = operate();                                
    });
}
equals();