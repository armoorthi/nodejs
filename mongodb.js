const { MongoClient } = require("mongodb");
var axios = require('axios');
var config = {
    method: 'get',
    url: 'http://localhost:5000',
    headers: {},
    params: {location: 'London'}   
};

// Connection URI
const uri = "mongodb+srv://Check:Check@cluster0.c2ej0ep.mongodb.net/?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
    try {
      
        await client.connect();
        let response = await getdata();
        console.log(response);
        await client.db("sample_mflix").collection("temp").insertOne(response);
        console.log("Connected successfully to server");
    } finally {
             await client.close();
    }
}
run().catch(console.dir);

async function getdata() {

    let response = await axios(config);
    return response.data;
}
