const {MongoClient}=require("mongodb")
const password='0123456789'
const url=`mongodb+srv://aajinathkanhere:${password}@cluster0.8y5zsja.mongodb.net/?retryWrites=true&w=majority`
const client=new MongoClient(url)
client.connect()
const emps=[{
    eid:301,
    name:"Ram",
    salary:50000

},
{
    eid:302,
    name:"Sham",
    salary:40000
},{
    eid:303,
    name:"Vaibhav",
    salary:40000

}]
const result=client.db('employee_db').collection('empdata').insertMany(emps)//by using this line we are inserting multiple record in the database 
result.then((data)=>{
    console.log(`recod inseted with id ${data.insertedIds}`)
})
client.close()