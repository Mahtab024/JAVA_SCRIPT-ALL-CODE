function add(){
    if(arguments.length==0){

        console.log("No argument passed !");

    }else{
        let sum=0;
        for( let i=0; i<arguments.length; i++){
            sum=sum+arguments[i];

        }
        console.log(sum);

    }

}
let addition=add;
addition(5,5);
add(5,3,6);

