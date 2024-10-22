// Object.create


const elfFunctions = {
    attack: function() {
      return 'atack with ' + this.weapon
    }
  }
  function createElf(name, weapon) {
    //Object.create creates __proto__ link
    newElf = Object.create(elfFunctions)  // creating true prototypal inheritance
    // console.log(newElf.__proto__)
    newElf.name = name;
    newElf.weapon = weapon
    return newElf
  }
  
  
  const sam = createElf('Sam', 'bow');
  const peter = createElf('Peter', 'bow');
  console.log(sam.attack())
  peter.attack()