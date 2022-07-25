
function sumOfMultiples(number) {
    let sum = 0;

    for(let i = 1; i <=number; i++){  
       if(i % 3 === 0 || i % 5 === 0){
        sum = sum + i; 
       }
    }   
    return sum;
 }

 
function run(){
    val = document.getElementById("val").value;
    document.getElementById("results").innerHTML="sum is  : "+sumOfMultiples(val)
    }