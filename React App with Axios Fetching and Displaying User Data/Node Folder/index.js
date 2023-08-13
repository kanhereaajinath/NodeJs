const arr=[{
    id:1,
    Name:"Aajinath",
    Sir_name:"Kanhere",
    Gender:"Male",
    Phone:9309121699

},
{
    id:2,
    Name:"Rushikesh",
    Sir_name:"Gadekar",
    Gender:"Male",
    Phone:9420222390,

},
{
    id:3,
    Name:"Pavan",
    Sir_name:"mule",
    Gender:"Male",
    Phone:7034232324
},
{
    id:4,
    Name:"Sham",
    Sir_name:"Kharat",
    Gender:"Male",
    Phone:8408973695
},
{
    id:5,
    Name:"Vaibhav",
    Sir_name:"Nanekar",
    Gender:"Male",
    Phone:9454342434
},
{
    id:6,
    Name:"Suraj",
    Sir_name:"Mete",
    Gender:"Male",
    Phone:9454321238
}]
let cors=require('cors')

const express =require('express')
const app=express()
app.use(cors());
app.get("/users",(request,response)=>{
    response.json(arr)
})
app.get("/user/:id",(request,response)=>{
     const sid=Number(request.params.id)
     const user1=arr.find((n)=>n.id===sid)
     response.json(user1)

})
app.listen(3010,()=>{
    console.log("server started")
})