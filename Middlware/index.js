const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {//in this example middlware executed for every requset that may be delete post put patch etc.
    
    console.log(`got request at ${Date.now()}`);
    next();
    // res.send("middlware is executed")
});

app.get("/hello", (req, res) => { 
    console.log("got request ");
    res.send("hello from server "); 
});

app.get("/hi", (req, res) => { 
    console.log("got hi ");
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`server started with port number ${PORT}`);
});
