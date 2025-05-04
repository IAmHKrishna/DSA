const express = require('express');
const app = express();
const PORT = 5001;

app.get('/pay', (req, res) => {
    if (Math.random() > 0.7) {
        res.status(500).send('💥 Payment Failed');
    } else {
        res.send('✅ Payment Processed');
    }
});

app.listen(PORT, () => console.log(`Payment Service running on ${PORT}`));
