const person = {
    firstName : "Saurabh",
    lastName : "Raut",
    greeting : function(){
        alert('Hi! I\m ' + this.firstName + this.middleName + this.lastName + '.');
    }
};

document.write(person.firstName + " "+person.middleName + "  "+person.lastName); 
person.middleName = "M"; 
document.write("<br>"+person.firstName + " "+person.middleName + "  "+person.lastName);  