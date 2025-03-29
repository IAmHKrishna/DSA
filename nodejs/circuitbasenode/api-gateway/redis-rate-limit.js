const redis = require('redis');
const client = redis.createClient({ host: 'redis', port: 6379 });

module.exports = async (req, res, next) => {
    const ip = req.ip;

    client.get(ip, (err, record) => {
        if (err) throw err;

        const currentRequestCount = record ? parseInt(record) : 0;

        if (currentRequestCount >= 10) {
            res.status(429).send('Too many requests');
        } else {
            client.set(ip, currentRequestCount + 1, 'EX', 60);
            next();
        }
    });
};
