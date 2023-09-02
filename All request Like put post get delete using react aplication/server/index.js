const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const {Dbconnect} =require("./databasecode")
app.use(express.json())
const {MongoClient}= require('mongodb')
async function getdata(sal) {
  const password = "0123456789";
  const url = `mongodb+srv://aajinathkanhere:${password}@cluster0.8y5zsja.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);


    await client.connect();

    const args = { salary: { $gt: sal } };
    const result = await client.db('employee_db').collection('empdata').find(args).toArray();

    if (result.length === 0) {
      return "record not found";
    } else {
      console.log(result);
      return result;
    }

    client.close();

}

app.get("/student/:sal", async (req, res) => {
  const sal = Number(req.params.sal);
  const data = await getdata(sal);
  res.send(data);
});
async function saveData(row){
  const password = "0123456789";
  const url = `mongodb+srv://aajinathkanhere:${password}@cluster0.8y5zsja.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  client.connect()
  const result=client.db("employee_db").collection("empdata").insertOne(row)
  client.close()
}
async function putData(x,row)
{
  const password = "0123456789";
  const url = `mongodb+srv://aajinathkanhere:${password}@cluster0.8y5zsja.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  client.connect()
 

  const result =client.db('employee_db').collection("empdata").updateOne({eid:x},{$set:row})
  if(result==null)
  client.close()
return result

}

async function deletone(x){
  const password='0123456789'
  const url=`mongodb+srv://aajinathkanhere:${password}@cluster0.8y5zsja.mongodb.net/?retryWrites=true&w=majority`;
  const client=new MongoClient(url)
   client.connect()
   const args={eid:x}
   const result= await client.db("employee_db").collection("empdata").deleteOne(args)
   if (result==null){
   client.close()
  return("record not found")
   }
   client.close()
   return result   

}
// app.get("/student/:sal", async (req, res) => {
//   const sal = Number(req.params.sal);
//   const data = await getdata(sal);
//   res.send(data);
// })
app.post('/student',(req,res)=>{
  console.log("got data")
  const row=req.body
  console.log(row) //  all this is are use to 
  saveData(row)
  res.send("record saved ")
//   const id1=Number(req.params.id)
//   let obj=new Dbconnect()
//   const row=obj.fetchone(id1)
// //  obj.closeConnection()
//   res.send(row)

})
app.put('/student/:id', async (req, res, next) => {
   const r = req.body;
  const id1 = Number(req.params.id);
  console.log(r);

  const result = putData(id1, r);
  console.log("put method called");
  res.send(result);
});

app.patch('/student/:id',async(res,req)=>{
  
const data=await patchData(id)

console.log(data)

  console.log("patch method called")
})
app.delete('/student/:id',async(req,res)=>{
  const sid=Number(req.params.id)
  const row=await deletone(sid)
  res.send(row)
  console.log("delet method called")
})


const PORT = 3003;
app.listen(PORT, () => {
  console.log("server running on port 3003");
});
