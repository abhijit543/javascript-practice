class Mytest {
  constructor(x) {
    this.a = x;
    this.b = 200;
    console.log("this is constructor");
  }
  home = () => {
    console.log("welcome home");
    console.log(this.a + this.b);
  };
  about = () => {
    console.log("about us");
    console.log(this.a + this.b);
  };
}
const object1 = new Mytest(500);
object1.home();
object1.about();
console.log(object1.a);

//all user defined function of a class is member function or member method
//this - it is object of current class. we cannot access this keyword out of the class.
//member variable- all variables that get defined under constructor using this keyword
//can access inside the class or outside of class
//assets of a class - the member variable and member methods are assets of class.
//constructor - it is prdefined function of javascript class. it is also called life cycle function
//it get call automatically when object of a class get created.
