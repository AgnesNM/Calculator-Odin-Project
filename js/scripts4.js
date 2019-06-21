//basic math operator functions as arrow functions
let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let division = (a,b) => a/b;

//a function that takes two numbers and an operator and calls any of the basic math operator 
//functions on the numbers
function operate (operator, a, b){  	
a = 6;
b = 2;
  operator = ['+', '-','*', '/'];
  let choice = operator[Math.floor(Math.random()*operator.length)];
    if(choice == '+'){        
        return add(a,b);
    } else if (choice == '-'){      
        return subtract(a,b);
    } else if (choice == '*'){        
        return multiply(a,b);
    } else {    	
      return division(a,b);
    }
}

alert(operate());