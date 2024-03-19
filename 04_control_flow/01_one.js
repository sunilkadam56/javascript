//if

// const isUserLoggedIn = true

// if(isUserLoggedIn){
//     console.log("logged");
// }

// if(2!=="2"){          //=== checking value and type
//     console.log("Executed");
// }

const userLoogedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoogedIn && debitCard && 2!=3){
    console.log("Allowe to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user is able to login")
}

