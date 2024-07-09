// Bad Example: High-level module depends on low-level module

class MySQLDatabase {
    connect() {
      // MySQL connection logic
    }
  }
  
  class UserService {
    constructor() {
      this.database = new MySQLDatabase();
    }
  
    getUser(id) {
      this.database.connect();
      // fetch user logic
    }
  }
  