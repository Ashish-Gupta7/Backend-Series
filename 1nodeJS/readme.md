<!-- terminal vs browser -->
terminal me JS ke window ke kai sare features run nhi hote hai aur wahi browser me sab kuchh run hota hai. jo ui se related functionalities hoti hai wo terminal me nhi chalti hai, terminal me JS ki core functinalities hi chalti hai.

<!-- CJS vs ESM -->
CJS aur ESM dono hi JavaScript ke module system hain jo code ko organize aur manage karne mein madad karte hain. Yeh dono hi tareeke hain JavaScript code ko alag-alag files mein likhne aur phir unhe ek saath combine karne ke liye.

CJS (CommonJS):
CJS ek purana aur prachalit module system hai jo Node.js mein istemal hota hai.
Isme modules ko require aur module.exports keywords se import aur export kiya jata hai.
Example:
// Import module
const myModule = require('./myModule');

agar hum require me ./ lagate hai to js current directory me myModule ko dhundta hai aur agar hum ./ na lagaye sirf myModule likhe to js, nodeJs me jakr nodeJs ke sabhi modules ko check karega aur yadi js ko myModule naam ka module mil jata hai to myModule ki sabhi functionalities ko uss js file me add kr dega, jaise ki hum fs module, http module, os modeule ... ke sath krte hai.

// Export module
module.exports = myFunction;


ESM (ECMAScript Modules):
ESM ek naya standard hai jo ECMAScript 6 (ES6) ke saath aya.
Yeh modern browsers aur Node.js mein dono mein support karta hai.
Isme modules ko import aur export keywords se import aur export kiya jata hai.
Example:
// Import module
import myModule from './myModule';

// Export module
export default myFunction;


Mukhya Antar:
CJS ka upyog adhiktar server-side programming ke liye hota hai, jabki ESM modern web applications ke liye adhik upyogi hai.
ESM ki flexibility aur performance CJS se behtar hai, lekin purane environments mein CJS ka istemal hota hai.
ESM mein asynchronous module loading possible hai, jo ki CJS mein nahi hota.
ESM strict mode mein kaam karta hai, jabki CJS nahi.

Samanya Roop se:
Dono hi systems se code ko modular banaya ja sakta hai aur reusability badhayi ja sakti hai.
Dono ko alag-alag JavaScript files mein likha ja sakta hai aur phir unhe ek sath use kiya ja sakta hai.


<!-- Callback API vs Promises API -->
Callback API:
Callback API ka matlab hai ki jab aap koi kaam karte hain jo time lagata hai, jaise ki file read karna, tab aap ek special function ko bhi bhejte hain. Jab wo kaam pura ho jata hai, yani file read ho jati hai, to wo special function khud hi chal jati hai. Is special function ko hum callback function kehte hain, kyun ki ye "call" hoti hai jab kaam poora ho jata hai. Isse aapko wait nahi karna padta, aur aap dusre kaam kar sakte hain jab tak file read ho rahi hai.

Promises API:
Promises API ek tarah ka commitment hai ki aapka kaam hoga ya nahi hoga. Agar hoga, to aap usko then() aur catch() methods se handle kar sakte hain. Agar kaam poora hota hai, to then() method chalta hai, aur agar koi error hoti hai, to catch() method chalta hai. Yeh ek organized tareeka hai asynchronous kaam ko handle karne ka, aur code ko clean aur readable banata hai.

Callback API mein asynchronous code likhne ke liye callbacks ka istemal kiya jata hai, jabki Promises API mein asynchronous code ko handle karne ke liye Promises ka istemal hota hai.
Callback API mein error handling ko alag se karna hota hai callback function ke andar, jabki Promises API mein error handling ko then() aur catch() ke zariye manage kiya ja sakta hai.
Promises API code ko padhne mein aur samajhne mein aasan hota hai kyun ki yeh sequential code ko allow karta hai, jabki Callback API mein nested callbacks ka hona ek problem ho sakta hai (callback hell).
Promises API mein multiple asynchronous operations ko chain karne mein aasani hoti hai, jabki Callback API mein isme dikkat ho sakti hai.


