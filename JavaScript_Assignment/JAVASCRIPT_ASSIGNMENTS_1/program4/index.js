function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}
 
 
 function run(){
    howManyTimes = document.getElementById("val").value;

    var countHeads=0; 
    for (var i=0; i<howManyTimes;i++){
        if (coinFlip()==="heads"){
          countHeads++;
        }
    }
    res = (countHeads/howManyTimes)

    document.getElementById("results").innerHTML= "ans  : "+res
    }