const express = require("express");
const app = express();
const passport = require("passport");

const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// use bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//passport middlewire
app.use(passport.initialize());
//passport config
require("./config/passport")(passport);

//api routes
const categories = require("./routes/api/categories");
const products = require("./routes/api/Product");
const oders = require("./routes/api/order");
const carosul = require("./routes/api/carosulProduct");
const feature = require("./routes/api/featured");
const admin = require("./routes/api/admins");
const Contact = require("./routes/api/contacts");
app.get("/", (req, res) => {
  res.send("home");
});

//DB url
const db = require("./config/keys").mongoURI;
//connect to db
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => {
    console.log(err);
  });

//use api
app.use("/api/categories", categories);
app.use("/api/products", products);
app.use("/api/orders", oders);
app.use("/api/carosul", carosul);
app.use("/api/feature", feature);
app.use("/api/admin", admin);
app.use("/api/contacts", Contact);
const port = process.env.PORT || 1000;

app.listen(port, () => {
  console.log("Server started at port " + port);
});
