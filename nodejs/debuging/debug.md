Debugging in Node.js can be done in several powerful ways depending on your use case — from simple logging to using debuggers like Chrome DevTools, VS Code, or built-in `inspector`. Here’s a breakdown of **Node.js debugging techniques with examples**:

---

## 🔹 1. **Console Logging (Basic but Effective)**

### ✅ Example:

```js
function add(a, b) {
  console.log("a:", a, "b:", b); // Simple logging
  return a + b;
}

console.log("Result:", add(5, 3));
```

### 🔍 Use:

Quick checks, prototypes, or debugging small logic.

---

## 🔹 2. **Using `debug` Module (Environment-based Logging)**

### ✅ Install:

```bash
npm install debug
```

### 📄 Code:

```js
const debug = require('debug')('app:main');

function multiply(a, b) {
  debug(`Multiplying ${a} * ${b}`);
  return a * b;
}

console.log("Result:", multiply(4, 5));
```

### 🧪 Run with debug enabled:

```bash
DEBUG=app:* node app.js
```

### ✅ Use:

Toggles logs on/off per namespace. Great for production-quality logs.

---

## 🔹 3. **Using the Node Inspector (`--inspect`)**

### ✅ Start your script:

```bash
node --inspect index.js
```

### ✅ Open Chrome:

Go to `chrome://inspect` → Click "Inspect" under your process

> Set breakpoints and step through code using Chrome DevTools.

---

## 🔹 4. **VS Code Built-in Debugger**

### 📄 `launch.json` example:

```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug My App",
  "program": "${workspaceFolder}/index.js"
}
```

### ✅ Steps:

1. Open VS Code
2. Add a breakpoint (click left of line number)
3. Press F5 to start debugging

### 🔍 Use:

Full debugging support — breakpoints, watch, call stack, step in/out.

---

## 🔹 5. **Using `node inspect` (Terminal-Based Debugger)**

### ✅ Example:

```bash
node inspect index.js
```

### 🔧 Commands:

* `c` – continue execution
* `n` – next line
* `s` – step into
* `o` – step out
* `repl` – interactive mode

---

## 🔹 6. **Using `perf_hooks` for Performance Debugging**

### ✅ Example:

```js
const { performance } = require('perf_hooks');

const start = performance.now();

for (let i = 0; i < 1e6; i++) {} // Simulate work

const end = performance.now();
console.log(`Execution time: ${end - start} ms`);
```

### 🧠 Use:

Check how long blocks of code take to run.

---

## 🔹 7. **Using `async_hooks` to trace async lifecycle**

Useful for deep debugging of async bugs.

```js
const async_hooks = require('async_hooks');
const fs = require('fs');

async_hooks.createHook({
  init(asyncId, type, triggerAsyncId) {
    fs.writeSync(1, `Init ${asyncId} type: ${type} trigger: ${triggerAsyncId}\n`);
  },
  before(asyncId) {
    fs.writeSync(1, `Before ${asyncId}\n`);
  },
  after(asyncId) {
    fs.writeSync(1, `After ${asyncId}\n`);
  },
  destroy(asyncId) {
    fs.writeSync(1, `Destroy ${asyncId}\n`);
  }
}).enable();

setTimeout(() => {
  console.log("Timer executed");
}, 100);
```

---

## 💡 Best Practice for Debugging

* Reproduce the bug consistently.
* Add checkpoints/logs to narrow down the issue.
* Use a debugger for complex flows (VS Code or `--inspect`).
* Use performance tools (`perf_hooks`, `clinic.js`) for perf issues.
* Use async\_hooks when dealing with asynchronous bugs.

---

Would you like a **real-world debugging scenario** (like debugging a crashing Express server or a memory leak)?
