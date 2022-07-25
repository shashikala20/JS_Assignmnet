var str = '({"firstName":"Saurabh","lastName":"Raut"})';
var obj = eval(str);
document.write("String Is Converted Into Object Using Eval() : ")
document.write(obj.firstName + " "); 
document.write(obj.middelName+" ");
document.write(obj.lastName);
document.write("<br>");

obj.middelName = "M"
document.write(obj.firstName + " "); 
document.write(obj.middelName+" ");
document.write(obj.lastName);

