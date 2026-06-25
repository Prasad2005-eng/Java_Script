// const myarr = [1,2,3,4,true,"Prasad"]
// console.log(myarr[1]);

// // Array Methods
// myarr.push(6);
// myarr.pop() //last value has been removed

// myarr.unshift(9) // insert at start
// myarr.shift() //starting element get delete
// console.log(myarr)
// console.log(myarr.includes(9))


/* Imp Slice and splice */

const myarr2 = [0,1,2,3,4,5,6]
console.log(myarr2)
const mynew1 = myarr2.slice(1,3)
console.log("A",mynew1);

const mynew2 = myarr2.splice(1,3);
// console.log(myarr2) // after perfoming splice first then the portion of splice remove completly from arr
console.log("B",mynew2)
