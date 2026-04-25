const accountId = 144553 
let accountEmail = "axs@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; 

// accountId = 2 // not allowed 


accountEmail = "hc@hc.com"
accountPassword = "212121212"
accountCity = "Bengaluru"
/*
Prefer not use var
because of issue in block cope and funtional scope
*/
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
