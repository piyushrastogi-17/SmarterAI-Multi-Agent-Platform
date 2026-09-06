import redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL)

export default redis 