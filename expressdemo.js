//create server by using express liabrary 
//Step1:install express liarary by using *******npm install express*****

//load the express liabrary 
const express=require("express")

const app=express()//create object of express 

app.get('/',(request,response)=>{
    //call the get function to accept the request from client 
    // get function has 2 parameter 
    //1)path-:it is uri(uniform resource identifire )
    //2)a function refrence which handle request and responce 
response.send("hello world")
})
app.get('/hello',(request,response)=>{
    response.send("hello express")
})

//start the server by using listen function 
app.listen(3012,()=>{
    console.log("server started")
})