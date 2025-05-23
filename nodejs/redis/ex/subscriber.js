const { createClient } = require('redis');

const subscriber = createClient();

(async () => {
  await subscriber.connect();

  await subscriber.subscribe('my-channel', (message) => {
    console.log('Received:', message);
  });
})();
