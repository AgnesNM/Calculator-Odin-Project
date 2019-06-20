//Basic math operator functions
//Rewritten as arrow functions


function operate (operator, a, b){
    a = 6;
    b = 2;
    operator = ['+', '-','*', '/'];
    let choice = operator[Math.floor(Math.random()*operator.length)];
    if(choice == '+'){
        console.log(choice);
        add();
    } else if (choice == '-'){
        subtract();
    } else if (choice == '*'){
        multiply();
    } else {

    }
}

let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let division = (a,b) => a/b;

operate();



