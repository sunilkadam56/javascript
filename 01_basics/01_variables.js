const accountId=143
let accountEmail = "sunil@gmail.com"
var accountPassword ="12467"
accountCity = "Pune"

//accountId = 124 // This is not allowed

accountEmail = "hdfc@google.com"
accountPassword = "123456"
accountCity = "malavan"  // not recomdate
let accountState = 

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// In short

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
  Prefered not to use var
     because of issue in block scope and function scope
*/