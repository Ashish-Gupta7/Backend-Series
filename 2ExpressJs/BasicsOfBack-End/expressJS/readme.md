# ExpressJs

Express ek framework hai jo npm me milega jise nodeJs ke liye banaya gya hai.
A Node.js web application framework that helps us to make web applications. It is used for server side programming.

## IMP => node.js se file name naa likhe agar aisa krte hai to npx nodemon kaam nhi karega.

## ExpressJs Usecase

1. Iska use Routing ke liye hota hai.
2. listen for incomming requests (using ports)
3. jo requests body se aati hai usey parse krta hai (jaise form me submit kiya gaya data)
4. routes ke hisaab se response send krna.

## Routing ?

1. <https://www.meesho.com> => ye meesho ka base url h.
2. <https://www.meesho.com/> => ye url uper wale url ki tarah hi hai pr isme last me slash laga hai jo laga dikhe ya na dikhe isse koi fark nhi padta hai ye sirf ye batata hai ki ham abhi slash route pr hai.
   mtlb jab bhi ham kisi bhi base url ko search krte hai to ham slash route pr hote hai.

3. <https://www.facebook.com/profile/about/gender/> => isme ham pahle to /profile route pr gaye phir /about route pr gaye isi tarah aage badhte gaye.
   mtlb alag alag route pr alag alag pages dikha sake usi ko route kahte hai aur iski coding krna routing kahlati hai. ham jitne marji routes bana skte hai.

yadi ham koi aisa route search krte hai jo uss website me nhi hai to hame ek error milega ki aisa koi route exist nhi karta hai, aur iske alawa aap website me ek all route jaisa feature hota h jise aap bana skte hai jo ki, jab aap koi route search krte h aur wo route kisi se match na kare to iss all wale ko chala do.

## types of requests for route

1. GET: Retrieves data from the server. Typically used for fetching resources.
   server pr koi request bhejo aur uss request ka rresponse milna ye process ko GET route chalata hai.

2. POST: Sends data to the server to create a new resource.
   jab bhi ham google ya kisi website me kuchh search krte hai to jo hamne data enter kiya hai agar wo url me bhi dikhta hai to wo GET route pr hai aur agar nhi dikhta hai to wo POST route pr hai.
   example => jaise hamari koi website hai usme koi user/client aata hai aur uss website me apna account banane ke liye username, moblie number, aur kuchh details dega inn sabhi details ko server ke paas lejane ka kam POST ka hota hai.
   Aap inn sabhi requests ko check krne ke liye inpect => network => all ke sabse top pr(jadatr) ek txt file hogi usey open kare => headers => General(yahi aapko status code aur requests dikhegi) agar aapko request nhi dikhti hai to network me hi uper prevent log ko check mark kr de.
   aapko dekhna hai ki aapne vscode me code krte waqt kya req bheji hai to req.method se check kr skte hai.

3. PUT: Sends data to the server to update or replace an existing resource.
   Put route ka istemal hota hai jab puri resource ko update karna hota hai. Jaise ki, agar aap ek blog post ko puri tarah se badalna chahte hain, to aap put request bhej sakte hain. Put request mein naye data purane data ke jagah set ho jata hai.

4. DELETE: Requests the server to delete a specified resource.

5. PATCH: Sends data to the server to partially update an existing resource.
   Patch route mein, sirf resource ke specific hisse ko update kiya jata hai. Matlab, agar aap ek blog post ki sirf heading badalna chahte hain, to aap patch request bhej sakte hain. Patch request mein, sirf woh data update hota hai jo aapne bheja hai, baaki data as it is rehta hai.

6. OPTIONS: Requests information about the communication options available for a resource or server.
   Options route ka istemal karte samay, client server se ek resource ke baare mein jaankari maangta hai ki kya sab options available hain. Ye request typically Cross-Origin Resource Sharing (CORS) aur Cross-Origin Resource Policy (CORP) mein istemal hoti hai. Jab ek browser kisi domain se dusre domain ke resources tak access karne ki koshish karta hai, to options request bhejta hai taaki server ko pata chale ki wo resource ko access karne ki permission hai ya nahi.

7. HEAD: Requests the headers that would be returned if the same request were made with a GET method but without the actual response body.
   Head request ek prakar ka HTTP request hai jo server se sirf resource ke header information ko retrieve karta hai. Header information mein metadata jaise ki content type, content length, last modification time, aur caching directives shaamil hote hain. Lekin, actual resource content ko retrieve nahi kiya jata.

