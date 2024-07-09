// Good Example: Separation of responsibilities

class UserAuth {
    constructor(user) {
      this.user = user;
    }
  
    verifyCredentials() {
      // verification logic
    }
  }
  
  class UserSettings {
    constructor(user) {
      this.user = user;
      this.auth = new UserAuth(user);
    }
  
    changeSettings(settings) {
      if (this.auth.verifyCredentials()) {
        // change settings
      }
    }
  }
  