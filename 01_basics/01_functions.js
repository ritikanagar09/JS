// ek series of code ko ek package me bnd kar diya h 




function sayMyName(){
    console.log("HII")
    console.log("paagla")
    console.log("mai pagala ")
}

sayMyName // only refrence 

// sayMyName() // execution and refrence both 


// function addTwoNum(num1, num2 ){ // parameters 
//     console.log(num1+num2)
// }

// const res=addTwoNum(3,4) // arguments 
// console.log(res)


function addTwoNum(num1, num2 ){ // parameters 
    let res=num1+num2
    return res
}

const res=addTwoNum(3,4) // arguments 
console.log(res)


// wow bhai wowwww
function loginUserName (username){
    return `${username} just logged in`
}


const ans=loginUserName("ritika")
console.log(ans)






