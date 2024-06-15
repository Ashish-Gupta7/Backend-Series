## `Some inportant explainations` =>

`"_id": "663a6a176571f5559b993136",`
_id field ko create karne ke liye MongoDB ObjectId ka use karta hai. ObjectId unique identifier ko represent karta hai jo 12-byte ki hexadecimal string hoti hai. ObjectId 12 bytes se bana hota hai, jismein:

4 bytes ka timestamp hota hai, jo document ko create karne ki date and time ko represent karta hai.
5 bytes ka random value hota hai, jo machine identifier, process identifier, aur random counter ka combination hota hai.
3 bytes ka incrementing counter hota hai, jo ensure karta hai ki har ObjectId unique hota hai.

Lekin yahan, _id field ka value "663a6a176571f5559b993136" hai, jo ek hexadecimal string hai, lekin iska size 12 bytes se jyada hai. Iska reason yeh hai ki MongoDB documents ko JSON format mein display karte waqt _id field ka value hexadecimal string ke form mein hota hai, jo original ObjectId ki string representation hoti hai.

`"__v": 0`
__v field Mongoose ka internal versioning field hota hai. Ye field version control ke liye use hota hai. Mongoose har document ke sath ek version number maintain karta hai. Jab bhi aap kisi document ko update karte hain, Mongoose document ka version number (__v) increment karta hai. Ye field MongoDB mein nahi hota, ye Mongoose ka internal field hai. Iska upyog version control ke liye kiya jata hai.


`Schema code explaination`
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 20,
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        maxlength: 20
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
        required: true
    }
});

1.  `type: String`,          -->     <!-- Data type of the field is String. -->
2.  `required: true`,          -->     <!--  The field is required and must be present. -->
3.  `unique: true`,          -->     <!-- The value of the field must be unique across all documents. -->
4.  `trim: true`,          -->     <!-- Whitespace will be trimmed from the beginning and end of the string. -->
5.  `minlength: 3`,          -->     <!-- The minimum length of the string is 3 characters. -->
6.  `maxlength: 20`,          -->     <!-- The maximum length of the string is 20 characters. -->
7.  `min: 1`,          -->     <!-- The minimum value of the number is 1. -->
8.  `max: 100`,          -->     <!-- The maximum value of the number is 100. -->
9.  `enum: ["admin", "user"]`,          -->     <!-- enum property ek array of valid values ke sath istemal ki jati hai. Yeh property ek value ko specific set of predefined values ke sath match karne ke liye istemal hoti hai. Agar value enum property ke andar define kiye gaye values mein se koi bhi nahi hai, to Mongoose validation error generate karta hai. -->
10. `default: "user"`,          -->    <!-- The default value of the field is "user". --> 