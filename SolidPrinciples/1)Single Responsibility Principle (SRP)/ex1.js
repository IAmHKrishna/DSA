// BAD: Single function doing multiple things
class UserService {
    createUser(user) {
      // Save user to the database
      console.log("Saving user:", user);
  
      // Send a welcome email
      console.log("Sending welcome email to:", user.email);
    }
  }
  
  // GOOD: Separate responsibilities into different functions/modules
  class UserService {
    createUser(user) {
      console.log("Saving user:", user);
      // Logic for saving user
    }
  }
  
  class EmailService {
    sendWelcomeEmail(email) {
      console.log("Sending welcome email to:", email);
      // Logic for sending an email
    }
  }
  
  // Usage
  const userService = new UserService();
  const emailService = new EmailService();
  
  userService.createUser({ name: "John", email: "john@example.com" });
  emailService.sendWelcomeEmail("john@example.com");
  