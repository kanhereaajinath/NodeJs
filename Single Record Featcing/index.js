const express=require('express')//load express library
const app=express()//create object of express library 
let cors=require('cors')//"cors" stands for Cross-Origin Resource Sharing. It's a security feature implemented by web browsers that restricts webpages from making requests to a different domain than the one that served the web page. This is done to prevent potential security vulnerabilities like Cross-Site Request Forgery (CSRF) and Cross-Site Scripting (XSS) attacks.
app.use(cors()) 
const {MongoClient}=require('mongodb')
async function getdata(x){
    const password="0123456789"
    const url=`mongodb+srv://aajinathkanhere:${password}@cluster0.8y5zsja.mongodb.net/?retryWrites=true&w=majority`
    const client=new MongoClient(url)
    client.connect()
    const args={eid:x}
    const result=await client.db('employee_db').collection('empdata').findOne(args)
    if(result==null){
        client.close()
        return "record not found"
    }
    else{
        console.log(result)
    }
    client.close()
    return result;
}
app.get("/student/:id",async(req,res)=>{
    const sid=Number(req.params.id)
    const row=await getdata(sid)
    res.send(row)
})
const PORT=3002
app.listen(PORT,()=>{
    console.log("server running on port 3002")
})