## Redis | Cashing

Redis caching ka use data ko temporarily store karne ke liye hota hai, taaki frequently accessed data ko fast retrieve kiya ja sake. Jab hum kisi web application mein Redis use karte hain, toh hum kuch specific data ko Redis cache mein store karte hain. Yeh data phir directly Redis se fetch hota hai, bina database ko baar-baar query kiye.

### Redis Caching Kaise Kaam Karta Hai?

1. Cache Miss: Jab user koi request karta hai aur data Redis cache mein available nahi hota, toh isse cache miss kehte hain. Is case mein, application database ko query karta hai.
2. Cache Store: Jab data database se milta hai, toh application is data ko Redis cache mein store kar deti hai, taaki agle request par database ko query karne ki zaroorat na pade.
3. Cache Hit: Jab user phir se wahi data request karta hai, toh Redis cache se data directly mil jata hai. Is process ko cache hit kehte hain, aur yeh bahut fast hota hai.
4. Expiration Policy: Redis caching mein data ko store karne ke liye expiration time set kiya ja sakta hai. Iska matlab yeh hota hai ki specific time ke baad data cache se automatically delete ho jata hai, taaki stale data na rahe.

### Redis Caching ke Fayde:

1. High Performance: Redis in-memory data store hai, isliye yeh bahut fast hota hai.
2. Reduced Latency: Frequent database access ki zaroorat kam ho jaati hai, jis se response time improve hota hai.
3. Scalability: Redis multiple instances ke saath scale kiya ja sakta hai.

### Redis Ka Kab Krna Chahiye ?

1. Heavy computation.
2. Data frequently change nhi ho rhi ho.

### How to use Redis ?

1. Go to 'redis.io' website.
2. click on 'start for free'.
3. login or signup.
4. select your nearest location. generally -> 'Asia Pacific (mumbai)'
5. install in your application -> 'npm i ioredis'
6. ```
   const redisClient = new Redis({
     host: "redis-13137.c264.ap-south-1-1.ec2.redns.redis-cloud.com",
     port: 13137,
     password: "SSQplGbqyzMbw6DgsdyymSPZAVqrTqsH",
   });
   ```

   - public endpoint from your redis account => 'redis-13137.c264.ap-south-1-1.ec2.redns.redis-cloud.com:13137'
   - for host and port use public endpoint.
   - default user password from your redis account => SSQplGbqyzMbw6DgsdyymSPZAVqrTqsH

7. ```
   redisClient.on("connect", () => {
     console.log("Redis Connected");
   });
   ```

   - yadi console pr Redis Connected aa jata hai to sab sahi chal rha hai.

8. ```
   app.get("/api/data", async (req, res) => {
     console.time("api");
     console.time("api-for-redis");

    const cachedData = await redisClient.get("data");

    console.timeEnd("api-for-redis");
    if (cachedData) {
    return res.send(`Data: ${cachedData}`);
    }

    let data = getData();
    await redisClient.set("data", data);
    res.send(`Data: ${data}`);
    console.timeEnd("api");
    });
   ```

- agar redis me data set nhi huaa hai to cachedData me kuchh nhi milega mtlb waha get nhi kr skte hai.
- phle database se data aayega phir redis me save hoga uske baad redis se data lekr show kiya jayega.
- ab kyuki redis me data save ho chuka hai isliye seedha cachedData se data aa jayega.

9. redis pr data ko expire krne ke liye timer bhi laga skte hai.

   ```
   await redisClient.set("data", data, (EX = 20));
   ```

10. redis account pr jakr connect krke redis insights app pr iss cashe ko dekh skte hai aur delete bhi kr skte hai.
