//on clicking the number and operator buttons, they should display on the screen
let displVals = [];
function screen (){
    let nums = document.getElementsByClassName('numbers');
    for(let num of nums){
        num.addEventListener('click', function(){
            let dispNum = num.value;            
            displVals.push(dispNum);
            let combo = parseInt(displVals.join(''));
            console.log(combo);
            document.getElementById('display-dummy').innerHTML = combo;
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
    for(let i=0;i<displVals.length;i++){
        a = displVals[i];
        b = displVals[i+2];    
        operator = displVals[i+1];    
        if(operator === '+'){  
            let ttl1 =  add(a,b);     
            return ttl1;        
        } else if (operator === '-'){      
            let ttl2 = subtract(a,b);
            return ttl2;
        } else if (operator === '*'){        
           let ttl3 = multiply(a,b);
           return ttl3;
        } else { 
            let ttl4 = division(a,b);
            return ttl4;
        }     
    }    
}  

//display the result of two numbers on the display area
function equals(){
    let calculation = document.getElementById('equals');
    calculation.addEventListener('click', function(){        
        document.getElementById('display-dummy').innerHTML = operate();                                
    });
}
equals();