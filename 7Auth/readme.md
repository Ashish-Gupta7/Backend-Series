# Authentication and Autherization
`Authentication` ka matlab hai kisi user ko verify karna, yani kisi bhi user ka identity check karna, jaise username aur password ka istemal karke. Jab aap kisi website ya application mein login karte hain, tab aapko authenticate kiya jata hai, yani aap apni identity prove karte hain.

`Authorization` ka matlab hai ye ki kya ek authenticated user ko kya permission milti hai. Matlab, ek baar aapne apni identity verify kar di, toh authorization decide karega ki aap kya kya kar sakte hain. Jaise ki kya aap sirf information dekh sakte hain ya fir kuch change bhi kar sakte hain.

mtlb, Authentication ka kaam hai user ko verify karna aur authorization ka kaam hai decide karna ki user ko kya kya karne ki permission hai.


## Problem
kisi bhi kaam ko karne ke liye hume har baar login krna padta hai, jaise ki profile dekhna hai to login karo like krna hai to login karo.
mtlb, user jab bhi koi kaam krne ke liye jata hai to server usey har baar bolta hai ki phlr aap login karo.
isi samasya se bachne ke liye `cookies aur session` ki jarurat padti hai.

`browser level pr`
cookies ka istemal hota hai taaki website aapko recognize kar sake jab aap dusri pages par move karte hain. Cookies aapki identity ko track karte hain, jisse aapko har baar dubara login karne ki zarurat nahi padti.

`server level pr ->`
Session ki jarurat authentication aur authorization process ke liye padti hai kyunki ye server ko yaad dilati hai ki kaunsa user currently active hai aur uska kya access level hai.

Jab user login karta hai, server ek unique session ID generate karta hai jo user ko identify karta hai. Jab user dusri pages par move karta hai ya koi action karta hai, ye session ID server ke saath bheja jata hai, jisse server ko yaad rahe ki kaunsa user active hai aur uska authorization level kya hai.

Session expire hone ke baad, user ko phir se login karna padta hai, jisse security maintain ki ja sake aur unauthorized access se bacha ja sake.

`imp`
jab bhi user login krta hai to server se response ke roop me uss user ka login page frontend pr show ho jata hai, aur yahi hum jab response ke roop me login page bheja jata hai uske sath hi ek ajeeb si string browser pr bhej dete hai aur iss string ko bhejne ke liye hi cookie ka use kiya jata hai aur jo string browser pr bheji jati hai usi ki madad se baar baar user ko login nhi krna padta hai.

## aage auth pr kaam krne se phle aapko ye aana jaruri hai
1. cookie-parser --> fullstack/javascript
2. bcrypt
3. jwt


## Bcrypt
https://www.npmjs.com/package/bcrypt
bcrypt ek password hashing library hai jo security ke liye use hota hai, particularly ye user ke password ko secure rakhne ke liye kuchh ajeeb si string ke roop me DB me store kr deta hai. Ye library password ko hash karta hai, jo ki unko secure banata hai, aur brute force attacks aur rainbow table attacks ke khilaf rakhta hai.

`Yahan bcrypt kaam kaise karta hai:`

1. `Password Hashing:`
bcrypt password ko hash karta hai, jo ki ek one-way function hota hai. Iska matlab hai ki ek baar password ko hash kar diya gaya, usse phir se original password ko retrieve karna mushkil hota hai.
Hashed password stored database mein save hota hai, original password save nahi hota.

2. `Salted Hashes:` 
Salted hashes ek aur layer of security add karta hai password hashing mein. Jab password ko hash karte waqt, ek random string ko add kiya jata hai jo salt ke naam se jaana jata hai. Salt ek unique value hota hai jo har password ke saath combine kiya jata hai. Ye salt passwords ko aur zyada secure banata hai kyun ki har password ka hash alag hota hai, jisse attackers ko pre-computed hash tables ka istemal karke common passwords ke liye attack karna mushkil hota hai.

3. `Cost factor:` -> saltRounds
Cost factor bcrypt mein hashing ke liye istemal kiya jane wala parameter hai jo hashing iterations ko define karta hai. Jitna zyada cost factor, utni zyada iterations hongi, aur utna zyada time lagega password ko hash karne mein. Zyada iterations ka matlab hai ki attacker ko brute force attack karne mein zyada time lagega, jisse security badhti hai. Cost factor ko badhane se security improve hoti hai lekin hashing time bhi badh jata hai. Aap cost factor ko select karte waqt security aur performance ke beech balance maintain karte hain. Cost factor hashed password ya salt ki length ko define nahi karta hai, balki hashing process ki complexity ko define karta hai.
overall, Jitna zyada cost factor, utni zyada security, lekin utna zyada CPU resources bhi istemal hoga.
total number of iterations for hashing = 2^costFactor
`example:` costFactor ko 12 set kiya gaya hai, iska matlab hai ki 2^12 = 4096 iterations kiya jayega password ko hash karne ke liye.