- `GET vs POST requests`
  `GET`
  > Used to Get some response.
  > Data sent in query string (url limited hoti hai, data string type ka hota hai & data URL me visible hota hai)

`POST`

> Used to POST something (for create/write/Update)
> Data sent via requests body (jaise get me hum sirf string type ka data send kr skte hai lekin post me hum almost kisi bhi type ka data send kr skte hai)
> by default req.body ko pata nhi hota hai ki uske paas kis tarah ka data hai, mtlb data string hai ya json format me hai ya object me kuchh pata nhi hota hai isliye backend me jab hum req.body ko log krke dekhna chahte hai to ye undefined print kr deta hai, lekin hum req.body se aaye data ko read krne ke liye ->

```
app.use(express.urlencoded({extended: true}));
app.use(express.json());
```

yaha 1st line me likha hai ki url ke ander jo data encoded hai usey express samajh sake.
2nd line me likha hai ki yadi data json format me aata hai tb bhi express usey samajh sake.

> inn middlewares ki wajah se hi hum req.body pr aaye data ko read kr skte hai.

### idempotent ?

Idempotent request ek aisi request hoti hai jo multiple times execute hone ke bawajood same result produce karti hai, bina system ki state ko change kiye. Yeh concept web development aur APIs mein bahut important hai.

For example, agar tumhe ek server par idempotent request bhejni hai to agar tum wahi request do ya zyada baar bhejte ho, to server ka state pehle jaisa hi rahega aur same response aayega.

- HTTP methods neeche likhe hai jo idempotent methods kehlate hain:
  GET
  HEAD
  PUT
  DELETE
  OPTIONS

#### idempotent example:

1. Password Reset
   Jab aap apna password reset karte hain, aapko ek reset link email kiya jata hai. Aap chahe kitni baar bhi reset request bhejein, aapko har baar ek naya password reset link milega. Jab aap password successfully reset kar lete hain, phir se same reset link ko use karke password reset nahi kiya ja sakta. Is example mein, password reset request idempotent hai kyunki har request ka same result hota hai - aapko ek valid reset link milta hai.

2. Flight Booking
   Aap sochiye ki aap flight book kar rahe hain. Agar booking process mein network issue hota hai aur aapko confirmation nahi milta, aap dubara booking kar sakte hain. Idempotent booking system ensure karega ki aapki same booking request multiple times process hone par bhi sirf ek hi seat book hogi aur aapke account se sirf ek hi baar payment deduct hoga.

3. ATM Withdrawal
   Sochiye aap ATM machine se paisa nikal rahe hain. Aapne 1000 rupees withdraw karne ka transaction initiate kiya. Ab maan lijiye ki due to some network issue, aapko confirmation message nahi mila aur aapne dobara transaction initiate kiya. Agar ATM system idempotent nahi hota, toh aapka account se 2000 rupees deduct ho sakta hai (1000 rupees har transaction ke liye).

## Middleware

kisi bhi route ko chalane se pahle yadi aap koi kaam karana chahte ho to aap middleware ka use krte ho. ham jitne marji middleware bana skte hai.
middleware ek fnc magta hai aur usme 3 parameter magta hai => req, res, next

'res', 'req', 'next', aur 'app' ye sab objects hote hain jo web application development mein alag-alag functionalities provide karte hain.

1. 'req' (Request): Yeh parameter request object ko represent karta hai. Jab koi client server se communication karta hai, woh ek request bhejta hai. Iss request object mein, client dwaara bheje gaye data, jaise ki URL, headers, query parameters, cookies, aur body content shaamil hote hain. mtlb ki isme client se juda data hota hai.

2. 'res' (Response): Yeh parameter response object ko represent karta hai. Jab server kisi request ka jawaab deta hai, woh ek response bhejta hai. Iss response object mein, server dwaara bheje gaye data, jaise ki status code, headers, aur response body shaamil hote hain. mtlb server dwara bheja gya data.

'res' ke roop me hum html code aur hum direct object bhi bhej skte hai.

1. 'next': ek function hai jo middleware ke agle middleware ya phir route ko call karne ke liye istemal hota hai. Yani, agar ek middleware ne apna kaam pura kar diya hai aur ab agla middleware ko apna kaam karne ke liye control dena hai. Ye ek tarah ka signal hai ki current middleware kaam khatam kar chuka hai aur agla middleware shuru ho sakta hai.

