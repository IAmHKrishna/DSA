// Check in constructor:
// Check if an instance already exists: The constructor checks if an instance of the class (Database) already exists. If it does, it returns the same instance instead of creating a new one.
// Return the same instance: The Database.instance static property ensures only one instance of the Database class is created, even if multiple new Database() calls are made.
// Reuse of instance: The same instance (db1 and db2) is reused, so they share the same connection and behave as a Singleton.
class Database {
    // Step 1: Static property to hold the instance
    static instance = null;
  
    constructor() {
      // Step 2: Check if an instance already exists
      if (Database.instance) {
        return Database.instance;
      }
  
      // Step 3: If no instance exists, initialize the object
      this.connection = this.connectToDatabase();
      
      Database.instance = this;  // Save the current instance
    }
  
    // Simulate a connection method
    connectToDatabase() {
      console.log('Connected to the database.');
      return 'Database connection established!';
    }
  
    // Method to retrieve connection
    getConnection() {
      return this.connection;
    }
  }
  
  // Step 4: When new instances are created, it returns the same instance
  const db1 = new Database();
  const db2 = new Database();
  
  console.log(db1 === db2);  // true
  
  console.log(db1.getConnection());  // Outputs: 'Database connection established!'
  console.log(db2.getConnection());  // Outputs the same connection as db1
  console.log(Database.instance,"instance value");  // Outputs the same instance as db1
  console.log(Database.instance.getConnection());  // Outputs: 'Database connection established!'
  console.log(db2.getConnection());  // Outputs the same connection as db1