`for example:` maine kisi ek app me ek password banaya ashish iske liye salt aur hash dono banega ab jab mai dobara se kisi aur app me same password ashish banata hu to kya pichle wale password aur abhi wale password dono ka salt aur hash same hoga?
`ans:` Nahi, har app ke liye salt aur hash alag hoga. Jab aap kisi naye app mein ashish jaise password ka istemal karte hain, to naya salt generate kiya jayega aur fir us salt ke saath password ka hash banaya jayega. dono apps ke liye alag salt aur alag hash bana hai. Isse, agar kisi ek app ka data breach ho bhi jata hai, to dusre app ke passwords affected nahi honge. Aur agar aap dono apps mein same password use karte hain, to dono passwords ka hash bhi alag hoga. 
Aur yadi ek hi app me do different users ne same password rakha ho tab => Jab do alag users ek hi app mein same password ka istemal karte hain, to unke liye bhi alag salt aur hash generate kiya jata hai. Har user ke liye alag salt aur alag hash hota hai, jisse unke passwords ka hash alag hota hai.

4. `SHA256`
SHA-256 (Secure Hash Algorithm 256-bit) ek cryptographic hash function hai jo data ko secure tareeke se hash karne ke liye istemal hoti hai. Ye 256-bit (32-byte) ka hash value generate karti hai. SHA-256 ek member hai SHA-2 (Secure Hash Algorithm 2) family ka, jo National Security Agency (NSA) ke dwara design ki gayi hai.
SHA-256 algorithm ek one-way function hai, matlab ek baar data ko hash kar diya gaya, usse phir se original data ko retrieve karna mushkil hota hai. Ye algorithm collision-resistant hai, matlab do alag-alag inputs ke liye same hash value generate karna almost impossible hai.
bcrypt password security ko enhance karne ke liye SHA-256 ya similar hashing algorithms ka istemal karta hai, lekin additional security measures jaise ki salt aur cost factor ka istemal karke password ko aur zyada secure banata hai.

5. `Hash Info:`
- $[algorithm]$[cost]$[salt][hash]

    1. algorithm ->  "$2a$" or "$2b$" BCrypt algorithm ko indicate karta hai.
    2. cost ->  Cost-factor "n" ko darshata hai, jo hashing iterations ko define karta hai. "2^n" iterations ka use hota hai.
    3. salt ->  16-byte (128-bit) salt hota hai, jo base64 encoding mein 22 characters ka hota hai.
    4. hash ->  24-byte (192-bit) hash hota hai, jo base64 encoding mein 31 characters ka hota hai.

Yeh saare parameters milkar resultant hash ko 60 characters ka banate hain.
BCrypt hashing algorithm ke resultant hash ka length fix nahi hota hai. Iska length 60 characters ke aas-pass hota hai, lekin exact length har hash ke liye alag ho sakta hai.

- `Example:`

```
    $2b$10$nOUIs5kJ7naTuTFkBy1veuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa
     |  |  |                     |
     |  |  |                     hash-value = K0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa
     |  |  |
     |  |  salt = nOUIs5kJ7naTuTFkBy1veu
     |  |
     |  cost-factor => 10 = 2^10 rounds
     |
     hash-algorithm identifier => 2b = BCrypt 
```

### Use bcrypt to `encryption`

1. `Technique 1 (generate a salt and hash on separate function calls):` isme salt aur hash dono ko banana padega.
```
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});
```

```
app.get("/", (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash("myPassword", salt, (err, hash) => {
            console.log(salt);
            console.log(hash);
            res.send("success");
        })
    })
});
```
aap jitni baar page refresh karoge to myPassword chahe same rhe salt aur hash hamesha naye hi generate hoge.


2. `Technique 2 (auto-gen a salt and hash):` isme salt automatically generate hoga. byDefault saltRounds 10. aur baki sari cheeje same hoti hai.
```
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});
```
```Note that both techniques achieve the same end-result.```