ye kah skte hai ki, node ke sath ek dikkat hai ki agar control ek baar bhi kisi middleware par gya to control khud se agle route/middleware par nhi jayega, usey agle par lejane ke liye aapko push krna padega aur ye push kahlaayega next ko chalana.
agar aap next ko nhi chalate hai to control aage jayega hi nhi jiska mtlb h ki response nhi milega request usi middleware pr ruki rahegi jis pr next nhi chalaya gya hai.
hame routes ke andar next ki jarurat nhi hoti hai kyuki hame usi route ko chalana aur kahi jana hi nhi hai.
app.use middleware hota hai.
Jab aap .use() method ko kisi Express application par call karte hain, aap middleware function ko specify karte hain jo har incoming request ke saath execute hota hai.
Is flexibility ka matlab hai ki hum kisi bhi request ko handle karne ke liye middleware ko kisi bhi jagah par add kar sakte hain, chahe wo request ka method GET ho ya POST, ya fir kisi specific route ke liye ho ya phir global level par. pr Generally middleware ko rotes se pahle hi likhte hai.

## nodeJs vs expressJs

nodeJs aur expressJs dono ki madad se ham server bana skte hai. Lekin ham expressJs ka use karege server banane me kyuki nodeJs se server banane ke liye bahot lines ka code likhna padta hai, jo expressJs me kam lines me ho jata hai aur easy to use aur readable hota hai. nodeJs ke docs me HTTP hota hai isi ke madad se server banta hai. chahe nodeJs ho ya expressJs ho kuchh bhi ho at the end of wo bhi server banane ke liye HTTP ka hi use karega.

mtlb, node is the main thing express ke code se hum server ka code likh pate hai aur server kaisa react karega wo bhi express ki help se likhte hai.

expressJs ek npm package hai, iske help se routing, server management, data handling, request ko handle krna, response ko bhejna, sirf itna hi nhi kai baar server respons se kis tarah ka data jayega usey bhi check krna, aise bahot saare kaam expressJs krta hai.

why expressJs => HTTP is difficult to use, expressJs makes this easier.

## Dynamic routing ya route parameters

Aisa koi bhi route jiska koi hissa baar baar same rhta hai and kuchh hissa bar bar change hota hai iske liye aap ek dynamic route bana skte hai.
Example -
facebook.com/profile/rohit
facebook.com/profile/virat
facebook.com/profile/msd
facebook.com/profile/jassi

yaha facebook.com/profile/ ye har baar same rhta hai aur iske aage ki chees change hoti rhti hai, to iss tarah ke route ko banane ke liye dynamic routing ki jati hai.

app.get('/profile/harsh', function (req, res) {
res.send('Hello Harsh');
});

jab bhi ham /profile/harsh search karege to output me Hello Harsh dikhega aur yadi ham /profile/harsh ki jagah /profile/ankit search kare to ek error show hoga ki aisa koi route exist nhi krta hai, aisi samasya se bachne ke liye dynamic routing kaam krti hai.

app.get('/profile/:username', function (req, res) {
res.send('Hello Harsh');
});
yaha username ki jagah kuchh bhi likh skte hai ye ek variable ki tarah hai. mtlb username ki jagah kuchh bhi likh skte hai

ab ham /profile/kuchhBhi likhe output me hamesha Hello Harsh hi dikhega. lekin yaha phir bhi ek samasya hai ki /profile/kuchhBhiNam likhne pr output hamesh Hello Harsh mtlb sirf harsh ke liye hi output mil rha hai ham chahte hai ki jo bhi /profile/ ke baad likha jaye vahi output me show ho.

app.get('/profile/:username', function (req, res) {
res.send(`Hello ${req.params.username}`);
});
:username client/user ke dwara bheja gaya req hota hai mtlb iska data req me milega.
yaha ye :username ko params kahte hai.
isliye :username wali cheej me jo kuchh bhi search kiya jayega usey access krne ke liye ${req.params.username} iska use krte hai.

## Template Engines

Ek markup style jo ki baad me convert hojayegi html me.
example =>
<%= %> -> jab data print karana ho.
<% %> -> jab koi javascript logic ko lagana ho.

## EJS vs HTML

EJS aur HTML dono web development mein istemal hone wale markup languages hain.

