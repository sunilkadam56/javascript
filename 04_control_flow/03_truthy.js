//const userEmail = "sunil@google.com"
const userEmail = []

if(userEmail){
    console.log("got user email")
}else{
    console.log("dont have user email");
}

//Falsy Values => false, 0, -0,BigInt On, "", null, undefined, NaN

//truethy values => "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??) : null , undefined

//let val1= 5 ?? 10;
let val1 = null ?? 10


console.log(val1);