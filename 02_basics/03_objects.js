// const iguser = new Object() // singleton object
const iguser = {} //non-sinleton object

iguser.id ="123a"
iguser.name = "yashu"
iguser.isLoogedIn = true;

// console.log(iguser)

const regularuser  ={
    email : "pass@gmail.com",
    fullName : {
        firstname : "prasad",
        lastName  : "Ingle" 
    }
}
console.log(regularuser.fullName.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2};   // same problem like array
// const obj3  = Object.assign({},obj1,obj2) M-1

const obj3 = {...obj1,...obj2} //M-2
console.log(obj3)

const users =[ 
    {
        ID:1,
    email : "h@gmail.com"
    },
    {
    id:2,
    email:"p@gmail.com"
 }
]
users[1].email
console.log(iguser); 

console.log(Object.keys(iguser))
