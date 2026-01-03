const accountId = 143143
let accountEmail = "aarsh4amazon@gmail.com"
var accountPassword ="@iamaarsh"
accountCity = "pune"
let accountState;

// accountId = 2 not allowed

console.log(accountId);

accountEmail = "hdfc@gmail.com"
accountPassword = "00909090909"
accountCity = "delhi"

/*
prefer not to use var
because of the issue in block scope and functional scope
*/ 

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);

