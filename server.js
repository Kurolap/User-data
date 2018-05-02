var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile('index.html', { root: 'public' });
});
var server = app.listen(750, function () {
 console.log("Server started on 'http://localhost:750'");
});d