for(i=1; i<=10; i++){
    document.write(`2 x ${i}=${2*i}`);
    document.write("<br>");

} 


function multable(num){
    for(i=1; i<=10; i++){
        document.write(`${num} x ${i}=${num*i}`);

        document.write("<br>");
        

    } 
}


document.write("This is the Table <br>");

multable(5);

//Example

// function add (num1,num2){
//     document.write(num1 + num2);
// }
// add(5,6);
