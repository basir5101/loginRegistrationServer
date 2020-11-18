const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user")
const vendor = require("./routes/vendor")
const InitiateMongoServer = require("./config/db");
var cors = require('cors');


InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);
app.use('/vendor', vendor);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});

//k9tCYjRbtXSzVLDl
//LoginRegintration
//LoginRegistration
//user