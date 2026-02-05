let value = 3;
let negValue = -value;
// console.log(negValue);
/* converts value to number and then negates it */

let str1 = "hello";
let str2 = "world";

let statement = str1 + " " + str2;

// " " is used for space

console.log(statement);

//console.log(2+2);
//console.log(2-2)
//console.log(2*2)
//console.log(2**2)
//console.log(2/2)
//console.log(5%2) // gives remainder

console.log(2 + 2 + "2");
console.log("2" + 2 + 3);
// agr string pehle h to uske baad jitne bhi + h wo string jaise hi behave karenge
// agr number pehle h to uske baad jitne bhi + h wo number jaise hi behave karenge

console.log(3 + ((4 * 5) % 3));
//messy code => difficult to read and understand
// operator precedence => order of evaluation of operators

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
// right to left associativity
//but messyc

let gameCounter = 100;
//gameCounter++;
++gameCounter;
console.log(gameCounter);

// prefix and postfix increment operator
// learn prefix and postfix from js mdn documentation
// prefix => first increment then use the value
// postfix => first use the value then increment
// ++gameCounter => gameCounter = gameCounter + 1 => gameCounter ki value 101 ho jayegi and then usko use karega
