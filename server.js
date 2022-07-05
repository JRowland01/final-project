//Dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var routes = require('./routes/routes');
var app = express();
var PORT = process.env.PORT || 3000;

var db = process.env.MONGODB_URI || "mongodb+srv://JRowland01:PraiseThe463@bibleapp.vyyel.mongodb.net/?retryWrites=true&w=majority";

// Connect mongoose to the database
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("Mongoose connection is successful");
  }
});

// Serve static content for the app from the "public" directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.json());
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.listen(PORT, function() {
	console.log('App is ready on port', PORT);
});

