// Good Example: High-level module depends on abstractions

class Database {
    connect() {
      throw new Error("This method should be overridden");
    }
  }
  
  class MySQLDatabase extends Database {
    connect() {
      // MySQL connection logic
    }
  }
  
  class UserService {
    constructor(database) {
      this.database = database;
    }
  
    getUser(id) {
      this.database.connect();
      // fetch user logic
    }
  }
  
  const mySQLDatabase = new MySQLDatabase();
  const userService = new UserService(mySQLDatabase);
  