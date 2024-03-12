const score = 400;

const balance = new Number(100.6770000)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 1123.65895
console.log(balance.toPrecision(3));

const lakhs = 100000;
console.log(lakhs.toLocaleString('en-IN'));


console.log('********************* Maths *****************');

// console.log(Math);   Run this in inspect on browser

console.log(Math.abs(-4));
console.log(Math.round(4.2));
console.log(Math.ceil(4.2)); //taking next integer
console.log(Math.floor(4.2)); // taking only integer
console.log(Math.sqrt(4));

console.log(Math.min(4,3,5,6,8,9));
console.log(Math.max(4,3,5,6,8,9));

console.log(Math.random());
console.log(Math.pow(Math.random()));
console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

