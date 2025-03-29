// Example provided with a makeRequest() function and 
// how different error handler objects can be used 
// interchangeably without causing errors in the program.
class HttpRequest {
    constructor(url) {
        this.url = url;
    }

    // Method to make the HTTP request
    async makeRequest(errorHandler) {
        try {
            const response = await fetch(this.url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Data received:", data);
        } catch (error) {
            errorHandler.handle(error);
        }
    }
}

// Error handler classes
class ConsoleErrorHandler {
    handle(error) {
        console.error("Console Error:", error);
    }
}

class ExternalErrorHandler {
    handle(error) {
        // Mock external service call
        console.log("Sending error to external service:", error.message);
        // sendErrorToExternalService(error); // Uncomment for real external call
    }
}

// Example usage
const url = "https://jsonplaceholder.typicode.com/posts/1";  // Sample API URL
const request = new HttpRequest(url);

const consoleHandler = new ConsoleErrorHandler();
const externalHandler = new ExternalErrorHandler();

// Making requests with different error handlers
request.makeRequest(consoleHandler);
request.makeRequest(externalHandler);
// =========================================
// Benefits of Using Classes
// Encapsulation: Groups related functionality into classes.
// Reusability: Error handlers can be reused across multiple requests.
// Extensibility: Easily add new error handlers or modify existing ones.
// Readability: Code is more organized and easier to read.