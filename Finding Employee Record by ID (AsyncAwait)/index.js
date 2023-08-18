const {MongoClient}=require('mongodb')
async function manin(){
    const password="0123456789"
    const url=`mongodb+srv://aajinathkanhere:${password}@cluster0.8y5zsja.mongodb.net/?retryWrites=true&w=majoritymongodb+srv://aajinathkanhere:<password>@cluster0.8y5zsja.mongodb.net/?retryWrites=true&w=majority`
    const client=new MongoClient(url)
    client.connect()
    const args={eid:301}
    const result=await client.db("employee_db").collection("empdata").findOne(args)
    if (result==null){
        console.log("record not found")

    }
    else {
        console.log(result)
    }
    client.close()
}
manin()