const express = require("express");
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);

app.use("/public", express.static("./public"));

app.get('/', function (req, res) {
    res.render('index.html', {});
  });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
