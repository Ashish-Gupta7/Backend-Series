## DataBase
`har naye app ka data store hoga storage pr usey directly rakhne ki jagah ek container me rakhege, uss container me sirf uss app ka data aayega aur uss container ko hi database kahte hai. mtlb uss app se related jo bhi data hai usey ek jagah pr store karege aur uss jagah ko hi database kahete hai.`

`Type of database`
1. Relational Databases (RDBMS) or SQL database:
    Relational databases tabular form mein data ko store karte hain. Har table ka ek unique identifier hota hai jo primary key ke roop mein jaana jata hai. Tables ke beech relationships define kiye jaate hain. actual me koi table nhi bani hoti hai.
    Example: MySQL, PostgreSQL, SQLite, Microsoft SQL Server, Oracle

2. `NoSQL Databases:
    NoSQL databases non-relational data models ka use karte hain. Inmein data ko key-value pairs(object), documents, graphs, ya wide-column stores mein store kiya jata hai.
    Document Stores: Data ko documents ke roop mein store karte hain. Documents JSON ya XML format mein hoti hain.
    Example: `MongoDB`, Couchbase, CouchDB`
    Key-Value Stores: Data ko keys aur corresponding values ke form mein store karte hain.
    Example: Redis, Riak, DynamoDB
    Wide-Column Stores: Data ko columns ke form mein store karte hain.
    Example: Apache Cassandra, HBase
    Graph Databases: Data ko nodes aur edges ke form mein store karte hain.
    Example: Neo4j, Amazon Neptune

3. Time-Series Databases:
    Time-series databases events ya data points ko time stamps ke sath store karte hain. Ye databases real-time analytics aur monitoring ke liye use hote hain.
    Example: InfluxDB, Prometheus, KairosDB

4. Columnar Databases:
    Columnar databases data ko columns ke instead of rows mein store karte hain. Ye databases analytics aur data warehousing ke liye optimized hote hain.
    Example: Apache Cassandra, Apache HBase, Google Bigtable

5. Graph Databases:
    Graph databases graph structures mein data ko store karte hain. Ye databases relationships aur connections ko explore karne ke liye optimized hote hain.
    Example: Neo4j, Amazon Neptune, ArangoDB

6. In-Memory Databases:
    In-memory databases data ko RAM mein store karte hain, jo ki traditional disk-based databases se fast access provide karte hain.
    Example: Redis, Memcached, VoltDB


# `ODM (Object-Document Mapping)` aur `ORM (Object-Relational Mapping)` dono hi programming paradigms hain jo object-oriented programming languages ko databases se connect karne mei madad karte hain, lekin dono ke beech me kuch fark hai.

`ORM (Object-Relational Mapping):`
  1. ORM, relational databases jaise ki SQL databases ke liye design kiya gaya hai.
  2. Isme objects ko relational databases ke tables se map kiya jata hai.
  3. ORM ke example hain Hibernate (Java ke liye) aur Entity Framework (.NET ke liye).
`ODM (Object-Document Mapping):`
  1. ODM, document-oriented databases jaise ki MongoDB ke liye design kiya gaya hai.
  2. Isme objects ko document format (jaise ki JSON) ke documents se map kiya jata hai.
  3. ODM ka use MongoDB, Couchbase, aur other document-oriented databases ke liye kiya jata hai.


## `Back-end me hum do server use krte hai`
1. Application server => humara application server `node server` hai. => application server wo saare kaam krta hai jisme data ki jarurat nhi hoti hai aur jab bhi data ki jarurat hoti hai to ye database server ke pas jata hai data ke liye.
2. database server => humara database server `mongoDB` hai. => database server ka use app ke data ko manage krne ke liye hota hai.

   Code Side                                             MongoDB side
1. DB setup                                              DB formation
2. Model creation in code                           Collection creation in MongoDB 
3. Schema creation in model                      Document structure creation in collection
4. schema field                                          Document field

code side mtlb code krna ya code likhna.
MongoDB side ka mtlb DataBase se hai jisme data store hota hai.

1. jab hum code side pr DB setup krte hai to MongoDb side me database formation hota hai mtlb mongoDB me database bn jata hai aapke app/project ke liye.
 code side(DB setup) => MongoDB side(DB formation) 
2. jab hum code side pr model create krte hai to MongoDB/dataBase side me collection creation hoti hai mtlb mongoDB me collection bn jata hai.
 code side(Model creation) => MongoDB side(Collection creation) 
3. jab hum code side pr schema create krte hai to MongoDB/dataBase side me document structure creation hoti.
 code side(schema creation) => MongoDB side(Document creation) 
