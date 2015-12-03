var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use middleware
app.use(bodyParser());

// define routes

var todoItems = [{desc:'Programar'},{desc:'node js'}];

app.get('/', function(request, response) {
  response.render('index', {title:'To Do!', items: todoItems});
});

app.post('/add', function(request, response){
  var newItem = request.body.newItem;
  console.log(newItem);
  todoItems.push({desc: newItem});

  response.redirect('/');
});

app.listen(1337, function() {
  console.log('ready on port 1337');
});
