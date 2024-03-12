const name = "sunil"

const repoCount = 30

//console.log(name + repoCount + "Value"); //not recomanded

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String(`Sunilkadam`);

console.log(gameName[0]);
console.log(gameName._proto_);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));

console.log(gameName.indexOf('n'));


//const newString = gameName.substring(0,2);
const newString = gameName.slice(-4,4);
console.log(newString);

const url = "https://sunil.com/sunil%20kadam";

console.log(url.replace('%20', '-'));
console.log(url.includes('hithesh'));
console.log(url.split('/'));