Syntax:
HTML: HTML ek static markup language hai, jismein aapko tags ka istemal karna hota hai jaise <html>, <head>, <body> etc.

EJS: EJS (Embedded JavaScript) ek dynamic template language hai, jo JavaScript ke saath mila kar use kiya jaata hai. Isme HTML ke saath JavaScript code embed kiya ja sakta hai, jisse dynamic content generate kiya ja sakta hai.
https://ejs.co/

Variables aur Expressions:
HTML: HTML mein aap kisi tarah ke expressions ya variables ka istemal nahi kar sakte. Sabhi content static hota hai.

EJS: EJS mein aap JavaScript ke variables aur expressions ka istemal kar sakte hain. Jaise ki <%= variable %> syntax ka upyog karke aap dynamic content ko HTML mein embed kar sakte hain.

Loops aur Conditions:
HTML: HTML mein loops aur conditions ka istemal nahi kiya ja sakta. Static content ko hi represent karta hai.

EJS: EJS mein aap JavaScript ke loops aur conditions ka istemal kar sakte hain, jisse aap dynamic content ko generate kar sakte hain.

File Extension:
HTML: HTML files ka extension .html hota hai.

EJS: EJS files ka extension .ejs hota hai.

Server-side Rendering: render ka mtlb ejs file ko call krna hai.
HTML: HTML files server-side pe generate kiye jaate hain, lekin dynamic content ko generate karne ke liye alag se techniques ka istemal karna padta hai.

EJS: EJS server-side rendering ke liye bana gaya hai, jisse aap server-side pe dynamic content generate kar sakte hain, jo client ko HTML ke roop mein bheja jaata hai.

Toh, mukhya antar HTML aur EJS mein yeh hai ki HTML static content ke liye use hota hai, jabki EJS dynamic content ko generate karne ke liye use hota hai jisme JavaScript ka istemal hota hai.

## ejs setup

(1.) install ejs = npm i ejs

(2.) configure ejs = app.set("view engine", "ejs"); ise routes se phle paste kr do.

app.set("view engine", "ejs"); ko middleware se pehle rakhna chahiye. Middleware ka kaam hota hai request aur response objects ko modify karna, ya kisi specific task ko perform karna, jabki app.set("view engine", "ejs"); sirf view engine ko set karta hai.
Agar aap middleware ke pehle view engine ko set nahi karte hain, toh Express.js render engine ko pata nahi chalega ki konsa view engine ka istemal karna hai, aur aapka template engine sahi se kaam nahi karega.

(3.) ek views nam se folder banao aur isme ejs files banao. ye folder root level pr banao.

(4.) res.send ki jagah res.render krdo => render krte waqt make sure ki views folder ke ander wali hi koi file ka naam likhe aur render function me .ejs extention ko mention na kare.

ab jab aap terminal me file chalayege aur browser me apna server search karege to jo page dikhega vo ejs page hoga.

## Static files

Images, stylesheets aur frontend js ko setup krna.

setup =>
(1.) create a folder called public. ye folder root level pr folder banega.
(2.) create 3 folders inside it, images, stylesheets, javascripts
(3.) configure the express static
(4.) understand the path

## Error Handling

Go to browser and search Express Error Handling, then go to Express.js and find the default error handler, ab iske code ko copy kare aur last wale route ke neeche " express_variable_name.use() " ke ander paste krdo.

### HTTP response status codes =>

1. Informational responses (100 – 199)

   - **100 _Continue_** server ne req ko accept kr liya hai.
   - **101 _Switching Protocols_** req jab server pahuchh jati hai aur server ko aisa lage ki iske liye HTTp protocol sahi nhi hai aur yadi server ise kisi aur protocol me convert kr deta hai, jo hume pta nhi chalega uske liye 101 status code hota hai.

2. Successful responses (200 – 299)

   - **200 _OK_** perfectly server pr req aayi aur server ne uss req ko res bhi kr diya hai, jisme kisi bhi prakar ki koi dikkat na ho, Ok status.
   - **201 _Created_** jab hum server pr kuchh create krte hai aur wo server pr create ho jata hai, tb jo server res bhejta hai created successfull uske liye 201 use hota hai, Created status.
   - **202 _Accepted_** server pr aapne req bhej di waha pahuchh bhi gayi, aur ab server uss kaam ko jab tak process kr rha hai tb tk ke liye 202 status chalega., accept status.
   - **203 _Non-Authoritative Information_** jab hum server pr koi req bhejte hai aur server uss req ko kisi aur server me bhej deta hai, chahe wo server usi company ka ho yaa fir wo server koi third-party ka ho isse fark nhi padta hai, iske liye 203 status use hoga, ise Distributed system kahte hai.

