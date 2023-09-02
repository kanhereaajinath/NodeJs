const express = require('express');
const app = express();
const cors = require('cors');
const path = require("path");

app.set('view engine', 'pug');
//This line sets the view engine for the Express application (presumably named app) to Pug. Pug is a popular template engine for JavaScript that allows you to write HTML templates using a concise and indentation-based syntax.

app.set('views', path.join(__dirname, 'views'));
//This line sets the directory where the application will look for views (Pug templates). It uses the path.join function to concatenate the current directory (__dirname) with the 'views' directory. This means that the Pug templates for this application are expected to be located in a folder named 'views' within the application's directory.

app.get('/index', (request, response) => {////This code defines an HTTP GET route for the path '/index'. When a client makes an HTTP GET request to '/index', the provided callback function will be executed.
    response.render('demo', { name: "Abc", subject: "demo pug", link: "http://www.google.com" });
    //This line renders the 'demo' Pug template and passes an object with data to be used within the template. In this case, it's passing an object with three properties: 'name', 'subject', and 'link'.
});



app.listen(3002, () => {
    console.log("example started with 3002");
});
