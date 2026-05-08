const Redis = require("ioredis");

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    username: "default",
    password: process.env.REDIS_PASSWORD
});

redis.on("connect", () => {
    console.log("Connected To Redis");
});

redis.on("error", (err) => {
    console.log("Redis Error:", err);
});

module.exports = redis;