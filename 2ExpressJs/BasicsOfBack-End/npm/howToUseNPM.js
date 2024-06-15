// jab bhi koi naya project banate hai aur usme npm ki jarurat hoti hai to uss file ke liye jo configuration file(json se bani hoti hai config file) ki jarurat hoti hai usey hum manually bhi bana skte hai pr error ke chances hote hai isliye hum "npm init" ko terminal pr enter krte hai aur ye hamare liye configuration file bana deta hai, jo ki "package.json" hota hai.

// install =>        npm i fileName      ya phir         npm install fileName        =>  ise terminal me likhna hota h.
// multiple file install => npm i fileName fileName fileName ...
// uninstall =>      npm uninstall <package-name>
// usage =>    iske liye npm me jakr file ko search karo aur uska usage padho.
// npm ke kisi bhi file ko install krne pr uske sath kuchh files or folders bhi install hote hai jo ki node ke liye hote hai.
// jab bhi hum koi npm pachage install krte hai to =>
// (1.) node_modules naam ka folder banta hai isme uss pachage se related poora code hota hai.
// (2.) pachage.json file banti hai isme json format me kucch keys/values likhi hoti hai, lekin isme ek khas key dependecies naam ki hoti hai isme url hota hai aur uss url ki value usi npm package ka version hota hai. yadi galti se node_modules delete ho jata hai to terminal me node install likhne pr ye dependencies ki wajah se hi dobara se node_modeles folder bn jata hai.
// (3.) packege-lock.json file bhi banti hai.




// Example 1 =>  one-liner-joke
// in terminal => npm i one-liner-joke

// var oneLinerJoke = require('one-liner-joke');           //  oneLinerJoke variable me one-liner-joke ka poora data aa gya hai ya phir import kiya ja chuka hai.
// var getRandomJoke = oneLinerJoke.getRandomJoke();       //  getRandomJoke variable me getRandomJoke method ki madad se randomaly jokes aayenge.
// console.log(getRandomJoke)                              //  aap yadi npm se install kiye gye files ko delete kr dete ho tb ye sahi se work nhi krta hai.



// Example 2 =>   image-to-base64
// in terminal  => npm i image-to-base64

// const imageToBase64 = require('image-to-base64');     // Yeh ek module hai jo image ko base64 mein convert karta hai

// imageToBase64("https://cdn.britannica.com/52/252752-050-2E120356/Cricketer-Rohit-Sharma-2023.jpg")                     // yeh woh image ka path hai jise aap convert karna chahte hain
//     .then(
//         (response) => {
//             console.log(response);                    // Yeh line base64 encoded image ko print karta hai
//         }
//     )
//     .catch(
//         (error) => {
//             console.log(error);                       // Yeh line agar koi error aata hai toh woh print karta hai
//         }
//     )






// Example 3 =>  text-to-emoji-converter
// install =>    npm i text-to-emoji-converter

// const { textToEmoji } = require('emoji-converter');
// console.log(textToEmoji('happy'));




// Example 4 =>   figlet
// install =>     npm i figlet

// var figlet = require("figlet");                           // Figlet module ko import karte hain

// figlet("Hello World!!", function (err, data) {            // "Hello World!!" text ko figlet se convert karke print karte hain
//   if (err) {                                              // Agar koi error aati hai to usko handle karte hain
//     console.log("Kuch gadbad ho gayi...");                // Error message ko console par print karte hain
//     console.dir(err);                                     // Error ki details ko console par print karte hain
//     return;                                               // Function se bahar nikal jate hain
//   }
//   console.log(data);                                      // Convert kiya gaya text console par print karte hain
// });




// Example 5 =>   catme
// install =>     npm i cat-me
// var CatMe = require('cat-me');
// console.log(CatMe());