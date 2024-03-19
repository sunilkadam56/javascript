const user={
    username : "sunil",
    price: 999,
    welcomemsg : function(){
        console.log(`${this.username} , welcome to website`);
        //console.log(this); //current data
    }
}

// user.welcomemsg()
// user.username="sam"
// user.welcomemsg()

//console.log(this);  {}

// function chai(){
//     console.log(this);
// }

// chai()
// this is not allowed in function

const chai = () => {
    let username = "sunil"
    console.log(this);
}

chai()

// *******************************************

// const addTwo = (num1 , num2)=>{
//     return num1+num2;
// }

// const addTwo=(num1, num2) => (num1 + num2)

const addTwo=(num1, num2) => ({username:"sunil"})
console.log(addTwo(2,4));