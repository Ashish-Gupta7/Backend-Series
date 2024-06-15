# Data Association
MongoDB me data association ka matlab hai alag-alag collections ke beech relationship establish karna. Iske do main methods hain: embedding aur referencing. 

## Referencing
iska mtlb hai data ki id se data ko copy krna.

## Embedding
iska mtlb hai poora ka poora data hi copy kr lena.

### app.js
```
const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const user = require("./models/user");

app.get("/", (req, res) => {
    res.send("hello");
});

app.get("/create", async (req, res) => {
    let user = await userModel.create({
        username: "Ashish",
        age: 22,
        email: "ash@gmail.com"
    })
    res.send(user);
});

app.get("/post/create", async (req, res) => {
    let post = await postModel.create({
        postdata: "today's post",
        user: "664752f7bb2f16efa4a38167"
    });

    let user = await userModel.findOne({_id: "664752f7bb2f16efa4a38167"});
    user.posts.push(post._id);
    await user.save();  // jaba hum manually push krte hai to ise save krna padta hai.

    res.send({post, user});
})

app.listen(3000);
```

### ./models/user.js
```
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dataassociation");

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post"
        }
    ]
});

module.exports = mongoose.model("user", userSchema);

// yaha hum posts jo ki ek array hoga usme post ki id ko rakhege.

// type: mongoose.Schema.Types.ObjectId, iska mtlb ye hai ki mongoose ke ander Schema ke ander jitne bhi types hai unme se ObjectId ki baat kr rha hai. overall ye id ki baat kr rha hai.
// ref: "post", ye model batata hai, mtlb iss model se id aayegi.
```

### ./models/post.js
```
const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    postdata: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("post", postSchema);

// yaha se har post ki ek id create hogi aur iss id ko hum user.js me posts schema me add karege. aur iss tareeke se data share krna referencing kahlati hai.

// aur har post ke pas schema ke ander ek user key hogi jo ye batayegi ki ye post kis user ne banaya hai. mtlb iss key me user ki id ko save karege.
```

# mini project idea
- user post likh paye.
- login and register
- logout
- post creation
- post like
- post delete