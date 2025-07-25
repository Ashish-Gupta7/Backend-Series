### What is Express Generator

Hum logo ko kafi sara kam karna padta hai express setup krne me iska mtlb jab hum koi naya project banate hai to phir wahi setup files views, public folders, express install express boilerplate kafi cheeje krni padti hai. agar aap express generator ka use krte hai to aapko ye kaam nhi krne padege express aapke liye ye files folders ko banakr dega.

### Steps to use Express Generator

install globally => npm i express-generator -g

### To create new App/project anywhere

(1.) open cmd => agar aap ki directory desktop par hai to theek hai nhi to directory ko desktop pr move karo. => cd Desktop, kai logo ke laptop me nhi aayega agar aisa ho to OneDrive likhe phie enter, uske baad cd Desktop likhe.
(2.) create new app/project => express appname --view=ejs
(3.) now use two commands => (a.) cd appname (mtlb ab aap apni directory ko change krke appname jo bhi hai uss pr lana chahte hai.)
(b.) sabhi dependencies ko install karne ke liye => npm i
(4.) open it on vs code => aap desktop me jakr bhi appname wale folder ko vs code me open kr skte hai ya phir cmd se direct vs code ko usi folder ke sath open krne ke liye "code ." likhe. double qoutes me nhi.

### To run the server

npx nodemon => itne se hi aapka server start ho jayega.
(1.) port dekhne ke liye => bin>www
(2.) yaha sirf npx nodemon isliye likhte hai kyuki yaha server ka kuchh code app.js me aur kuchh code www me likha hota hai isliye hum npx nodemon bs likhate hai aur ye khud se hi server ke liye jise chalana hai usey chala deta hai.

### Cookies and Session

jab humara browser humara hi laptop pr chal rahe server se connect hota hai to usey localhost kahte hai.
cookie aur session dono ka use data save krne ke liye hota hai.

yaha jo data hai wo aapka url/link hai jo ki aapne kisi bhi website pr click kiya hai.

(1.) cookies data ko client ke browser pr store krti hai.
(2.) server side pr data save krne ke liye session ka use hota hai.
(3.) dono me jada safe session wala hota hai.

### session

installation => npm i express-session
go to app.js => view engine ke baad ise setup kare.
(1.) require => const session = require("express-session");
(2.) create =>
app.use(session({
resave: false,
saveUninitialized: false,
secret: "secret",
}));
(3.) ye aap routes me index.js me karege (set and read) =>
kisi bhi route ke ander =>
app.get("/", (req, res) => {
req.session.ban = true, **_yaha hmne session ki value aur nam set kr diya hai, yaha aap kuchh bhi naam de skte ho aur value bhi._**
res.render("index");
});

    app.get("/check", (req, res) = {
        console.log(req.session);
        if(req.session.ban === true){
            res.send("you are banned");
        } else {
            res.send("you are not banned");
        };
    });

    (4.) remove session =>
    app.get("/remove", (req, res) => {
        req.session.destroy((err) => {
            if(err) throw err;
            res.send("session removed");
        });
    });

    jab bhi server restart ho jata hai to jo session bana tha wo session bhi delete ho jati hai.
    resave:false => agar session ki value change na hui ho to fir se session ko save na kare.
    saveUninitialized:false => agar session ki value change na hui ho to fir se session ko save na kare.
    secret: "secret" => session ko encrypt krne ke liye use kuchh string dete hai aur isi ke basis pr session ko encrypt kiya jata hai.

### cookie

installation => npm i cookie-parser, waise jab hum express-generator ko install krte hai to cookie bhi install ho jata hai aap app.js me check kr skte hai.

go to routes => index.js
(1.) create =>

**_hum browser pr jab bhi kuchh bhi search krte hai to wo ek req ke roop me server ke pas jata hai aur phir server se res ke roop me kuchh data document page pr dikhata hai. yaha hum / route chalate hai to req server pr gayi kyuki cookies browser pr store hoti hai isliye jo req aayi hoti hai wo server se cookie ka res lekr browser me store krti hai._**

    router.get("/", (req, res) => {
        res.cookie("name", "shiva");
        res.render("index");
    });

(2.) read =>

**_browser pr cookies save rhte hai hum browser se req bhejte hai server pr isliye req.cookies hoga cookies ko read krne ke liye._**

    router.get("/read", (req, res) => {
        console.log(req.cookies);
        console.log(req.cookies.name);
        res.send(req.cookies);
    });

(3.) delete =>

**_server se browser ko bataya jata hai ki cookie ko delete kr do isliye res ka use hoga._**

    router.get("/delete", (req, res) => {
        res.clearCookie("name");
        res.send("cookie deleted");
    });

**_Flash msg_**

Jab bhi hum kisi ejs page ko dekhte hai waha par hume kisi prakar ka koi information, alart, warning ya kuchh bhi milta hai hai usey flash msg kahte hai.
example ke liye jab aap facebook par galat email ya password fill krte hai to aapko ek alert ya warning jaisa kuchh milta hai. in alerts aur warnings ko dekhne ke liye aap bootstrap kiwebsite pr inhe dekh skte hai aur use bhi kr skte hai.

➡️ steps => flash msg ke liye hum ek aur naya desktop folder banayege. folderName => flashmsg.
flash msg ka setup aap express session ke baad hi likhege. kyuki express session se session bn jaye tb to uss pr flash ka kaam kiya jayega.
(1.) install => npm i connect-flash aur flash msg ko use krne ke liye express-session ki bhi jarurat hoti hai isliye ise bhi install karege.
(2.) require and setup.
(3.) go to routes => index.js
flash msg ko use krne ke liye hum middleware use krte hai. isliye hum app.use me pahle flash ko likh lege jisse app.use har route se pahle chale.
(4.) jis route pr aap flash ko create karege uss route ko chhodkr kisi aur route pr usey chalate hai.

➡️ bootstrap setup =>
(1.) clear your index.ejs file.
(2.) go to bootstrap => docs => introduction => Include Bootstrap’s CSS and JS. => copy code and paste in index.ejs page.
(3.) go to components => alerts => select and copy then paste in index.ejs page in body.

➡️use flash msg => by example => hum chahte hai ki jab hum kisi route pr jaye jaise ki /failed uss route pr ek flash msg bane aur wo flash msg hum logo ko kisi aur yani dusre route pr dikhe ejs me.
flash msg ka mtlb server ke kisi route me koi data banana aur uss data ko dusre route me dikhana.
one more example => ek login route hai jispr hum login form ko dekhte hai aur usme hum email aur password fill krte hai. jab hum login button pr click kare aur agar mai login ho jau to profile page ko dikha do aur agar login nhi ho pata hu to error route dikha do jisme alert ya warning ya wrong details etc tarah ke alert msg show hoge.

**_overall, routes ka default behavior hota hai ki ek route ka data kisi dusre route pr show nhi hoga. lekin jab hum flash msg ka use krte hai to hum ek route ka data fusre route pr lekr ja skte hai. background me yani jo flash msg ke liye core code likha gya hai wo express-session ki madad se likha gya hai mtlb at the end of flash msg express-session ka use kerte hai._**
