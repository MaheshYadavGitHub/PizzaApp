const express = require("express");
const db = require("./db");
const app = express();

const pizzaRoute = require("./routes/pizzaRoutes");

app.use(express.json());
const port = 5000;

app.use("/api/pizzas/", pizzaRoute);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
