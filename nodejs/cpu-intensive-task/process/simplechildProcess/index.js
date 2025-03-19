const { fork } = require("child_process");

const child = fork("child.js");

child.on("message", (message) => {
  console.log("Received from child:", message);
});

child.send("Hello from parent!");

child.on("close", () => {
  console.log("Child process closed.");
});

child.on("error", (error) => {
  console.error("Child process error:", error);
});

child.on("exit", (code, signal) => {
  console.log("Child process exited with code:", code, "and signal:", signal);
});

child.on("disconnect", () => {
  console.log("Child process disconnected.");
});
