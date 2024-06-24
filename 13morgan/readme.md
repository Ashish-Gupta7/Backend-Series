# Morgan
[morgan](https://www.npmjs.com/package/morgan)


Morgan ek popular middleware hai jo Node.js aur Express.js applications me logging ke liye use hota hai. Yeh developer ko HTTP request aur response ke logs maintain karne me madad karta hai. Yahaan kuch reasons hain ki developers Morgan ko kyu use karte hain:

- **HTTP Request Logging:** Morgan se aapko har HTTP request ke details milte hain, jaise ki method (GET, POST, etc.), URL, status code, response time, etc.

- **Development and Debugging:** Development aur debugging ke time pe logs bahut helpful hote hain. Aap request aur response ke information dekh kar easily issues diagnose kar sakte hain.

- **Customizable Formats:** Morgan me aap apne logging ke formats customize kar sakte hain. Yeh different predefined formats ke sath aata hai, jaise 'combined', 'common', 'dev', etc. Aap apne custom formats bhi define kar sakte hain.

- **Integration with Log Management Tools:** Morgan ke logs ko aap different log management tools, jaise ki Winston, Bunyan, etc. ke sath integrate kar sakte hain.

- **Minimal Configuration:** Morgan ko integrate karna aur use karna bahut easy hai aur yeh minimal configuration ke sath aata hai.

## Example
```
const express = require('express');
const morgan = require('morgan');

const app = express();

// Use morgan middleware with 'dev' format for logging
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```