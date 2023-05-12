const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => res.status(200).json(req.body));

app.listen(port, (req, res) => console.log(`running on ${port}`));
