const { MongoClient } = require("mongodb");
//and this
// const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const database = "e-comm";
const client = new MongoClient(url);
async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return await db.collection("products");
  // let response = await collection.find({ brand: "nokia" }).toArray();
  // console.log(response);
}

module.exports = dbConnect;
