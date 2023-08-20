const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const { MongoClient } = require('mongodb');

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

const PORT = 3003;
app.listen(PORT, () => {
  console.log("server running on port 3003");
});
