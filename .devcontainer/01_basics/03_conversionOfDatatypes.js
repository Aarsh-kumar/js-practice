let score = "100";
console.log(typeof score);

//string to number conversion
let ValueInnumber = Number(score);
console.log(typeof ValueInnumber);

//"100abc" => NaN => not a number
//"100" => 100
// true => 1
// false => 0

let isLoggedIn = "1";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let isLogedOUT = "";

let booleanIsLogedOUT = Boolean(isLogedOUT);
console.log(booleanIsLogedOUT);

//("") => false
//(" ") => true
//("0") => true
//(0) => false
//(1) => true
//(null) => false
//(undefined) => false
//(NaN) => false

let anynumber = 123;
let stringNumber = String(anynumber);
console.log(typeof stringNumber);
console.log(stringNumber);
