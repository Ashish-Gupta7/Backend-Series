const express = require("express");
const app = express();
const Redis = require("ioredis");

// public endpoint from your redis account => 'redis-13137.c264.ap-south-1-1.ec2.redns.redis-cloud.com:13137'
const redisClient = new Redis({
  host: "redis-13137.c264.ap-south-1-1.ec2.redns.redis-cloud.com",
  port: 13137,
  password: "SSQplGbqyzMbw6DgsdyymSPZAVqrTqsH",
});

redisClient.on("connect", () => {
  console.log("Redis Connected");
});

app.get("/", (req, res) => {
  res.send("helllo");
});

// heavy computation ke liye hamare paas koi data nhi hai iske liye hum aisa data bana rhe hai jo jada time le ske.
function getData() {
  console.time("getData");
  let sum = 0;
  for (let i = 1; i < 100000000 * 5; i++) {
    sum += i;
  }
  console.timeEnd("getData");
  return sum;
}

// jab tk ki humne redis ka use nhi kiya tha tb tk hume same data ko retrieve krne ke liye average 800+ ms ka time lgta hai.
app.get("/api/data", async (req, res) => {
  console.time("api");
  console.time("api-for-redis");

  const cachedData = await redisClient.get("data");

  console.timeEnd("api-for-redis");
  if (cachedData) {
    return res.send(`Data: ${cachedData}`);
  }

  let data = getData();
  await redisClient.set("data", data, (EX = 20));
  res.send(`Data: ${data}`);
  console.timeEnd("api");
});

app.listen(3000);
