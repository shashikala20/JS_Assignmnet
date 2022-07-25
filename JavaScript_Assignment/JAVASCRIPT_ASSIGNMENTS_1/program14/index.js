var el_up = document.getElementById("GFG_UP");
var el_down = document.getElementById("GFG_DOWN");
el_up.innerHTML = 
  "Click on the button to generate the array.";
let array = []
function gfg_Run() {

  array = Array.from({
    // el_down.innerHTML = Array.from({
        length: 100
    }, () => Math.floor(Math.random() * 100));
    document.getElementById("GFG_DOWN").innerHTML =array;
    run()
  } 
function run(){ 
    
 max = Math.max(...array) 
 document.getElementById("Max").innerHTML = "<br>max is : "+max; 
 min = Math.min(...array) 
 document.getElementById("Min").innerHTML ="<br>min is : "+min;

 sumOfEven = 0
 sumOfOdd = 0
  for(i=0;i<array.length;i++){
    if(array[i]%2 ===0){
      sumOfEven += array[i]
    }
    else{
      sumOfOdd += array[i]
    }
  } 
 document.getElementById("sumOfEven").innerHTML ="<br>sumOfEven is : "+sumOfEven;
 document.getElementById("sumOfOdd").innerHTML ="<br>sumOfOdd is : "+sumOfOdd;
 
}