import express, { urlencoded } from "express";
import { engine } from "express-handlebars";
import __dirname from "./utils.js";
import * as path from "path";
import products from "./products.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "views"));

app.use("/", express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("pages/home", {
    title: "Tienda - SQ1 Academy",
    products: products,
  });
});

app.get("/productos/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id == id);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.render("pages/producto", {
    title: product.name + " - SQ1 Academy",
    product,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
