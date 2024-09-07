# OMEGLE CLONE

## day-1

1. views folder, ejs files.
2. tailwindcss setup -> Tailwind CLI
   - tailwind CLI ka use hum isliye kr rhe hain kyuki cdn use krne se tailwind ka poora code aa jata hai aur CLI use krne se hum tailwind ke sirf utne hi code ko use krte hain jitne ki hume jarurat hoti hai.

- in tailwind CLI tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- in content property

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "./public/javascripts/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- hum jo tailwind ka code likhne wale hai wo views me ejs file me likhege isliye humari src views aur language ejs hai. aur isi tarah "./public/javascripts" folder me jo js file hai usme jo bhi tailwind code hai uske liye bhi yaha content ko bataya gya hai.

- in './public/stylesheets/tailwind.css'

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- in './package.json' using tailwind CLI Terminal

```
// in tailwind CLI Terminal
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

// in my code
"build:css": "npx tailwindcss -i ./public/stylesheets/tailwind.css -o ./public/stylesheets/style.css --watch"
```

> (1.) "build:css": yaha hum kuchh bhi likh skte hai. pr generally aisa hi likha jata hai.
> (2.) npx tailwindcss: Yeh command tailwindcss tool ko run karta hai without installing it globally. npx ensures ke latest version use ho.
> (3.) -i ./public/stylesheets/tailwind.css: Yeh input file specify karta hai. Iska matlab hai ki jo Tailwind CSS ka main file hai, woh ./public/stylesheets/tailwind.css location par hai. Yaha par aap apne custom styles ya Tailwind ke directives ko include karenge.
> (4.) -o ./public/stylesheets/style.css: Yeh output file specify karta hai. Tailwind CSS process hone ke baad final CSS ko ./public/stylesheets/style.css file mein save karega.
> (5.) --watch: Yeh flag command ko continuous mode mein run karta hai. Matlab, jab bhi tailwind.css ya related files mein koi changes honge, command automatically CSS ko re-build karega.

- Short mein, yeh command aapki Tailwind CSS ko process karke ek final CSS file banata hai aur changes detect karta hai taaki aapko manual build baar-baar na karna pade.

- in terminal => npm run build:css => ab jab tk aap kaam kr rhe ho tb tk ke liye ise close naa kare express ke server ko run krne ke liye ek dusra terminal open kr le.

## day-2

1. socket.io connection setup.
2. create waitingUser, room.
3. disconnect the room and user.
4. messages

## day-3 -> WebRTC start.

1. localStream for local user.
2. initiateOffer for remote user and share SDP.
3. createPeerConnection
4. handleSignalingMessage
5. handleOffer & handleAnswer
6. calling functionalities
