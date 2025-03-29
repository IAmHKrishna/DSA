// Closures and currying can be used for middleware authorization in Express.js.
const authorize = (role) => (req, res, next) => {
    if (req.user.role === role) {
      next();
    } else {
      res.status(403).send("Forbidden");
    }
  };
  
  // Usage in Express.js
  app.get("/admin", authorize("admin"), (req, res) => {
    res.send("Welcome Admin");
  });
  

//   ✅ Explanation:

// authorize("admin") → Returns a closure that captures the role.

// The inner function has access to the req, res, and next parameters.

// This creates a reusable middleware with authorization control.