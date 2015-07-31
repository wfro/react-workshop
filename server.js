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

app.put('/ideas/:id', function(req, res) {
  console.log('PUT /ideas/:id');
  fs.readFile('ideas.json', function(err, data) {
    var ideas = JSON.parse(data);
    console.log('ideas before updating: ', ideas);

    // TODO: WHY
    var idea = req.body;
    console.log('reqeust body: ', idea);
    // var toUpdate = ideas.filter(function(i) {
    //   return i.id = idea.id
    // });
    // console.log('idea to update: ', toUpdate);
    // console.log('len: ', toUpdate.length);
    // toUpdate.title = idea.title;
    // toUpdate.body = idea.body;
    console.log('ideas after updating: ', ideas);

    fs.writeFile('ideas.json', JSON.stringify(ideas, null, 4), function(err) {
      res.setHeader('Content-Type', 'application/json');
      console.log('response: ', JSON.stringify(idea));
      res.send(JSON.stringify(idea));
    });
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started on: http://localhost:' + app.get('port'));
});

