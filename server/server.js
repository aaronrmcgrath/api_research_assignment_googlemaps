var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 2000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/*', function(request, response) {
  var file = request.params[0] || '/views/index.html';
  response.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});
