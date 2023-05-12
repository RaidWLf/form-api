const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello to Form API"));

app.post("/api", (req, res) => res.status(200).json(req.body));

app.listen(port, (req, res) => console.log(`running on ${port}`));
