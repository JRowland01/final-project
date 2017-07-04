var express = require("express");
var path = require("path");
var apiRoutes = require('./apiroutes');

var router = new express.Router();

router.use('/api', apiRoutes);

// Otherwise send all other requests the index.html page
// React router will handle routing withing the app
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
