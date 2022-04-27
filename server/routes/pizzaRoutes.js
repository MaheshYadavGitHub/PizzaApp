const express = require("express");
const router = express.Router();
const Pizza = require("../models/pizzaModel");

router.get("/getAllPizzas", async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.send(pizzas);
  } catch (err) {
    return res.sendStatus(400).json({ message: err });
  }
});

module.exports = router;
