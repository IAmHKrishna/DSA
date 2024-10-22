class User {
    constructor(name) {
      this.name = name;
    }
  
    static createAnonymous() {
      return new User("Anonymous");
    }
  }
  
  // Creating an instance using a factory method
  const anonymousUser = User.createAnonymous();
  console.log(anonymousUser.name); // Output: Anonymous
  