const express = require('express');
const app = express();
const cors = require('cors');
const path = require("path");

app.set('view engine', 'hbs');
//This line sets the view engine for the Express application (presumably named app) to hbs. hbs is a popular template engine for JavaScript that allows you to write HTML templates using a concise and indentation-based syntax.

app.set('views', path.join(__dirname, 'views'));
//This line sets the directory where the application will look for views (hbs templates). It uses the path.join function to concatenate the current directory (__dirname) with the 'views' directory. This means that the hbs templates for this application are expected to be located in a folder named 'views' within the application's directory.

app.get('/index', (request, response) => {////This code defines an HTTP GET route for the path '/index'. When a client makes an HTTP GET request to '/index', the provided callback function will be executed.
    response.render('demo', { name: "Pqr", subject: "demo hbs", link: "http://www.google.com" });
    //This line renders the 'demo' hbs template and passes an object with data to be used within the template. In this case, it's passing an object with three properties: 'name', 'subject', and 'link'.
});



app.listen(3002, () => {
    console.log("example started with 3002");
})
//step to create this template 
// step1:install ejs libray  by using 
//       npm install hbs
// step 2:create Demo.hbs in the views folder and write demo.ejs file code 

//step3:in node js code specify the view template using set function 
//app.set('view engine', 'hbs');
// step4:add data in template and send the response to the client by using render function 