4. jab hum code side pr schema field banate hai to MongoDB/dataBase side me document field banti hai.
 code side(schema field) => MongoDB side(Document field) 

`Abhi hum jo padh rhe hai ki schema banane se document banta hai ye utna sahi nhi hai pr samajhne ke liye abhi yahi padhege!`

 Example 
manlo ek app/project banate hai to uske liye ek database banayega. iss app me kai tarah ke collection of data hoga like users, products, orders, admin etc. ab har ek collection ke pass bhi kuchh data hoga like users me 1000000 users, products me 100000 products, orders me 100000 orders, admin me 100000 admin etc. ye man lete hai. har ek user ka ek document hota hai.

(1.) app/project ka poora data => DataBase.
(2.) database ke ander kuchh collection(users, products...) hote hai inhe banane ke liye code side me model create krna padta hai.
(3.) har ek user ya har ek product ke liye document hota hai jise banane ke liye schema create krna padta hai. mtlb kisi ek user pr baat krna document hai.

## Mongoose
[mongoose](https://mongoosejs.com/)
A library that creates a connection between MongoDB & Node.js JavaScript Runtime Environment.
It is an ODM (Object Data Modeling) library.
Hum wo saare kaam jo mongo shell ki madad se kr skte hai unn sabhi ko mongoose ki madad se bhi kiya ja skta hai.

### mongoose uses Oeration Buffering
Mongoose mein "operation buffering" ek aisa feature hai jo aapko tab help karta hai jab aap MongoDB se directly connect nahi ho pa rahe hote. Iska matlab hai ki jab aapka database connection establish nahi ho pata, tab bhi aapki queries queue mein add ho jati hain aur jab connection ban jata hai to woh queries execute ho jati hain.

Maan lo aapki application start hoti hai aur turant hi aapne kuch data save karne ka try kiya, lekin abhi tak database connect nahi hua hai. Aise mein Mongoose aapki query ko buffer kar lega aur jaise hi connection establish ho jata hai, woh query execute ho jati hai.

Ye feature especially useful hota hai jab aap distributed systems ya microservices mein kaam kar rahe hote hain jaha connectivity issues aa sakte hain.

##  Installation 
1. MongoDB => go to browser => mongodb.com => download => install 
      ye steps router ke ander ek users.js file me kare ye cumpulsary nhi h ki users file hi ho phir bhi aisa hi kare. 
2. MongooseJs => npm i mongoose
3. require =>          const mongoose = require("mongoose");
4. connect =>          mongoose.connect("mongodb://localhost:27017/databaseName");                  (localhost == 127.0.0.1)

      ye line code side me likhege aur MongoDB side me DB bn jayega.
      MongoDB ka default port 27017 hai.
      databaseName => iss nam se database banega.

      kyuki hum jo bhi code likh rahe hai wo nodeJs me hai to nodeJs ko mongodb se connect krne ke liye mongooseJs ka use kr rha hai. nodeJs mongoose se kahta hai ki mongodb se localhost pr port 27017 pr databaseName ka connection banao.
5. har user ke pas kuchh data hoga like name, email, password, etc. ise hum schema ki madad se database me document ke roop me store krte hai.

    const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        age: Number,
        password: String,
    });

    JavaScript mein constructor functions ke saath kaam karte waqt new keyword ka istemal zaroori hai taaki sahi instantiation aur behavior ho sake. new ko chhodna anjaane consequences ya errors ka karan ban sakta hai. document me kahi kahi new keyword ka use kiya gya hai aur kahi kahi nhi kiya gaya hai pahle bhaiya se clear krlo phir baad me agar wo bole ki use karo to karo.
    ye har user ke liye document banayega.

6. collection banane ke liye model create krna padega. yaha humne sath hi model ko export bhi kr diya hai.

    module.exports = new mongoose.model("collectionName", userSchema);

abhi tak humne ek database bana liya hai aur ek user nam ka collection bana liya hai. aur ab user collection ke ander schema ki madad se document ko store karege iske liye create, reading, delete, update ko padhege.

## `CRUD Operations`  C -> Creation, R -> Reading, U -> Update and D -> Delete 

## learn all basic CRUD operations with expressGenerator => go to `ExpGen` repository.

Creation, Reading, Delete and Update ke liye aapne jise exports kiya tha usey usi routes folder me ek file ke ander import karege aur phir code karege.
    const userModel = require("./users");

    yaha userModel se related jo kuchh bhi likhege wo sab kuchh aynchronous hota hai. isliye async-await ka use karege. waise yaha sirf async-await ki jagah hum callback, promises ka bhi use kr skte hai pr async-await jada behtr tareeka hai isliye hum async-awaut ka use karege.

 `async-await, promises, callback ko padhne ke liye => full-satck -> javascript -> asyncPromisesCallback`