<!-- fs.writeFile()   vs   fs.writeFileSync() -->
fs.writeFile() (Asynchronous):
fs.writeFile() ek asynchronous function hai, iska matlab hai ki yeh function background mein kaam karta hai aur control immediately return karta hai.
Is function mein aapko callback function provide karna padta hai jo file likhne ke baad chalega. Callback function ko do parameters milte hain: err (agar koi error hoti hai) aur data (agar operation successfully complete hota hai).
Iska file parameter hamesha ek callback fnc hota hai.

fs.writeFileSync() (Synchronous):
fs.writeFileSync() ek synchronous function hai, iska matlab hai ki yeh function kaam complete hone tak control ko rokta hai aur tab tak code execution nahi karta jab tak kaam pura na ho jaye.
Is function mein koi callback function nahi hoti hai. Agar koi error hoti hai, to wo exception ke roop mein throw hoti hai, aur aapko try-catch block ka istemal karna padta hai.

Mukhya Antar:
fs.writeFile() asynchronous hai aur callback function ka istemal karta hai error handling ke liye, jabki fs.writeFileSync() synchronous hai aur try-catch block ka istemal karta hai.
Agar aapko code ko block nahi karna chahte aur parallel tasks ko execute karna hai, to fs.writeFile() ka istemal karein. Wahi, agar aapko synchronous code ki zarurat hai ya fir aapko exceptions handle karne mein aasani chahiye, to fs.writeFileSync() ka istemal karein.


<!-- Blocking and Non-blocking operations -->
"==" iska mtlb thoda sa difference hai.
SynchronousJs == Blocking  ye to same hi hai jaisa abhi tak synchronous ke baare me padha hai.
AsynchrnousJs == Non-blocking =>
manlo hum 6 cheeje run kr rhe hai jisme 2, 3, 5, ye async hai aur baki sync hai to nodeJs 2, 3, 5 ko thread/worker ke paas pas bhejta hai ye thread pr jab tk poori tarah se run nhi ho jate hai ye doc pr nhi aate hai. ab abhi humne ye 6 cheejo ko run krne ka example liya hai humare pas aise hajaro, lakho async wale aa skte hai, aur humare pas by Default threads/workers ki sankhya 4 hoti hai aur ye computer system pr bhi depend krti hai ki maximum kitne thrads ho skte hai.
apne system ke threads ki sankhya janne ke liye =>
const os = require("os");
let totalNoOfCpus = os.cpus().length;
console.log("totalNoOfCore");
(mtlb asyncJs request ko block nhi krta hai.)
isliye hume humesha dhyan rakhna chahiye ki kaha sync aur kaha async ko use krna hai.
hum jadatr async ko hi use krte hai kyuki hum nhi chahte hai ki humara code kahi bhi ruke jiss bhi code ko time lena hai wo time le lekin baki code run hota rhe.

<!-- URL -->
Uniform Resource Locator
https://www.google.com/
https:// => protocol (set of ruls)
www.google.com => Domain-name(user friendly name of IP address of google server);
/ => path


https://www.youtube.com/result?search_query=js+tic+tac+toe+
/result => ka mtlb jo bhi humne search kiya vo iss route me me hai.
? => ka mtlb query hai.
search_query => ise bhi hum apne hisab se edit kr skte hai yt ne ise search_query naam diya hai.
= => iske baad jo bhi hoga vo search kiya gya hai.
+ => ye space hai. kyuki url me space nhi de skte hai, isliye space ko + se define kiya gya hai.
search_query=js+tic+tac+toe+   =>  query parameter
?search_query=js+tic+tac+toe+   =>   search

kisi bhi domain name ka IP address dekhne ke liye open terminal and type there => ping google.com


## npm understanding =>

`nodeJs core me jo installed aata hai wo kehlata hai node module.`
`aur jo hum npm se doenload krte hai wo hota hai package`

`kisi bhi npm package ke particular version ko download krne ke liye =>`
1. go to on that package...
2. go to version, ab aap jis version ko chahte hai uska number yaad rakhe aur terminal me jakr `npm i <package-name>@version-number` likh kr enter kr de, to aapka particular version install ho jayega.
3. ab aap ise dependencies pr jakr check bhi kr skte hai.
   
`node_modules`
1. jab bhi hum koi packge install krte hai to wo ek node_modules nam ka folder bana deta hai iss folder se humse koi lena-dena nhi hota hai ye folder node ke liye hota hai.
2. hum ek package install krte hai aur iski dependencies package.json me banti hai kai baar aisa hota hai ki dependencies ki bhi dependencies hoti hai mtb koi package hai aur wo package kisi aur package pr depend hai to wo packages bhi install ho jati hai. jinhe hum dependencies ki dependencies kahte hai.
   
