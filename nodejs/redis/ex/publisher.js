const { createClient } = require('redis');

const publisher = createClient();

(async () => {
  await publisher.connect();

  setInterval(async () => {
    const message = `Message at ${new Date().toISOString()} ${Math.random()}`;
    await publisher.publish('my-channel', message);
    console.log('Published:', message);
  }, 3000);
})();
