// there are two ways of declaring objects 

// 1st way
const myObj= new Object;
myObj.name="naman"
myObj.age="15"
//2nd way 
const myObj1={
    name:"ritika",
}

myObj1.age="22"

// console.log(myObj)
// console.log(myObj1);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        username:{
            firstname:"ritika",
            lastname:"nagar"
        }
    }
}

// console.log(regularUser.username.firstname);


//object k ander objects 
const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

const obj3={obj1, obj2}
// console.log(obj3)

const obj4=Object.assign(obj1,obj2);

//IN PRODUCTION GREAT CODE 
const obj5=Object.assign({},obj1,obj2); // {}--> target, ohtehr parameter is source 
// console.log(obj5);

// spreading operator 

const obj6={...obj1, ...obj2}
console.log(obj6);


// USER COMING FROM DATABASE 

//arays of objects 
const users = [
    {
        id:"1", 
        email: "hot@email.com"
    },
    {
        id:"1", 
        email: "hot@email.com"
    },
]

console.log(users[1].id);




