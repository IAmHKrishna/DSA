// index.js
if (window.Worker) {
    const worker = new Worker("worker.js"); // Load the worker file

    worker.postMessage(10); // Send data to the worker

    worker.onmessage = function (event) {
        console.log("Result from worker:", event.data); // Output: 20
    };

    worker.onerror = function (error) {
        console.error("Worker Error:", error);
    };
} else {
    console.log("Web Workers are not supported in this browser.");
}
