//Dependencies
var express = require("express");
var mongoose = require("mongoose");
// var bodyParser = require("body-parser");
var routes = require('./routes/routes');
const path = require('path')

var app = express();
var PORT = process.env.PORT || 3000;

var db = process.env.MONGODB_URI || "mongodb+srv://RowlandH1:FVH7QttYXEY6UD3s@bibleapp.vyyel.mongodb.net/bibleapp?retryWrites=true&w=majority";
// mongodb+srv://missphumby:funby_90@rest-7yvub.mongodb.net
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
// app.use(express.static(process.cwd() + '/public'));

//solving cors issue
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*")
  // res.header("Access-Control-Allow-Credentials: true") 
  res.header("Access-Control-Allow-Headers", 
  "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  // res.header("Access-Control-Max-Age", "1000")
  if (req.method == "OPTIONS"){
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
      return res.status(200).json({})
  }
  next()
  
})

// app.use(express.static(path.join(__dirname, "public")));

// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "../new-app/public", "index.html"));
// });
app.use(express.static(process.cwd() + '/public'));
app.use(express.json());
// Parse application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.get('/', (req, res)=>{
  res.send('hello world')
})
app.listen(PORT, function() {
	console.log('App is ready on port', PORT);
});
