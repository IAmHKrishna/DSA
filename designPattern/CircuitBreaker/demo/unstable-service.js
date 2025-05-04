// unstable-service.js
const express = require('express');
const app = express();
const PORT = 3001;

app.get('/unstable-service', (req, res) => {
    const shouldFail = Math.random() < 0.5;
    if (shouldFail) {
        console.log('Simulated failure');
        return res.status(500).send('Simulated Failure');
    }
    res.send('Service is working fine!');
});

app.listen(PORT, () => console.log(`Unstable service on port ${PORT}`));