`devdependencies`
1. Aise package jo sirf development mein kam aayege pr jab app ban jayega aur upload(deploy) ho jayega tab hum in packages ka use nhi kr rhe hoge. aise packeges ko devdependencies kahte hai.
2. install package => `npm install <package-name> --save-dev`
3. ye package.json file me devdependencies nam se ek field bana leti hai.

## package.json =>

`package.json ek Node.js project ke root directory mein rakha jata hai. Ye file aapke project ke dependencies, scripts, metadata jaise important information ko store karta hai. Yeh ek JSON (JavaScript Object Notation) file hai.`

`Yeh file kuch important information store karta hai:`

1. Project dependencies: package.json file mein aapke project ke liye zaroori dependencies ki list hoti hai. Ye dependencies Node.js package manager (npm) ya yarn ke through install kiye ja sakte hain.
2. Project metadata: Aapke project ki metadata jaise name, version, author, description, license, etc., package.json mein define ki jati hai.
3. Scripts: Aap apne project ke liye custom scripts define kar sakte hain jaise ki start, test, build, deploy etc. In scripts ko terminal mein npm run <script-name> command ke through execute kiya jata hai.
   
`package.json file ko banane ka basic format kuch is tarah ka hota hai:`

{
  "name": "project-name",
  "version": "1.0.0",
  "description": "Project description",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Author Name",
  "license": "ISC",
  "dependencies": {
    "dependency1": "^1.0.0",
    "dependency2": "^2.0.0"
  }
}

Yahan, name, version, description, main, scripts, author, license, aur dependencies project ke metadata aur dependencies ko define karte hain.

`package.json file ke benefits:`

1. Dependency Management: package.json file ke zariye aap project ke dependencies ko manage kar sakte hain. Ye dependencies aapke project ke proper functioning ke liye zaroori hote hain. Jab aap apne project ko kisi dusre system par move karte hain ya fir use deploy karte hain, tab ye dependencies install kiye jate hain. hum jab bhi koi package install krte hai to usme `node-module` naam ka ek folder bhi hota hai ye hamare nodeJs ke liye hota hai. iss code ka use sirf runtime pr hota hai, isliye jab bhi hum apne project ko kisi ko share krte hai tb iss `node-module` folder ko delete kr dete hai, aur project me kon-kon si dependencies use hui hai ye sb `package.json` file se pta chal jata hai. aur terminal pr sirf `npm i` likhte hi sari dependencies ek sath download ho jati hai.
   
   `type of dependencies =>`
   1. Production dependencies: Ye dependencies aapke project ke runtime mein use hoti hain.
   2. Version ranges: Dependency versions ko define karne ke liye aap specific versions, version ranges, ya latest versions ko bhi specify kar sakte hain.
   3. External packages: Ye external packages hote hain jo npm registry se install kiye ja sakte hain.

