// hoisting 

// hosting ka matlab hota hai kisi element ko sabse uper part me leker jane hosting kahlata hai 

// Example 
 
hello();

function hello(){
    console.log("Hello world");
}

// yaha par app dekh sakte hai ki function niche fir bhi exicute karega becouse hoisting ka kam hota hai ki
// koi bhi function ya variable ho jaha bhi likha jaye use upper laya jata hai ..
// ye kam hai hoisting ka 
// hosting current state me le kar chale jata hai 





// Example 2 variabal

// var x; //declartion
// x=undefined; //ye bala hoistiog khud kar leta hai

// x=7; //assigment 
// console.log(x);



 

//Example 3
console.log(x)
 var x;
 x=7;
 // isme var x; hi uper jata becouse only take decliare ko le kar jata hai 
 


// let and const me undifind nahi karta but usse upper to le kar jata 
// par var me hota hai upper bhi le kar jata hai aur variable undified bhi karega 


