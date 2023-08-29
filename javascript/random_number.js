 // Random Number genrated 0 to 10

 
//  let x= Math.floor(Math.random()*10); // agar apko jitna bhi number chahiye uske 1 jada se multiplai karba do
// console.log(x);


// Agar hame 15 se 25 tak random number lena hai too 


// let x=Math.floor(Math.random()*(25 - 15))+15;
// console.log(x);

// Function se dalkar call

function getRandomvalue(min, max){
let x=Math.floor(Math.random()*(max - min))+min;
return x;

}
console.log(getRandomvalue(10,20));

