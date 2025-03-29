const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello, World!');
})
// Webhook handler
app.post('/webhook-handler', (req, res) => {
  console.log('✅ Received Webhook:',  req.body);

  const event = req.body.
  event;

  if (event === 'request.created') {
    console.log('🎯 New Request Created:', req.body.data);
  } else if (event === 'request.updated') {
    console.log('🔄 Request Updated:', req.body.data);
  }

  res.status(200).send('Webhook received');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
