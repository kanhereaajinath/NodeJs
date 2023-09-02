const { MongoClient } = require('mongodb');

class Dbconnect{

    constructor(){
        const password = 'abc123456789'
        const url = `mongodb+srv://aajinathkanhere:${password}@cluster0.8y5zsja.mongodb.net/?retryWrites=true&w=majority`;
        this.client = new MongoClient(url);
        this.client.connect()
    }
    async   fetchone(x) {
       
      
       
        const result=client.db("employee_db").collection("empdata").insertOne(row)
       this. client.close()
      }
      async  getdata(sal) {
          
          const args = { salary: { $gt: sal } };
          const result = await client.db('employee_db').collection('empdata').find(args).toArray();
      
          if (result.length === 0) {
            return "record not found";
          } else {
          
      
            console.log(result);
            return result;
          }
         
      
       
      }
  
  }

  

  module.exports = {
    Dbconnect
};