
function printNum(N) {
  var total = 0;
    for(var i = 1; i <= N; i++){
      total += i;
    }
    return total;
}
 
function run(){
  val = document.getElementById("val").value;
  document.getElementById("results").innerHTML="sum of 1 to"+val+" no is  : "+printNum(val)
  }
