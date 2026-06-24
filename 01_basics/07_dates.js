let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toJSON())

let myCreateDate = new Date(2023,0,24,6,6)
console.log(myCreateDate.toLocaleDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

newDate.toLocaleDateString('default',{
    weekday: "long",
    timeZone : ''
    

})
