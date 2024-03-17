//Object literls

const emp ={
    id:101, name: "Sunil", Salary : 80000
}

console.log(`ID: ${emp.id}, name: ${emp.name}, salary: ${emp.Salary}`);

const emp1 = [101,"Sunil", 50000];
console.log(emp1);


const mySym = Symbol("key1")
const jUser={

    name: "Sunil",
    "full name" : "Sunil Kadam",
    age : 34,
    [mySym] : "myKey1",
    email:"sunil@google.com"

}

console.log(jUser.email);
console.log(jUser["email"]);
console.log(jUser["full name"]);
console.log(typeof jUser[mySym]);
console.log(jUser[mySym]);

jUser.email = "sunilkadam@chatgpt.com"

//Object.freeze(jUser); // not able to change any element of object

console.log(jUser);

jUser.greeting = function(){
    console.log("Hello JS User");

}

jUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);

}
console.log(jUser.greeting());
console.log(jUser.greetingTwo());



