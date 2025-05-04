// 💡 Explanation by Phase
// ✅ Synchronous
// Runs immediately when the script is loaded.


console.log("📝 Synchronous log");
// ✅ Microtasks
// Executed right after the current operation (before any phase).

process.nextTick(() => {});
Promise.resolve().then(() => {});
// ✅ Timers Phase
// Executes callbacks scheduled by setTimeout and setInterval.


setTimeout(() => {
  console.log("⏱️ Timers Phase");
}, 0);
// ✅ Pending Callbacks
// (Used internally by Node.js for things like TCP errors). Not demonstrated here, as it's low-level.

// ✅ Idle, Prepare
// Internal phase – no direct access in JS code.

// ✅ Poll Phase
// Waits for I/O (e.g. file read, network), then executes those callbacks.


fs.readFile(__filename, () => {
  console.log("📄 Poll Phase");
});
// ✅ Check Phase
// Executes setImmediate() callbacks.


setImmediate(() => {
  console.log("📦 Check Phase");
});
// ✅ Close Callbacks
// Runs close events like:


socket.on('close', () => {});