3. Redirection messages (300 – 399)

   - **301 _Moved Permanently_** jab hum koi req bhejte hai aur uss jagah pr jaha req gayi hai yadi waha wo data nhi milta hai ya wo data waha se move kiya ja chuka hai ya wo data waha exist nhi krta hai tb uske liye 301 status use hota hai.
   - **307 _Temporary Redirect_** jab kisi server ka data temporary roop se kuchh time ke liye kahi aur move kr diya jata hai to aise me 307 status code milta hai.
   - **308 _Permanent Redirect_** Kisi url ko likhne se jo data milta hai jab wo data ko kisi aur url ke roop me set kr diya jata hai, sort of url change kr dena tab ye status code dikhayi deta hai.

4. Client error responses (400 – 499)

   - **400 _Bad Request_** jab user koi missing parameter (data galat fill krna, poora info. na dena, url me koi galti) server pr bhejta hai tb ye status dikhayi deta hai.
   - **401 _Unauthorized_** Jab aapki request mein valid authentication credentials nahi hote, toh server yeh bolta hai ki aap authorized nahi ho (401 status code). Iska matlab hai ki client ko apne aap ko authenticate karna padega taaki woh requested resource ko access kar sake. Yeh aksar tab hota hai jab aapko login ya valid token dena padta hai. _Example:_ Jab aap kisi website ko bina login kiye access karne ki koshish karte ho, aur sahi credentials nahi dete, toh server 401 status code dega.
   - **403 _Forbidden_** Jab server aapki request ko samajh toh leta hai, lekin usse authorize nahi karta (403 status code). Iska matlab hai ki client ke paas required permissions nahi hain, bhale hi client authenticated ho. Agar aapne login toh kar liya hai, lekin phir bhi aapko ek restricted page access karne ki permission nahi hai, toh server 403 status code dega.
   - **404 _Not Found_** Requested resource does not exist on the server.

5. Server error responses (500 – 599)
   - **500 _ISE(Internal Server Error)_** Jab server pe kuch galti ho jaati hai aur woh request ko process nahi kar paata, tab 500 status code deta hai. Yeh ek general error hai jo batata hai ki server mein kuch unexpected problem hui hai.
   - **502 _Bad Gateway_** Jab ek server (gateway ya proxy) doosre server se valid response nahi le paata, tab 502 status code deta hai. Iska matlab hai ki intermediary server ko upstream server se koi problem hui hai. Jab aap ek website ko access kar rahe ho jo multiple servers use karti hai, aur unmein se koi server down ho ya wrong response de, toh 502 error aa sakta hai. Yeh tab hota hai jab upstream server down ho, misconfigured ho, ya maintenance mein ho.
   - **503 _Service Unavailable_** Jab server temporarily overload ya maintenance ki wajah se request ko process nahi kar sakta, tab 503 status code deta hai. Iska matlab hai ki server temporarily unavailable hai.

## Error handling kai tarah se ki ja skti hai =>

## throw err, return err, next(err), new err, throw new err

1. throw err: Yeh statement ek error ko throw karta hai. Jab yeh statement execute hoti hai, program ki execution ruk jaati hai aur error ko uske immediate calling function tak propagate kiya jaata hai.
   throw new Error('This is an error');

2. return err: Yeh statement ek error ko return karta hai. Agar aap kisi function mein error ko return karte hain to wo function error ke saath band ho jaata hai aur us error ko handle karne ke liye calling function ko responsibility hoti hai.
   if (err) {
   return err;
   }

3. next(err): Yeh statement Express middleware mein error ko propagate karta hai. Jab aap next(err) ka istemal karte hain, Express agle error handling middleware ko call karta hai aur error ko us middleware tak pahunchata hai.
   app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).send('Something broke!');
   });

4. new Error(): Yeh ek Error object create karta hai. Iska istemal error object banane ke liye hota hai, lekin iska use karne ke baad aapko use throw karna padega taaki yeh error throw ho sake.
   const err = new Error('This is an error');
   throw err;

