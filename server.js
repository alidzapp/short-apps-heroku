var express = require('express');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('pages/index', { 
    title: 'Home', 
    apps: [
      {
        "name": "Clock",
        "url": "clock"
      }
    ]
  });
});

app.get('/clock', function(req, res) {
  res.render('pages/clock');
});
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('listening on', port);
});