### Use bcrypt for password dycryption
actual me password dycrypt nhi hota hai hum user dwara enter kiye gaye password ko database me save hashed password se compare krke dekhte hai result true aata hai ya false.

```
let userEnteredPassword = "myPassword";
let hashedPassword = "$2b$10$l8sXt.LrvogO8uGHf9jz3eUvo2x41CrpTq/UWkWcD0HrhFCbhu1Pu";

bcrypt.compare(userEnteredPassword, hashedPassword, (err, result) => {
    console.log(result);
});

```
yadi console pr true aata hai to user ne sahi password enter kiya aur yadi false aata hai to user ne galat password enter kiya hai.


## JWT(jsonwebtoken)
- website -> https://jwt.io/
- github -> https://github.com/auth0/node-jsonwebtoken
- npm -> https://www.npmjs.com/package/jsonwebtoken


JWT ka matlab hai "JSON Web Token". Ye ek open standard (RFC 7519) hai jo data ko secure tareeke se exchange karne ke liye istemal hota hai. JWT JSON format mein hota hai, aur typically user authentication aur authorization mein istemal hota hai.

`JWT mein teen parts hote hain: Header, Payload, aur Signature`

1. Header: Header JSON format mein hota hai aur typically do parts se milta hai:
- Typ (Type): Token type ko darshata hai. JWT ke liye, header ka typ parameter "JWT" hota hai.
- Alg (Algorithm): Signature algorithm ko darshata hai. Isme typically HMAC SHA256 (HS256) ya RSA (RS256) ka istemal hota hai.
  
2. Payload: Payload mein actual data hota hai, jaise ki user ka ID, roles, permissions, ya koi aur custom data. Payload bhi JSON format mein hota hai.

3. Signature: Signature, Header aur Payload ko combine karke ek unique hash generate karta hai jo token ko validate karne ke liye istemal hota hai. Signature ko generate karne ke liye, secret key ka istemal hota hai jo server aur client ke beech share kiya jata hai.

`Ek JWT typically kuch is tarah ka hota hai:`
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
  - Yahan . (dot) se alag hue teen parts hain: 
  - Header: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  - Payload: eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
  - Signature: SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

isme hume sirf payload se mtlb hota hai.
ye sab aap jwt ki website me dekh skte hai.

### use cookie in jwt authentication
Jab bhi user login krta hai to server uss user ke browser me ek cookie set kr deta hai. ye cookie ke roop me jo string save ki jati hai ise hum jwt ki madad se banate hai. ab jab bhi user koi kaam krta hai to ye cookie uss user ke req ke sath chipak kr server ke paas jati hai aur user isi ki madad se baar baar login nhi krna padta hai.

hum payload me user ki pahchan krne ke liye jadatar email ko save kiya jata hai kyuki email unique hota hai. hum chahe to username ko bhi unique banakr ye kaam kr skte hai.

#### send jwt token server to browser
```
app.get("/", (req, res) => {
    let token = jwt.sign({email: "test@example.com"}, "secret");
    // email test@example.com ko payload mein save kiya jata hai aur uss payload ko secret key "secret" ka istemal karke sign kiya jata hai.
    // console.log(token);
    res.cookie("token", token);
    // phla string "token" naam se aur jwt se bana token value ke roop me set ho rha hai.
    res.send("done");
});
```
`Yaha hum jo secret likhte hai wo simple letters me nhi likhte hai kyuki ye secret ki madad se hi user ka payload banta hai jise kaafi jada secure rakha jata hai.`
`iss secret key "secret" ke basis par password ko hack nahi kiya ja sakta hai.`

#### verifyToken
```
app.get("/verify", (req, res) => {
    console.log(req.cookies.token);
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
    // yaha iat ka mtlb kis time pr cookie ko set kiye gya tha.
    res.send("done");
});
```

## steps for create a user account, logout and login
1. create a database.
2. create a userSchema.
3. create a model.
4. exports the userSchema and model.
5. create app.js file and require userSchema, express, bcrypt and all important packages.
6. create a user.
7. when you are creating a new user at that time convert the user's password into hashed password using bcrypt genSalt.
8. use jwt.sign to send the cookie to the browser.
9. render your login page.
10. create post request for login page.
11. use bcrypt compare for user's login.
12. when you are coparing password at that time set cookie for next time auto login.
13. create isLoggedIn fnc for the token is exists or not and verify the token.
14. create get request for profile route and use isLoggedIn middelware.
15. create loguot route. 