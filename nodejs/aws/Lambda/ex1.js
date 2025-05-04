// Example 1: Basic Hello World Lambda Function (Node.js)
// index.js
exports.handler = async (event) => {
    console.log("Received event:", event);
    const response = {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello from Lambda!" }),
    };
    return response;
};

