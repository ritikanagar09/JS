// literal: se object bnta h toh sinleton nhi bnta hai 
// constructor: se onject singleton nhi bnta hai 

// objects literalas 

const mySym=Symbol("key1")
// object 
const JsUsers={
    name:"Hitesh", //name is considered as string 
    age: "22", 
    // mySym:"newkey1",
    // [mySym]:"newkey2",
    location: "jaipur",
    email: "hitesh@gmail.com",
    isLoggedIn:false,
} 
// Object.freeze(JsUsers)
// JsUsers.email="hitesh@chatgpt.com"

// myname=JsUsers.name
// console.log(myname)
// console.log(JsUsers["email"])
// console.log(typeof(JsUsers[mySym]))
// console.log(typeof(JsUsers.mySym))
// console.log(JsUsers);


// functions 
// treated as variable 
JsUsers.greeting=function(){
    console.log("object of JSusers")
}

JsUsers.greetingTwo = function(){
    console.log(`hello users ${this.name}`) // to store any variable 
}


// console.log(JsUsers.greeting)//undefined 
// console.log(JsUsers.greeting())// error --> getting is not a funciton
// --> bocz object was freesed 

console.log(JsUsers.greetingTwo())




