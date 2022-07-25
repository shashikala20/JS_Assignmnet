
function rectangle(str)
{
    let arr =[]
    arr = str.split(",")
    for(let  index = 0; index < 1; index++)
    {
        document.write("*********<br>")
        for(let j = 0; j < arr.length; j++)
        {
            arr == arr[j].split(",")
            document.write("*" + arr[j] + "*<br>")             
        }
        document.write("*********")
      
        return arr
    } 
}
function run(){
    var x = "Hello,World,in,a,frame";
    return rectangle(x);
}

// document.write(rectangle(x))