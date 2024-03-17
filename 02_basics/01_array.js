//Array

const myArray =[0,1,2,3,4,5];
const cars = ["Altroz", "Swift", "Tiago"];


console.log(myArray);
console.log(cars);

const newCars = cars.join();
console.log(newCars);

//myArray.push(6); // add value in last
//myArray.pop(); // delete value last one
//myArray.pop()

myArray.unshift(9);
myArray.shift();//delete first one

console.log(myArray);
console.log(myArray.length);

const car = "Altraz"
console.log(car.length);

console.log("*********** slice and splice *************");

console.log("A", myArray);

const myArr1 = myArray.slice(1,3)
console.log("A=> ", myArr1);
console.log("B", myArray);


const myArr2 = myArray.splice(1,3)

console.log("B=>",myArr2);

