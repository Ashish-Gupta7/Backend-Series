const express = require("express");
const app = express();

require("./config/mongoDB");
const userModel = require("./models/users");

const dummyUsers = require("./dummy");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/insert-many", async (req, res) => {
  let users = await userModel.insertMany(dummyUsers);
  res.send(users);
});

app.get("/get-users", async (req, res) => {
  let users = await userModel.find();
  res.send(users);
});

app.get("/ltandlte", async (req, res) => {
  let lt = await userModel.find({
    age: { $lt: 29 }, // less than
    // opposite operator => gt (greater than)
  });
  console.log(lt);

  let lte = await userModel.find({
    age: { $lte: 26 }, // less than or equal to
    // opposite operator => gt (greater than or equal to)
  });
  console.log(lte);
  res.send(lte);
});

app.get("/inamdnin", async (req, res) => {
  const inOperator = await userModel.find({
    age: { $in: [24, 26, 28] }, // in -> includes
  });
  console.log(inOperator);

  const ninOperator = await userModel.find({
    age: { $nin: [24, 26, 28] }, // nin -> not includes
  });
  console.log(ninOperator);
  res.send(ninOperator);
});

// exists use krne se phle mai db se kisi bhi do user ki age ko delete kr rha hu, taki mai exists ki madad se example ke roop me properties kis user me hai aur kisme nhi hai ye show kr saku.
app.get("/exists", async (req, res) => {
  const exists = await userModel.find({
    age: {
      $exists: false,
    },
  });
  res.send(exists);
});

// or operator ek array leta hai usme kaisare objects dekr usse user ko filter kara skte hai.
app.get("/or", async (req, res) => {
  let orOperator = await userModel.find({
    $or: [
      {
        age: { $lt: 25 }, // 25 se kam walo ko show kr do
      },
      {
        age: { $gt: 30 }, // 30 se jada walo ko show krdo
      },
      {
        username: "anjali_dubey", // jiska naam "anjali_dubey" hai use =y show krdo
      },
    ],
  });

  // overall, 25 se kam, 30 se jada aur jiska naam "anjali_dubey" hai unn sabhi ko filter krke show krdo.
  res.send(orOperator);
});

// sample operator find ke sath kaam nhi krta hai, aggregate hamesha hi ek array leta hai aur array hi return krta hai.
// yaha size ye bta rha hai ki userModel me se koi bhi random user lakr dedo. size ko jitni value di jati hai utne hi random user return karega.
app.get("/sample", async (req, res) => {
  let sample = await userModel.aggregate([
    {
      $sample: {
        size: 2,
      },
    },
  ]);
  res.send(sample);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});