1. `create` 
    router.get("/create", (req, res) => {
        const user = userModel.create();                               ye ek asynchronous function hai. mtlb yeh ek function hai jo ek time leke ek task perform karega. mtlb yadi isme koi error bhi aajaye tab bhi ye agle line ke code ko chala dega. lekin aisa na ho isliye hum async-await ka use krte hai. 
        res.render(user);
    });



    router.get("/create", async (req, res) => {
 create ke ander humesha ek object jata hai isme hum wahi likhte hai jo humne pahle hi schema me likhe the. aap order change kr skte hai. 
        const userCreate = await userModel.create({
            name: "Aman",
            email: "aman@gmail.com",
            age: 20,
            password: "aman123",
        });
        res.send(userCreate);
    });

2. `reading`
    router.get("/read", async (req, res) => {
 find() humesh user collection ke ander rakhe sabhi users ko ek sath print kr deta hai jo ki ek array hota hai. kyuki ek se jada cheejo ke liye array hota hai. agar user collection me kisi bhi user ka data nhi hai to hume ek blank array milega. 
        const userRead = await userModel.find();
        res.send(userRead);
    });


    router.get("/readOne", async (req, res) => {
 findOne() humesh user collection ke ander rakhe sabhi kisi ek se related data print kr deta hai jo ki ek object hota hai. kyuki ek ke liye object ka use hota hai. agar aap koi aisa data findOne() ko batao jo ki user collection me exist hi na krta ho tab ye null return krta hai. 
        const userOne = await userModel.findOne({name: "Aman"});
        res.send(userOne);
    });

3. `update`
    router.get("/update", async (req, res) => {
 findOneAndUpdate() => isme hum ek object pass krte hai jo ki user collection me exist krne wale user ko update krta hai. 
        const userUpdate = await userModel.findOneAndUpdate({name: "Aman"});
        res.send(userUpdate);
    }); 


4. `delete`
    router.get("/delete", async (req, res) => {
 findOneAndDelete() => isme hum ek object pass krte hai jo ki user collection me exist krne wale user ko delete krta hai. 
        const userDelete = await userModel.findOneAndDelete({name: "Aman"});
        res.send(userDelete);
    }); 


## `CRUD ya aur kisi asynchronous operations ka jab bhi use kare to best method kya hona chahiye` =>

1. `.then()`
            app.get("/create", (req, res) => {
                let user = userModel.create({
                    name: "Ashish gupta",
                    age: 20,
                    email: "ash888@gmail.com"
                }).then(() => {
                    res.send(user);
                });
            });

iska mtlb hai ki yadi .then() ke phle likhi gayi cheeje sahi hai to .then() ke ander jo likha hai usey chala do, pr isme error ko handel nhi kr skte hai.

2. `.then() and .catch()`
            app.get("/create", (req, res) => {
                userModel.create({
                    name: "Ashish gupta",
                    age: 20,
                    email: "ash888@gmail.com"
                })
                .then((user) => {
                    res.send(user);
                })
                .catch((err) => {
                    console.error("Error occurred: ", err);
                    res.status(500).send("Error occurred while creating user.");
                });
            });

isme hum error ko bhi handel kr skte hai.

3. `async-await`
            app.get("/create", async (req, res) => {
              const userDetail = await userModel.create({
                name: "Ashish Kumar Gupta",
                age: 23,
                email: "ashishkg123@gmail.com",
              });
              res.send(userDetail);
            });

jab bhi hum kisi aynchronous operatons ko chalana chahte hai to uske phle await likhte hai aur uss asynchronous ke nearest parent function ke phle async likhte hai.

4. `async-await with try and catch`
            app.get("/create", async (req, res) => {
                try {
                    let user = await userModel.create({
                        name: "Ashish gupta",
                        age: 20,
                        email: "ash888@gmail.com"
                    });
                    res.send(user);
                } catch (err) {
                    console.error("Error occurred: ", err);
                    res.status(500).send("Error occurred while creating user.");
                }
            });

Readable hai: Yeh code saaf aur readable hota hai, jisse samajhne me aasani hoti hai.
Error handling: Error handling bhi asaan hota hai, try-catch block ke istemal se.
Synchronous code jaisa feel: Yeh code aapko synchronous code likhne ka feel deta hai, jo ki zyada natural hai.
Modern approach: async-await ek modern approach hai aur aaj kal iska zyada istemal hota hai.
 overall, `async-await with try and catch` sabse behtar tareeka hai aynchronous operations ko handle karne ka. 