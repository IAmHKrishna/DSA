// 🚫 Bad Example: Violating DIP
// In this example, the High-level module (Service) directly 
// depends on the Low-level module (MySQL Database).
// If you want to switch from MySQL to MongoDB,
//  you will need to modify the service layer → Tightly coupled.

// Low-level module
class MySQLDatabase {
    connect() {
        console.log("Connected to MySQL Database");
    }

    getData() {
        console.log("Fetching data from MySQL...");
    }
}

// High-level module
class DataService {
    constructor() {
        this.db = new MySQLDatabase();  // ❌ Tightly coupled to MySQL
    }

    fetchData() {
        this.db.connect();
        this.db.getData();
    }
}

// Usage
const service = new DataService();
service.fetchData();
// 📌 Problems:
// ❌ DataService is hardcoded to use MySQL → Difficult to switch databases.
// ❌ Direct dependency on the low-level module → Violates DIP.
// ❌ Modifying the database requires changes in the service layer.

// =========================================

// ✅ Good Example: Applying DIP
// To follow DIP, we introduce an abstraction (interface).

// The Service depends on the interface, not on the concrete implementation.
// This makes the system loosely coupled and flexible.


// Abstract Database Interface
class Database {
    connect() {}
    getData() {}
}

// Low-level modules (implementing the abstraction)
class MySQLDatabase extends Database {
    connect() {
        console.log("Connected to MySQL Database");
    }

    getData() {
        console.log("Fetching data from MySQL...");
    }
}

class MongoDBDatabase extends Database {
    connect() {
        console.log("Connected to MongoDB Database");
    }

    getData() {
        console.log("Fetching data from MongoDB...");
    }
}

// High-level module depending on abstraction
class DataService {
    constructor(database) {
        this.database = database;  // ✅ Injecting abstraction (loose coupling)
    }

    fetchData() {
        this.database.connect();
        this.database.getData();
    }
}

// Usage
const mysqlService = new DataService(new MySQLDatabase());
mysqlService.fetchData();  // ✅ Works with MySQL

const mongoService = new DataService(new MongoDBDatabase());
mongoService.fetchData();  // ✅ Works with MongoDB


// 5️⃣ Key Benefits of DIP
// Loose Coupling:

// The DataService is not tied to a specific database.
// You can easily swap MySQL with MongoDB or any other database without changing the service code.
// Modular & Extensible:

// Adding a new database (e.g., PostgreSQL) only requires creating a new class implementing the Database interface.
// Easier Testing:

// You can easily mock or replace the database during unit tests.