const str = '{"firstName":"Saurabh", "lastName":"Raut"}';
const obj = JSON.parse(str);
 
// console.log(obj.firstName);
// console.log(obj.lastName);


document.write("String Is Converted Into Object Using EJSON.parse() : ")
document.write(obj.firstName + " "); 
document.write(obj.middelName+" ");
document.write(obj.lastName);
document.write("<br>");

obj.middelName = "M"
document.write(obj.firstName + " "); 
document.write(obj.middelName+" ");
document.write(obj.lastName);

