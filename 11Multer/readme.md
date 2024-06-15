# Multer -->  Read NPM 

Multer ek middleware hai jo `multipart/form-data` ko handle karne ke liye use hota hai, jo HTML forms me file uploads ke liye commonly use hota hai. Yeh Express.js framework ke sath commonly use hota hai.

## Multer ka kaam
Multer ka main kaam file uploads ko manage karna hai. Jab user kisi form se file upload karta hai, Multer us file ko handle karta hai aur aapke defined storage me save karta hai. Iske sath-sath yeh form data ko bhi handle karta hai.

## Multer kaam kaise karta hai?
1. `Storage Engine:` Multer ko files ko kaha store karna hai, yeh define karne ke liye storage engine use hota hai. 
   Ye aapko do file store krne ke liye do tarah ki memory deta hai -->
   - Disk Memory --> file ko server pr upload krna.
   - Memory Storage --> file ko database me upload krna.

2. `File Filtering:` Multer me aap filter laga sakte hain taaki sirf specific type ki files accept ki jaayen. Jaise, sirf images ko allow karna aur baaki files ko reject karna.

3. `File Naming:` Aap customize kar sakte hain ki uploaded files ka naam kya hoga. Multer aapko flexibility deta hai ki aap unique filenames generate kar saken.


# config
isme hum aisi files ko rakhte hai jo kuchh alag hi kaam perrform krke deti hai.