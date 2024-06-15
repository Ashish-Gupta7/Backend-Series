// Example1 =>

// // Yaha par 'http' module ko import kiya gaya hai aur 'http' naam se store kiya gaya hai. ise hum const http = require('http') aisa bhi likh skte hai.
// const http = require('node:http');

// // Ek server instance create kiya gaya hai 'createServer' function se jo HTTP requests ko handle karega.
// // Server instance ka matlab hota hai ek object ya instance jo server ko represent karta hai. Jab aap "http.createServer()" function ka upyog karte hain, woh ek server instance return karta hai. Yeh server instance ek object hota hai jo server ke functionalities aur properties ko encapsulate karta hai.
// const server = http.createServer( (req, res) => {

//     // Har incoming request ka response "Hello from server" hai.
//     // Agar aap kuchh response body ko bhejna chahte hain, to aap res.end() ke andar woh body data provide kar sakte hain.
//     res.end("Hello from server");
// } );

// // Server ko 3000 port par listen karne ke liye ready kiya gaya hai.
// server.listen(3000, () => {

//     // Console par "server started..." message print kiya gaya hai. iske liye ek callback fnc kam kr rha hai jo ki listen ke liye optional hota hai.
//     console.log("server started...");
// })







// Example2 => 
// const http = require("http");
// const server = http.createServer((req, res) => {
//     if(req.url === "/"){
//         res.end("/ page");
//     }
//     if(req.url === "/home"){
//         res.end("/home page");
//     }
//     if(req.url === "/about"){
//         res.end("/about page");
//     }
//     if(req.url === "/about/ashish"){
//         res.end("/about/ashish page");
//     }
//     if(req.url === "/about/ashish/age"){
//         res.end("/about/ashish/age page");
//     }
// })
// server.listen(3000, () => {
//     console.log("server started...");
// })

// Code readability: Code lamba ho jaata hai. Isse code ko samajhna mushkil ho jaata hai aur usme kuch kho jaane ka khatra bhi hota hai.

// Maintainability: Agar aapko future me endpoints ko add karna ho ya change karna ho, toh code ko modify karna mushkil ho jaata hai. Har naye endpoint ke liye ek aur if statement add karna padega, jo code ko aur jyada complex bana dega.
// enpoints mtlb url ke last me koi route likhna.

// Error handling: Agar aap manual if-else ka use kar rahe hain, toh error handling ko manage karna bhi mushkil ho jaata hai. Express.js jaise frameworks me, error handling ke liye built-in functionality hoti hai.

// Performance: Agar bahut saare endpoints hain aur aap har request pe saare endpoints ki matching check kar rahe hain, toh performance pe asar pad sakta hai. Express.js jaise frameworks me, routing ko optimize kiya jaata hai, jo better performance provide karta hai.

// Express.js ka upyog karke in dikkaton ko avoid kiya ja sakta hai. Ye ek minimalist web framework hai jo Node.js pe based hai aur routing, middleware, template engine support, etc. provide karta hai jo web development ko streamline karta hai. Express.js me routes ko define karna bahut hi simple aur organized hota hai. Isme aap endpoints ke liye app.get, app.post, app.put jaise functions ka use kar sakte hain jo routes ko manage karne me madad karte hain.



// Example3 => for url's => using switch case:
const http = require("http");
const fs = require("fs");
const url = require("url");

fs.writeFile("./nodeJs/HTTP/urlSaver.txt", "your search history  =>  ", (err) => {
    if (err) {
        console.log("some error", err);
    } else {
        console.log("file written successfully");
    }
});

const server = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`
    let urlParse = url.parse(req.url, true)         // url ke sabhi hisso ko baant deta hai. jab aap parse pr hover karege to aapko kuchh documentation dikhega jisme parseQueryString hota hai ye hamre qurry ko parse kr deta hai. iske liye hi hmne true kiya hai.
    console.log(urlParse);
    fs.appendFile("./nodeJs/HTTP/urlSaver.txt", log, (err, data) => {

        if (err) {
            console.log("some error in append file");
        } else {
            switch (urlParse.pathname) {             // phle iss switch me req.url tha. lekin ab urlParse hai. agar aap aisa search kare => http://localhost:3000/about?myname=AshishGupta&userId=1&search=friends to aapko terminal me pathname melega. mtlb aap chahe to sirf pathname ko hi chack kr skte hai switch me urlParse.pathname likhkr.
                case "/":
                    res.end("HomePage");
                    break;
                case "/contact":
                    res.end("Contact Page");
                    break;
                case "/about":  
                    const myName = urlParse.query.myname;
                    res.end(`Hi, ${myName}`);
                    break;
                case "/search":
                    const search = urlParse.query.search_query;
                    res.end("Here are your results for search "+ search);
                case "/signup":
                    if(req.method === "GET"){
                        res.end("get request received on sign up page");
                    } else if(req.method ==="POST"){     // agar hum sach me yaha db me signup ke liye details bhej rhe hote to yaha POST req jati aur success print hota.
                        // DB Query...
                        res.end("success");
                    }
                default:
                    res.statusCode = 404;
                    res.end(`Not Found : ${req.url}`);
            }
            console.log("file appended successfully");
        }
    });
    console.log(log);
});
server.listen(3000, () => {
    console.log("server working...");
});

// http se bhi accha expressJs hai server banane ke liye.