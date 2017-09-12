var express = require('express')
var app = express()
var path = require('path')

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.render('index.html')
})

app.get('/', function (req, res) {
  res.render('info.html')
})

app.listen(1000, function () {
    console.log('Started PWS website')
})

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'templates'));

app.all('*', function (req, res, next) {
  res.render('error.html')
})
