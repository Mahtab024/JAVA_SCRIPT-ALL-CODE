// object 

// object ko 2 tarike se acsses kar sakte hai 

// first methed to call object (dout(.) notation se )

// let person={
//     firstname:"mahtab",
//     lastname:"alam"
// };


// console.log(person.firstname);

 // this is dout method 


// second method to call in object (array notation  )
// let person={
//     firstname:"mahtab",
//     lastname:"alam"
// };


// console.log(person['lastname']);

// codtion of object

// 1. agar apko firstneme ke bich me space dena hai to use bhi quat ke andar band karna hoga 

//Example
// let person={
//    'first name':"mahtab",

//     'last name':"alam"
// };
//  console.log(person['first name']);

// 2. agar aapko space dena hai to app doute notaion method se accsess nahi karsakte ho

// 3. agar aapko kisi bhi element ko modify karna hai to 
      
//Example

//       let person={
//     firstname:"mahtab",
//     lastname:"alam"
// };
// person.age=25; // add element

// person.firstname="moon"; // modify element
// delete person.lastname; // delete element


// console.log(person.firstname);
// console.log('age' in preson); // check undifind element
// console.log(person.age); // check 2nd method undifiend element


// object show in console 
// Example

 let person={
    firstname:"mahtab",
    lastname:"alam"
};
person.age=25;

for (let key in person){
    console.log(key+ ";" +person[key]);
}