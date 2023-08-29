// object_constructor

//Normal method

// var student1= {
//     firstName="moonbhai",
//     lastName="kumar",
//     age :25,
//     class:5
// }
// var student2= {
//     firstName="moonbhai",
//     lastName="kumar",
//     age :26,
//     class:8
// }

//object_constructor

function Student(first,last,age,cls){
this.firstName=first;
this.lastName=last;
this.age=age;       // this  formate  of object consturct 
this.class=cls;
this.natioalaty="indian"; // isme add karne ke liye manual hi add karna hoga



}

var student1=new Student("moon","bhai",25,3);
var student2=new Student("moon","bhai",20,1);
var student3=new Student("moon","bhai",19,8);

student1.natioalaty="indian"; // this is add only student1
 
Student.prototype.natioalaty="indian"; // bhar add karne ke liye prototype ka use kiya jata hai 





console.log(student3);