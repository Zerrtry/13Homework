require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const PORT = process.env.PORT || 9000

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.static("./public/"));
app.use(bodyParser.json());
routes.route(app);
// ===========================================================
app.get("/status", function(req, res) {
  res.send("Welcome to the Burger App!");
});
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
