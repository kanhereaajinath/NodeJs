const {MongoClient}=require('mongodb')//by using this line we are access the mongodb libaray in our project 

const password='0123456789'//by using this we are connect with mongodb
const url=`mongodb+srv://aajinathkanhere:${password}@cluster0.8y5zsja.mongodb.net/?retryWrites=true&w=majority`
const client=new MongoClient(url)//this line indicate we are creating object of mongoclinet and connect the fuction 
client.connect()

const  emp={//create json object whic we want to store in the database 
    eid:200,
    name:"Rushikesh",
    salary:600000
    
}
const result= client.db("employee_db").collection("empdata").insertOne(emp)
//by using this line we are inert the record by calling insertOne method
result.then((data)=>{//this line is say wait for the response from server and colse the connection 
    console.log(`record insrted with id ${data.insertedId}`)
})
client.close()