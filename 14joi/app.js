const express = require("express");
const app = express();

const { userValidate, userModel } = require("./models/user-model");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("done!");
});

app.post("/create", async (req, res) => {
  let { name, username, age, email } = req.body;
  let error = userValidate({ name, username, age, email });

  if (error) return res.status(500).send(error.message);

  let user = await userModel.create({
    name,
    username,
    age,
    email,
  });
  res.send(user);
});

app.listen(3000, () => {
  console.log("connected with server");
});
