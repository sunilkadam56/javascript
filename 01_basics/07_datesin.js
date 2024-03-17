console.log("*************Dates **********")

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());


console.log(typeof myDate);

//let myCreatedDate = new Date(2024,11,12);
//console.log(myCreatedDate.toDateString());
let myCreatedDate = new Date(2024,2,12,7,3);
console.log(myCreatedDate.toLocaleString());

let myLocaldate = new Date("12/03/2024")
console.log(myLocaldate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log((myTimeStamp/1000));

console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date()

console.log(newDate.getDate());
console.log(newDate.getMonth().toString());



