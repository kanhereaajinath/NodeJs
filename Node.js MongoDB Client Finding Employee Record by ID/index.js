const {MongoClient}=require('mongodb')
const password="0123456789"
const url=`mongodb+srv://aajinathkanhere:${password}@cluster0.8y5zsja.mongodb.net/?retryWrites=true&w=majority`
const client=new MongoClient(url)
client.connect()
const args={eid:301}
const result=client.db("employee_db")//client.db("employee_db"): This part accesses the "employee_db" database using the MongoDB client instance named client.
                  .collection("empdata")//.collection("empdata"): This part specifies that you want to work with the "empdata" collection within the "employee_db" database. It retrieves a reference to that collection.
                   .findOne(args)
                //    //.findOne(args): This method is used to perform a query to find a single
                //     document in the collection that matches the specified query criteria, which
                //      are stored in the args object. The args object likely contains a query to search for 
                //      a specific employee document based on 
                //    certain criteria, such as the eid (employee ID) being equal to 301.

result.then((data)=>{
    if(data==null)
    {
        console.log("record is not found")
    }
    else
    {
        console.log(data)
    }
    client.close()
})
result.catch((err)=>{
    client.close()
})