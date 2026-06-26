// singleton
//Object.create

//object literals

const mysym = Symbol("Key1")

const jsusers ={
    name : "Prasad",
    "full name" : "Prasad Ingle",
    age  : 21,
    location: "Pune",
    [mysym] : "Mykey", // [] required to print data type as a symbol not as a string
    email: "prasad@microsoft.com",
    isLoggedIn :true,
    lastactiveDays : ["Monday","Wednesday"]
}
console.log(jsusers.email);  // M-1
console.log(jsusers["email"]) //we can't access email without " "

console.log(jsusers["full name"]) // we cant' access Full name with M-1.

console.log(jsusers[mysym]) // didn't required " "


jsusers.email = "Prasad@google.com";
// Object.freeze(jsusers); // it will freeze all objext properties and then no change in it 
jsusers.email = "Prasad@cahtgpt.com"

console.log(jsusers); // no change in email after printing

// Function

jsusers.greeting = function(){
    console.log(`Hello Jsuser,${this.name}`)
}
console.log(jsusers.greeting())