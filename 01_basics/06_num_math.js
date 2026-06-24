const score = 200;
console.log(score);
const balance = new Number(100);
console.log(balance);
console.log(balance.toString);

const anotherNumber = 23.22221
console.log(anotherNumber.toPrecision(3));

const hundreds = 1000000000000;
console.log(hundreds.toLocaleString('en-IN'))

/* **************************************Maths*********************** */
console.log(Math); // go to console in your browser and search it.
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.6)); // ceil - top floor-lowest

console.log(Math.random());
console.log((Math.random()*10)+1)

const  min = 20;
const max = 25;
//Math Random always give you value between 0 and 1
console.log(Math.floor(Math.random()*(max-min+1))+min)