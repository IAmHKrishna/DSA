// worker.js
self.onmessage = function (event) {
    let result = event.data * 2; // Perform a simple calculation
    postMessage(result); // Send the result back to the main thread
};
