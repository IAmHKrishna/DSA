// BAD: High-level module depends on low-level module
class MySQLDatabase {
    connect() {
      console.log("Connecting to MySQL database");
    }
  }
  
  class UserService {
    constructor() {
      this.db = new MySQLDatabase(); // Tight coupling
    }
  
    getUser() {
      this.db.connect();
      console.log("Fetching user");
    }
  }
  
  // GOOD: Use abstractions to decouple
  class Database {
    connect() {
      throw new Error("Method not implemented");
    }
  }
  
  class MySQLDatabase extends Database {
    connect() {
      console.log("Connecting to MySQL database");
    }
  }
  
  class UserService {
    constructor(database) {
      this.db = database; // Dependency injection
    }
  
    getUser() {
      this.db.connect();
      console.log("Fetching user");
    }
  }
  
  // Usage
  const mySQLDatabase = new MySQLDatabase();
  const userService = new UserService(mySQLDatabase);
  userService.getUser();
  