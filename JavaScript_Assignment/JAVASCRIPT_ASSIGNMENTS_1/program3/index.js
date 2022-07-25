 
function solution(num) {
    return num % 2 === 0 ? 'Even' : 'Odd'
}

 
 function run(){
    val = document.getElementById("val").value;
    document.getElementById("results").innerHTML=val+": "+solution(val)
    }