2. Metadata: Metadata ek piece of information hai jo kisi data ya object ke baare mein describe karta hai. Programming context mein, jab hum "metadata" ki baat karte hain, toh hum data ke baare mein additional information ke baare mein baat karte hain jo data ke saath store ki jati hai. Aapke project ki metadata ko store karne ke liye package.json file ka use hota hai. Yeh metadata project ke details ko describe karti hai.
   
    1. `Name`: Project ka naam.
    2. `Version`: Project ka current version.
    3. `Description`: Project ka brief description.
    4. `Main`: Entry point file (usually index.js/app.js).
        main field package.json file ka ek optional field hai jo specify karta hai ki aapka project ka main entry point kaun sa file hai. Jab aap apna module require karte hain, Node.js main field se specify kiye gaye file ko dhoondhta hai. example => manlo main field index.js file ko specify kar raha hai ki ye project ka main file hai. Jab koi module project(name field) ko require karta hai, Node.js index.js file ko load karega.

    5. `Scripts`: Custom scripts jo project ke different tasks ko automate karte hain (jaise start, test, build).
        scripts field package.json file ka ek important part hai jisme aap apne project ke liye custom scripts define kar sakte hain. Ye scripts aapko command line se run karne ki permission dete hain.

        {
          "name": "example-project",
          "version": "1.0.0",
          "description": "This is an example Node.js project.",
          "scripts": {
            "start": "node index.js",
            "test": "echo \"Error: no test specified\" && exit 1",
            "build": "npm run lint && npm run compile"
          }
        }

       ` Is example mein, teen alag-alag scripts define kiye gaye hain:`

        `start`: Ye script node index.js command ko run karta hai. Ye commonly project ko start karne ke liye use hota hai.
        `test`: Ye script echo \"Error: no test specified\" && exit 1 command ko run karta hai. Ye commonly test scripts ke liye use hota hai.
        `build`: Ye script doosre scripts (lint aur compile) ko run karne ke liye use hota hai. Aap dekh sakte hain ki ek script dusri scripts ko bhi run karne ki permission deta hai.

        In scripts ko aap terminal mein `npm run <script-name>` command ke through run kar sakte hain. Jaise ki:
            npm start
            npm test
            npm run build

        `npm start   aur   npm test
         Yeh special scripts hain jo bina run shabd ke bhi chal sakte hain. Iske peeche ki wajah ye hai ki start script ko Node.js runtime automatically run karta hai jab aap npm start command run karte hain, aur test script ko bhi testing framework automatically run karta hai jab aap npm test command run karte hain.
         Lekin dusre custom scripts ko run karne ke liye, aapko hamesha npm run command ka istemal karna padega: aap apni custom scripts ko bhi bana skte hai aur usey run krwane ke liye npm run <script-name> likhna padega.`

        package.json file ke scripts field mein aap apne project ke liye jitne bhi custom scripts chahein define kar sakte hain. Ye scripts aapke project ko manage karne aur automate karne mein kaafi madadgar hoti hain.


    6. `Author`: Project ka author ya authors ka naam.
    7. `License`: Project ka license (jaise MIT, ISC, Apache-2.0, etc.).
    8. `Keywords`: Project ke liye relevant keywords.
    9. `Repository`: Project ka version control repository ka URL.
   
3. Scripts: Aap apne project ke liye custom scripts define kar sakte hain jo ki kaafi useful hota hai development aur deployment ke dauran.
   
4. Consistency: Ye file aapke project ke dependencies aur settings ko ek consistent aur easily maintainable format mein rakhta hai.
   

## npm commands =>
1. `npm init`
   package.json file ko initialize karne ke liye use hota hai. Ye command aapse kuch questions puchta hai jaise project name, version, description, entry point file, etc. Aur phir package.json file create karta hai. 
2. `npm install`  ya  `npm i`
    Project dependencies ko install karne ke liye use hota hai.
3. `npm install <package-name>`  ya  `npm i <package-name>`
    Specific package ko install karne ke liye use hota hai.
4. `npm uninstall <package-name>`
    Package ko uninstall karta hai.
5. `npm i -y` ya `npm install -y` 
   iska use package.json file ke dependencies ko bina kisi prompt ke install karne ke liye hota hai. -y flag yani ki --yes flag ka short form hai jo default options ko accept kar leta hai. Iska matlab hai ki jab aap npm i -y ya npm install -y command run karte hain, toh npm prompt ko ignore karta hai aur automatically default options ko accept karke dependencies ko install kar deta hai.

   Yeh kaafi useful hota hai jab aap automated scripts mein npm install command ko include karte hain jisme kisi manual input ki zarurat nahi hoti hai. Is tarah ke scripts ko run karte samay, -y flag use karke aap manual input ki zarurat nahi padti hai aur process bina rukawat ke chalta rehta hai.

   `npm i -y aur npm i commands mein ek chhota antar hai:`
   -y flag ke saath npm i command ka use karte samay, npm dependencies ko install karta hai bina kisi user prompt ke. Yani ki, jab aap npm i -y likhte hain, toh npm prompt ko ignore karta hai aur direct dependencies ko install kar deta hai, default options ko accept karte hue.

   Jab aap sirf npm i command ka use karte hain, toh npm aapse dependencies ko install karne se pehle kuch questions puchta hai. Isme aapko yeh puchha jata hai ki aap dependencies ko save karna chahte hain ya nahi, aur aapka answer depend karta hai ki aap --save flag ya --save-dev flag ke saath command likhte hain ya nahi.

   