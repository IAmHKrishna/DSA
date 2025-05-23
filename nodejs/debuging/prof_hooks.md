The `perf_hooks` module in Node.js is used to **measure performance and execution time** of parts of your code, similar to tools like Chrome DevTools’ Performance tab or `console.time()`—but more powerful and precise.

---

## ✅ Use Cases

* Measuring how long an API request takes
* Profiling heavy function execution
* Benchmarking parts of your application
* Monitoring performance regressions

---

## 🔧 How to Use `perf_hooks`

### Step 1: Import it

```js
const { performance, PerformanceObserver } = require('perf_hooks');
```

---

## 🔹 Example 1: Basic Timing

```js
const { performance } = require('perf_hooks');

const start = performance.now();

for (let i = 0; i < 1e6; i++) {
  // some heavy task
}

const end = performance.now();
console.log(`Execution time: ${end - start}ms`);
```

🟩 Output:

```
Execution time: 5.123456789 ms
```

---

## 🔹 Example 2: Using `PerformanceObserver`

You can observe multiple measurements and log or analyze them:

```js
const { performance, PerformanceObserver } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries());
});
obs.observe({ entryTypes: ['measure'] });

performance.mark('start-loop');

for (let i = 0; i < 1e6; i++) {}

performance.mark('end-loop');
performance.measure('Loop Time', 'start-loop', 'end-loop');
```

🟩 Output:

```
[
  PerformanceEntry {
    name: 'Loop Time',
    entryType: 'measure',
    startTime: 12.345,
    duration: 5.6789
  }
]
```

---

## 🔹 Example 3: Measuring Async Function (e.g., DB or API call)

```js
async function fetchData() {
  const { performance } = require('perf_hooks');
  performance.mark('start-fetch');

  await new Promise(res => setTimeout(res, 500)); // simulate API call

  performance.mark('end-fetch');
  performance.measure('Fetch Duration', 'start-fetch', 'end-fetch');

  const [entry] = performance.getEntriesByName('Fetch Duration');
  console.log(`API call took: ${entry.duration}ms`);
}

fetchData();
```

---

## 🔍 Summary

| Method                                          | Description                                               |
| ----------------------------------------------- | --------------------------------------------------------- |
| `performance.now()`                             | High-resolution timer (milliseconds with micro precision) |
| `performance.mark(name)`                        | Marks a timestamp                                         |
| `performance.measure(name, startMark, endMark)` | Measures time between two marks                           |
| `PerformanceObserver`                           | Watches for performance entries (marks, measures, etc.)   |

---

If you're profiling a Node.js backend (e.g., route handlers, DB operations), using `perf_hooks` gives **much finer control and precision** than `console.time`.

Would you like a real example in Express.js or a benchmarking tool using `perf_hooks`?
