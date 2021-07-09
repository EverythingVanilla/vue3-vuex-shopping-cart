const cors = require("cors");
const express = require("express");
const pckg = require("../package.json");
const compression = require("compression");
const products = require("./fixtures/products.json");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(compression());

app.get("/api/products", (req, res) => {
  const { limit, page } = req.query;

  console.log(products.length);
  res.json([...products].splice(page || 1, limit || 20));
});

app.listen(PORT, () => {
  console.log(`${pckg.name} is running at ${PORT}.`);
});
