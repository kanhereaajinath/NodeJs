const express=require('express')
const app=express()
let cors=require("cors")
app.use(cors())
app.use(express.json())
app.use('/hello',(req,res,next)=>{//this middlware executed only for request with url "/hello " it is not executed 
                                   //for rest of the request
console.log(`got request at ${Date.now()}`)
res.send('hello form server ')
next()
})
app.get('/hello',(req,res)=>{
    console.log("got request ")
    res.send("hello form server ")
    
})
app.get('/hi',(req,res)=>{
    res.send("hi form server ")
})

const PORT=3002
app.listen(PORT,()=>{
console.log("server start at port no 3002")
})