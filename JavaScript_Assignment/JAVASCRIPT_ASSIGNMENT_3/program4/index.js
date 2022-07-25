const person = {
    firstName : "Saurabh",
    lastName : "Raut",
    greeting : function(){
        alert('Hi! I\m ' + this.firstName + ' ' + this.lastName + '.');
    }
};

document.write(person.firstName + " "); 
document.write(person.lastName + " ");
console.log(person.greeting());