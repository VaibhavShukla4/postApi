const express = require("express");
require("./config");
const Products = require("./product");
const app = express();
app.use(express.json());
app.post("/create", async (req, res) => {
  const data = new Products(req.body);
  const result = await data.save();
  console.log(result);
  res.send(result);
});
app.listen(5000);
