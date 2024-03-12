// let score="33a"

// console.log(typeof score)

// // conversions 

// let valueInNumber=Number(score)
// console.log(valueInNumber) // NaN--> not a number 

// console.log(typeof valueInNumber)


// let score=null

// console.log(typeof score)

// // conversions 

// let valueInNumber=Number(score)
// console.log(valueInNumber) // NaN--> not a number 

// console.log(typeof valueInNumber)


/*
"33"==33
"33a"==NaN

true==1
false==0
*/

let isLoggedIn="he"

let booleanIsLoggedIn=Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

/*
1=true
0=false
""=false
"riti"=true


*/

// let value=3

// let negVal=-value
// console.log(negVal)


/*
Primitive : call by value 

types:string,int , bool, null, undefined, 
symbol--> to make any value unique , BigInt 


JS 
Non-Primitve= refrence

Array, objects, functions



*/

const id=Symbol('123')
const id1=Symbol('123')

console.log(id)
console.log(id1)


// this is how object are declared in JS 
let myObj={
    name: "hitesh",
    age:22,
}
console.log(myObj)


// basic functions 

// variable type function 

const myFunc=function(){
    console.log("hello world")
}





/*
stack (primtive)
heap(non-primitive)--> jisme objetcs ko delcre krte hai 

stack--> isme jo bhi aapne variable declre kiya h uska ek copy milta h 
heap--> ek me ek refrence milta h



*/


let myYoutubeName="yash nagar"


