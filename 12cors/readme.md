# CORS - Cross-Origin Resource Sharing
Browsers me ek security feature hota hai jiske tahat aap kisi aur web domain ka data directly nhi manga sakte ya show nhi kar sakte hain. Yeh feature aapko rokta hai, par agar aap chahte hain ki browser allow kare data ko laane ke liye, toh aapko uss website ke server ke through **CORS** enable karna padega.

**For Example:** Hum sheryians.com par hain aur kisi aur website ya domain ka data is website me lana chahte hain. Normally, browser aisa karne se rokta hai. Lekin, agar sheryians.com ke server side par **CORS** ko enable kiya gaya hoga, toh hum aisa kar sakte hain.

## Simple Usage

### Enable All CORS Requests

```
var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
console.log('CORS-enabled web server listening on port 80')
})
```

### Enable CORS for a Single Route

```
var express = require('express')
var cors = require('cors')
var app = express()

app.get('/products/:id', cors(), function (req, res, next) {
res.json({msg: 'This is CORS-enabled for a Single Route'})
})

app.listen(80, function () {
console.log('CORS-enabled web server listening on port 80')
})
```