5. throw new Error(): Yeh ek Error object create karta hai aur use throw bhi karta hai. Yeh dono kaam ek hi statement mein karta hai.
   throw new Error('This is an error');

Inme se throw new Error() Express middleware mein error ko propagate karne ke liye sabse zyada istemal hota hai.

Error ko handle karne ka sabse accha tareeka yeh hota hai ki aap apne application ki requirement ke hisab se tareeke chunein. Simple applications ke liye Express ke default error handling middleware ka istemal kafi hota hai, lekin complex applications mein custom error handling middleware likhna behtar hota hai.

## (1.) Express Default Error Handling Middleware

Express ke default error handling middleware ka istemal karna. Ismein, aap next(err) se error ko propagate karte hain aur Express apne aap error ko handle karta hai.

app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).send('Something broke!');
});

## (2.) Custom Error Handling Middleware

Apna khud ka error handling middleware likhna. Ismein, aap error ko handle karne ke liye custom logic ka istemal kar sakte hain.

app.use((err, req, res, next) => {
// Custom error handling logic
res.status(500).send('Something broke!');
});

## (3.) Async/Await and Try/Catch:

try/catch ka istemal asynchronous code mein error handling ke liye.

app.get('/', async (req, res, next) => {
try {
// Async code
const result = await someAsyncFunction();
res.send(result);
} catch (error) {
// Error handling
next(error);
}
});

## (4.) Promises:

Promise mein error handling.

somePromiseFunction()
.then(result => {
// Handle result
})
.catch(error => {
// Handle error
});

## (5.) Error-First Callbacks:

Node.js mein common tareeka hai error ko handle karne ka.

fs.readFile('file.txt', (err, data) => {
if (err) {
// Handle error
console.error(err);
return;
}
// Handle data
console.log(data);
});

## Example =>

const express = require('express');
const app = express();

app.get('/', function (req, res) {
res.send("/ route pr aa gye");
});
app.get("/error", function(req, res){
throw Error("pta nhi kyu nhi chal rha hai."); // (throw Error) or (new Error) or (throw new Error) isme se throw Error use karo.
})
app.get('/profile', function (req, res) {
res.send("profile mera hai");
});

// Middleware function error ko handle karne ke liye hai => Error Handler
app.use(function errorHandler(err, req, res, next) {
if (res.headersSent) { // Yeh dekhta hai ki kya `headers` pehle se hi bheje gaye hain ya nahi
return next(err); // Agar headers pehle hi bheje gaye hain, toh agla middleware error ke saath ko bulayega
}
res.status(500); // Status code ko 500 (Internal Server Error ka code) pe set karo
res.send('error hai', { error: err }); // Error hai print kr dega aur error bhi print kr dega.
});

`Headers` =>

HTTP headers, HTTP (Hypertext Transfer Protocol) mein information exchange karne ke liye use kiye jaane wale metadata pieces hote hain. Jab aap kisi web server se request karte hain, to aapki request ke saath kuch headers bheje jaate hain. Server aapki request ko process karta hai aur phir response ke saath bhi headers bhejta hai.

Yeh headers ke kuch common types hain:

1. Request Headers:
   Request headers client dwara server ko bheje jaate hain.
   Ye request ki details jaise ki content type, content length, authentication details, caching instructions, etc. bataate hain.
2. Response Headers:
   Response headers server dwara client ko bheje jaate hain.
   Ye server ke response ki details jaise ki content type, content length, caching instructions, cookies, etc. bataate hain.

Request Headers ka Example:
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,_/_;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive

Response Headers ka Example:
HTTP/1.1 200 OK
Date: Sun, 24 Apr 2024 12:00:00 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 34567
Cache-Control: max-age=3600
Set-Cookie: session=abc123; Expires=Sun, 24 Apr 2024 13:00:00 GMT

Kuch Common Headers:
Content-Type: Response mein aane wale content ka type bataata hai (text, html, json, xml, etc.).
Content-Length: Response mein aane wale content ka length bataata hai.
Cache-Control: Cache ko control karne ke liye use hota hai.
Cookie: Client ke browser mein cookie set karne ke liye use hota hai.
Set-Cookie: Server se client ke browser mein cookie set karne ke liye use hota hai.
Authorization: Request mein authentication ke liye use hota hai.

Headers communication ke process ko control karte hain aur information exchange mein madad karte hain.
