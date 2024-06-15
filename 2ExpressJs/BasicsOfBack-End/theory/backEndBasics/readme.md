<!-- Shortcuts -->
(1.) ctrl + `          =>             open to terminal.
(2.) terminal me node ke likhne ke baad file ya folder ke 2 3 letters likhne ke baad tab click krne pr poora file ya folder name automatic likh jata hai. hamesha node ke baad poora path likhe.
(3.)  

<!-- Back-end -->
Websites ko dynamic banane me madad krta hai. dynamic ka mtlb frontend ki madad se jo data website me likh diya gya hai hamesha wahi data na dikhe wo har user ke liye alag alag ho changable ho.

<!-- Back-end Developer -->
Backend developer wo banda hai jo server aur database banata program krta hai.

<!-- NodeJs -->
Ryan Dahl ne Node.js ko 2009 mein launch kiya tha. 
NodeJs hai khoob saara c++ ka code jo chrome browser ke v8 engine ka code hai. isi code ki madad se server ko banaya ja skta hai. lekin ye code to c++ me likha gya hai aur websites ko ham js ki madad se banate hai aur js ki madad se ham server nhi bana skte hai, isi samasya ki wajah se nodeJs ko banaya gya hai.
ye jo c++ ka code hai ise ek js code se wrap kr diya gya aur isi se jo poora code bana usey hi NodeJs kahte hai.
Ham jb bhi koi website banate hai to wo c++ ke uper wrap kiye gye js wale code ke pas jata hai aur js c++ se kuchh communicate krta hai, tab jakr server ya database js  ki madad se banta hai.
aisa kam keval tabhi tak hota rahega jab tak ki nodeJs{js + c++(v8 engine code)} chaalu hai aur ise hi nodeJs runtime environment kahte hai.
ye c++ ka code ek open-source code hai jise koi bhi download kr skta hai padh skta hai apne liye use kr skta h.

<!-- chatGPT nodeJs Explaination -->
Aapka vistaar se diya gaya vichar sahi hai, lekin kuch mamlaat ko sahi nahi samjha gaya hai.

Node.js ke core, yaani ki V8 JavaScript engine, C++ mein likha gaya hai, lekin Node.js ke sath ye C++ code sirf Node.js runtime environment ko build karne ke liye hai. Ye V8 engine JavaScript code ko execute karta hai.

Node.js ka uddeshya server-side programming ke liye JavaScript ka upayog karne mein hai. Ye server-side JavaScript runtime environment provide karta hai jisse developers apne server-side logic ko JavaScript mein likh sakte hain. Iska mool uddeshya yeh tha ki ek hi bhasha (JavaScript) se client-side aur server-side development dono ho sake.

Node.js ke codebase mein C++ ka upyog us V8 engine ko integrate karne ke liye kiya gaya hai, jo ki Google Chrome browser mein bhi istemal hota hai. V8 engine JavaScript code ko compile karta hai aur machine code mein badal deta hai jo CPU dwara samjha ja sake.

Jab aap Node.js ka upyog karte hain, to aap JavaScript mein server-side logic likhte hain. Ye JavaScript code runtime environment ke andar C++ code ke saath interact karta hai. Ye C++ code Node.js runtime ko manage karta hai aur operating system ke saath interact karke server-side operations ko execute karta hai.

Toh, aapke diye gaye vichar mein kuch galat nahi hai, lekin ye C++ code sirf Node.js ka internal implementation hai, jo ki users ko Node.js runtime environment provide karne ke liye hota hai. Node.js ka use karke server-side programming karna asaan aur flexible ban jata hai, lekin ismein directly C++ ka upyog nahi hota.


<!-- NPM -->
Ye open-source hai aur Node.js runtime environment ke saath aata hai by default. npm ka istemal Node.js applications ke dependencies ko manage karne ke liye hota hai.
Jaise ham koi website bana rahe hai usme mujhe text to voice converter ke code ki jarurat hai to mai npm ke pas jauga search karuga text to voice converter agar aisa kuchh npm me hai to vo hame de dega aur simply ham us code ka use kr skte hai.
npm Node.js ecosystem ka ek important hissa hai aur developers ko Node.js applications ke liye libraries aur tools ka aasani se istemal karne mein madad karta hai.
ye pahle nodeJs ke liye banaya gya tha isliye iska full form "Node Package Manager" tha lekin ab iska koi full form nhi hai.

