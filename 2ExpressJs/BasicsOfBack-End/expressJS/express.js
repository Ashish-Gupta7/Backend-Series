// const express = require('express');                         // Ye code Express.js ko import kar raha hai aur 'express' variable mein store kar raha hai.

// const app = express(); 


// Basic routing => app.METHOD(PATH, HANDLER)                                   Express(ye ek fnc hai) framework ka ek naya object banaya ja raha hai jise hum 'app' variable mein store kar rahe hain.
// app is an instance of express.
// METHOD is an HTTP request method, in lowercase.
// PATH is a path on the server.
// HANDLER is the function executed when the route is matched.


// app.get('/', function (req, res) {                          // '/' endpoint ke liye ek GET request handler define kiya gaya hai.
//   res.send('Hello World');                                  // Yahan 'Hello World' ka response bheja ja raha hai.
// });                                                         // Yahan, hum request ko handle kar rahe hain aur response bana rahe hain.

// app.listen(3000);                                           // Server ko port 3000 par sunne ke liye setup kiya gaya hai.
// overall, iss code se ek server banega jo port 3000 pr "/" route ke requets pr ek response send karega jisme Hello World likha hoga.

// function (req, res){}      =>        // Yeh ek request handler function hai, jo ek HTTP request ko handle karta hai.
// 'req' parameter mein aata hai client dwara bheje gaye request ka pura data, jaise ki headers, query parameters, body, etc.
// 'res' parameter ek response object hai, jisse hum server dwara client ko response bhejte hain.
// Hum 'req' se information extract kar sakte hain aur 'res' ke zariye response bhej sakte hain client ko.


// jab aap iss express.js file ko terminal me run krte ho to aap ek server bana dete ho jo ki aapke hi system ka use krta hai server ke liye mtlb aapka system uss wakt serverka kaam kr rha hota hai, jo 3000 port ka use krta hai. aap apne hi system me google pr jakr localhost:3000 search karoge to aapko "Hello World" likha dikhega.
// yadi aap "Hello World" ko change krte ho to aap uss page ko kitna bhi refresh karo wo change kiya gya text nhi dikhega kyuki aap pahle wale server pr the, jab tak ki aap pahle wale server ko close nhi kr dete aur dobara se server ko terminal pr run nhi krte ho tb aapko edited text nhi dikhega.
// iska ek aur behtr tareeka hai, yadi aap terminal me "npm i nodemon" likhte hai to jis file ko run karege usi file ke bagal me ye install ho jayega jo uss file ya folder ke liye hoga, lekin yadi aap "npm i nodemon -g" likhte hai to aap nodemon ko globally apne system pr install kr rhe hote ho mtlb jab tak aap system format ya nodemon ko uninstall nhi kr dete tb tk har file ke liye nodemon install ho chuka hota hai.
// "npm i nodemon -g" ise terminal me likhne ke baad apne file ko run kare aur yadi aapke me kucch aisa error show ho  =>   

// nodemon : File C:\Users\HP\AppData\Roaming\npm\nodemon.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at 
// https:/go.microsoft.com/fwlink/?LinkID=135170.
// At line:1 char:1
// + nodemon .\BasicsOfBack-End\expressJS\script1.js
// + ~~~~~~~
//     + CategoryInfo          : SecurityError: (:) [], PSSecurityException
//     + FullyQualifiedErrorId : UnauthorizedAccess

// to phir terminal clear krke "npx nodemon file path" likhe aur run krde to aapka system jab bhi aap koi bhi changes karoge to automatic update krdega text ko.





// for routes


// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {                               // aap localhost:3000 ke baad / likhe ya na likhe aapko 'Hello World' yahi dikhega
//   res.send('Hello World')
// })
// app.get('/profile', function (req, res) {                        // aap localhost:3000/profile likhoge tb aapko 'Hello profile' dikhega
//   res.send('Hello profile')
// })
// app.get('/contact', function (req, res) {                        // aap localhost:3000/contact likhoge tb aapko 'Hello contact 16789' dikhega
//   res.send('Hello contact 16789')
// })
// app.get('/ptanhi', function (req, res) {                        // aap localhost:3000/ptanhi likhoge tb aapko 'Hello dhaa dhaa dhaa' dikhega
//   res.send('Hello dhaa dhaa dhaa')
// })

// app.listen(3000)






// for middleware


// const express = require('express')
// const app = express()

// app.use(function(req, res, next){
//     console.log("hello middleware");
//     next();                                        // issme ek dikkat hai agar hamara middleware chal gya to req jaam ho jati hai wo route tak nhi pahuch pati hai usey route tak pahuchane ke liye ek push dena padta hai jo next() ka kaam hai isi ki madad se req middleware se aage route ke paas jati hai.
// })

// app.get('/', function (req, res) {              
//   res.send('Hello World')
// })
// app.get('/profile', function (req, res) {
//   res.send('Hello profile')
// })
// app.get('/contact', function (req, res) {       
//   res.send('Hello contact 16789')
// })
// app.get('/ptanhi', function (req, res) {        
//   res.send('Hello dhaa dhaa dhaa')
// })

// app.listen(3000)






// for dynamic routing


// const express = require('express')
// const app = express()

// app.use(function(req, res, next){
//     console.log("hello middleware");
//     next();
// })

// app.get('/', function (req, res) {              
//   res.send('Hello World');
// });
// app.get('/profile', function (req, res) {
//   res.send('Hello profile');
// });
// app.get('/profile/:username', function (req, res) {
//   res.send(`Hello ${req.params.username}`);
// });

// app.listen(3000)



// ExpressJs me kai sari cheeje inbuilt aati hai jaise ki url =>
// const express = require("express");
// const app = express();

// app.get( "/", ( req, res ) => {
//     res.send(`Hello from Homepage`);
// })
// app.get( "/about", ( req, res ) => {      // if you search http://localhost:3000/about?name=Ashish&age=23
//     res.send(`Hello i am ${req.query.name}, i am just ${req.query.age}`);
// })
// app.listen(3000);