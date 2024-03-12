// arrow functions & this keyword 

// this is object 
const user={
    username: "hitesh",
    price:999,
    // at the time of login 
    // a method is called 


    // this is used for current context 
    // ish scope ke under jo bhi uske liye 
    welcomeMessage : function(){
        console.log(`${this.username} welcome to website`);
    }
}


