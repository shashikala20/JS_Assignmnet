class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    // To define a getter named `getterName`, put `get getterName() {}`
    // in the class definition. Getters are functions!
    get area() {
      return this.height * this.width;
    }
  }
  
  const obj = new Rectangle(3, 5);
  document.write("Area Of The Rectangle Using Getters and Setters :"+obj.area); // 15

  const obj2 = new Rectangle(13, 8);
  document.write("<br>Area Of The Rectangle Using Getters and Setters :"+obj2.area);