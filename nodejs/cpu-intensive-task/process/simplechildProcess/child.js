process.on("message", (message) => {
    console.log("Received from parent:", message);
    // throw new Error("Child error");
    process.send("Hello from child!");
  });


  process.on("error", (error) => {
    console.error("Child process erro1r:", error);
  });
  
  process.on("exit", (code, signal) => {
    console.log("Child process exited with code:", code, "and signal:", signal);
  });
  
  process.on("disconnect", () => {
    console.log("Child process disconnected.");
  });
  
  process.on("uncaughtException", (error) => {
    // process.send("Hello from child!");
    console.error("Child process uncaught exception:", error);
  });