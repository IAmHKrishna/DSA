// https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e#.m5h2jj8a7

// class
class ClassCar {
    drive () {
      console.log('Vroom!');
    }
  }
  
  const car1 = new ClassCar();
  car1.drive();
  
  
  // constructor
  function ConstructorCar () {}
  
  ConstructorCar.prototype.drive = function () {
    console.log('Vroom!');
  };
  
  const car2 = new ConstructorCar();
  car2.drive();
  
  
  // factory
  const proto = {
    drive () {
      console.log('Vroom!');
    }
  };
  
  const factoryCar = () => Object.create(proto);
  
  const car3 = factoryCar();
  car3.drive();