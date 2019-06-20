function add (a,b){
    let sum = a+b;
    return sum;
}
function subtract (a,b){
    let subt = a-b;
    return subt;
}
function multiply(a,b){
    let mult = a*b;
    return mult;
}
function division (a,b){
    let divide = a/b;
    return divide;    
}
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