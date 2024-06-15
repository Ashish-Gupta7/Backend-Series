# MVC pattern folder structure:
```
MVCpattern/
├── config/
├── controllers/
├── middlewares/
├── models/
├── node_modules/
│   └── ...
├── public/
│   ├── fonts/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
├── routes/
│   ├── index.js
│   ├── users.js
│   └── open_routes.js
├── utils/
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   └── todo.ejs
├── .env
├── .env.example
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
└── README.md
```

## config


## controllers


## middlewares


## models


## node_modules


## public


## routes


## utils


## views
- Views folder mein templates hoti hain jo user interface ko render karti hain.
- Isme ejs files ko rakha jata hai aur iska setup app.js me kiya jata hai.
- Example => use partials header and footer code.
`index.ejs`
```
<%- include("./partials/header.ejs") %>

<div class="hero_section">

</div>

<%- include("./partials/footer.ejs") %>
```

- Iss hero_section me index.ejs ka main code likha jayega ya sara kaam hoga.

### partials
- "partials" folder me particularly jab aapko kuch reusable components banane hote hain jo multiple pages me repeat hote hain, jaise header, footer, navigation menu, etc. mtlb ye kah skte hai ki ye ek specific portion of a webpage ko represent karte hain jo multiple pages me repeat hota hai.
- Example
  1. header.ejs: Ye file typically webpage ka header section represent karta hai, jisme navigation menu, site logo, aur kuch cases me user profile information/links/cdn's bhi shamil hota hai.
  2. footer.ejs: Ye file webpage ke footer section ko represent karta hai, jisme copyright information, contact details, aur kuch cases me useful links/cdn's bhi shamil hote hain.

`header.ejs`
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="">
</head>
<body>
    <header></header>
```

`footer.ejs`
```
    <footer></footer>

    <script src=""></script>
</body>
</html>
```

## .env
Ye file sensitive information jaise ki API keys, database passwords, aur other environment-specific configurations ko store karne ke liye hoti hai. Ye file typically plain text format me hoti hai aur application ke environment variables ko define karti hai. Is file ko version control system se ignore kiya jata hai taki sensitive information accidentally public na ho jaaye. Developers local development environment me is file me apne specific configurations ko set kar sakte hain.

## .env.example
Ye file .env file ke template ke roop me use hoti hai. Isme .env file me required environment variables ka list hota hai, lekin actual values nahi hote. Developers ko typically is file se .env file create karne ki guidance milti hai. Is file ko version control system me include kiya jata hai taki new developers ko reference mil sake ki unhe kis tarah ka .env file create karna chahiye.

## .gitignore
Ye file version control system (jaise ki Git) ko batata hai ki kis files ya directories ko ignore karna hai. Typically, sensitive information wali files (jaise ki .env) aur temporary files ya directories (jaise ki node_modules) ko ignore kiya jata hai. Is tarah se, ye file developer ko control deti hai ki konsa sensitive information public repository me push nahi hona chahiye aur unnecessary files ko repository me add nahi kiya jaye.


## app.js


## package-lock.json
package-lock.json file npm (Node Package Manager) ke sath aati hai aur ye dependencies ke exact version ko track karta hai. Is file ka use dependencies ko freeze karne aur consistent environment maintain karne ke liye hota hai. Ye file assure karta hai ki har jagah same version ka code run kare.

## package.json
- go to nodejs/readme.md

## README.md

## important
### .gitkeep
.gitkeep is a convention used to keep empty directories in Git. By default, Git does not track empty directories, only files. Placing a .gitkeep file in a directory tells Git to track that directory, even if it's empty.
.gitkeep file ke ander kuchh nhi likhne ki jarurat nhi hoti hai.
aisi directory ya folder jo khali ho usme .gitkeep file banane se git uss khali folder ko bhi track krne lagta hai.
iske liye ek extension bhi hai jisse aapko har ek khali directory ko track karane ke liye uss pr jakr .gitkeep file nhi banani padegi.
extension name --> gkeep
jab aap gkeep install kr lege to sabhi empty folders me .gitkeep ko add krne ke liye --> ctrl + shift + p
search --> add git keep, then enter, aur enter krte hi .gitkeep add ho jayega.

`Is pattern ko follow karne se application well-organized, maintainable, aur scalable hoti hai.`