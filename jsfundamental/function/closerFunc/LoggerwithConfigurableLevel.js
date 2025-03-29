const logger = (level) => (prefix) => (message) => {
    console.log(`[${level}] ${prefix}: ${message}`);
  };
  
  const info = logger("INFO")("App");
  const error = logger("ERROR")("Server");
  
  info("User logged in");   // [INFO] App: User logged in
  error("Failed to connect"); // [ERROR] Server: Failed to connect
  