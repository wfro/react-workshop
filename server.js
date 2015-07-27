var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/ideas', function(req, res) {
  console.log('GET /ideas');
  fs.readFile('ideas.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.post('/ideas', function(req, res) {
  console.log('POST /ideas: ', req.body);
  fs.readFile('ideas.json', function(err, data) {
    var ideas = JSON.parse(data);

    var newIdea = req.body;
    newIdea.id = ideas.length + 1;

    ideas.push(newIdea);

    fs.writeFile('ideas.json', JSON.stringify(ideas, null, 4), function(err) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(ideas));
    });
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started on: http://localhost:' + app.get('port'));
});

