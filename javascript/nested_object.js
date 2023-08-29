// nested object 

let user ={
    id:101,
    email:"abc@gmail.com",
    prasnolinfo:{
        Name:"abc",
        address:{
            street:"dfdjhf",
            city:"delhi",
            country:"india",
            prasnolinfo2:{
                fathername:"akjdh",
                mothername:"djfod",
            }
        }
    }
}
// console.log(user);
console.log(user.prasnolinfo);