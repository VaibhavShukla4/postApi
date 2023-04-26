const express = require("express");
require("./config");
const Product = require("./product");
const app = express();
app.use(express.json());
app.post("/create", async (req, res) => {
  const data = new Product(req.body);
  const result = await data.save();
  console.log(result);
  res.send(result);
});

app.get("/list", async (req, res) => {
  // console.log("done");`
  let data = await Product.find();
  // let result = data.save();
  res.send(data);
});
app.delete("/delete/:_id", async (req, res) => {
  let data = await Product.deleteOne(req.params);
  console.log(data);
  res.send(data);
});
app.put("/update/:_id", async (req, res) => {
  let data = await Product.updateOne(req.params, { $set: req.body });
  console.log(data);
  res.send(data);
});
app.listen(5000);
