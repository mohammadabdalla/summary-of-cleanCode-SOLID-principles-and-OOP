// Bad Example: A single class handling multiple responsibilities

class UserSettings {
    constructor(user) {
      this.user = user;
    }
  
    changeSettings(settings) {
      if (this.verifyCredentials()) {
        // change settings
      }
    }
  
    verifyCredentials() {
      // verification logic
    }
  }
  