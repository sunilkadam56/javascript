const tinderUser = new Object()   //singleton

const tinderUserNS = {}  //non singleton

tinderUserNS.id = "123abc"
tinderUserNS.name = "Dummy"
tinderUserNS.isLoggedIn = false

console.log(tinderUser);

console.log(tinderUserNS);

const regularUser = {
    email: "somone@gmail.com",
    fullname:{
        userFullName:{
            firstname:"sunil",
            lastName : "Kadam"
        }
    }

}
console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

//const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

const users =[
    {
        id: 1,
        email:"sdk@gmail.com"
    },
]

console.log(Object.keys(tinderUserNS));
console.log(Object.values(tinderUserNS));
console.log(Object.entries(tinderUserNS));