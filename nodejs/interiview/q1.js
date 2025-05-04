// 2. Rate Limiter in node js
// Q: Create an in-memory rate limiter that allows max 5 
// requests per minute per IP address.

// A: A rate limiter is a mechanism that restricts the number of requests a 
// user can make to a server
// within a specified time frame. This is useful for preventing abuse and 
// ensuring fair usage of resources.

//  Here is an example of an in-memory rate limiter that allows a maximum of 5 requests
// per minute per IP address:

const express = require('express');
const app = express();


const rateLimit = {};

const rateLimiter  = (req, res, next) =>{
    const ip = req.ip;
    const currentTime = Date.now();
    const timeWindow = 60 * 1000; // 1 minute
    const requestLimit = 5;

    if (!rateLimit[ip]) {
        rateLimit[ip] = {
            count: 1,
            firstRequestTime: currentTime
        };
    } else {
        rateLimit[ip].count++;
    }

    if (currentTime - rateLimit[ip].firstRequestTime > timeWindow) {
        rateLimit[ip].count = 1;
        rateLimit[ip].firstRequestTime = currentTime;
    }

    if (rateLimit[ip].count > requestLimit) {
        return res.status(429).send('Too many requests. Please try again later.');
    }
     console.log(`IP: ${ip}, Count: ${rateLimit[ip].count}`,rateLimit);
    next();
}

app.use(rateLimiter);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/api', (req, res) => {
    res.send('API endpoint');
});

app.listen(3008, () => {
console.log('Server is running on port 3008');
}
);