# MERN Stack AI Chatbot

This is an AI Chatbot application, inspired by ChatGPT, by using MERN Stack and
OpenAI

It's a customized chatbot where each message of the user is stored in DB and can
be retrieved and deleted.

It's a completely secure application using JWT Tokens, HTTP-Only Cookies, Signed
Cookies, Password Encryption, and Middleware Chains.

Contributions are welcome

"dependencies": { <!-- Hashing Passwords --> "bcrypt": "^5.1.0",

<!-- allow running multiple lines in terminal in same line --> "concurrently":

"^8.2.0", <!-- Parsing Cookies --> "cookie-parser": "^1.4.6",

<!-- Cross Origin Resource Sharing allowance --> "cors": "^2.8.5",
<!-- .env file confing & access --> "dotenv": "^16.3.1",
<!-- Development http server --> "express": "^4.18.2",
<!-- Data validation checking --> "express-validator": "^7.0.1",
<!-- Gives some extra log Data -->

"morgan": "^1.10.0",

<!-- JWT for auth  --> "jsonwebtoken": "^9.0.1",
<!-- Package to work with MONOG DB --> "mongoose": "^7.4.2",
<!-- Library to work with open AI systems --> "openai": "^3.3.0" },

"devDependencies": { <!-- Types --> "@types/bcrypt": "^5.0.0",
"@types/cookie-parser": "^1.4.3", "@types/cors": "^2.8.13", "@types/express":
"^4.17.17", "@types/jsonwebtoken": "^9.0.1", "@types/node": "^20.4.8",

<!-- Nodemon --> "nodemon": "^3.0.1", <!-- TS --> "ts-node": "^10.9.1",

"typescript": "^5.1.6" }

<!-- MONGO USER Password -->

YuJlRrBpUjZ8yDZu

<!-- mongo string -->

mongodb+srv://gemybgf:YuJlRrBpUjZ8yDZu@cluster0.p0xccr2.mongodb.net/ai-mern?retryWrites=true&w=majority
