const express =require('express')
//This line imports the Express.js framework, allowing you to create a web application using Node.js.
const router =express.Router()
//This code creates an instance of an Express router. Routers are used to define and organize routes within your application.
router.use((req,res,next)=>{
    console.log("time"+Date.now())
    next()
    //This middleware function is applied to all routes defined below it. It logs the current timestamp (Date.now()) along with the string "time" to the console before allowing the request to continue to the next middleware or route handler. The next() function is called to pass control to the next middleware in the chain.
})
router.get('/',(req,res)=>{
res.send("my home page")
//This code defines a route for the HTTP GET request to the root path '/'. When a client accesses the root path, the server will respond with the string "my home page".
})
router.get('/about',(req,res)=>{
res.send("about company")
})
module.exports=router
//Finally, the router instance is exported as a module, which allows it to be used in other parts of your application. You can import this module in another file to include these defined routes in your Express application.