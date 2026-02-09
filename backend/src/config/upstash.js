import  {Ratelimit} from '@upstash/ratelimit';
import {Redis} from '@upstash/redis';

import dotenv from 'dotenv';

dotenv.config();

//new Ratelimit with 5 requests per minute
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "20 s"), 
});

export default ratelimit;