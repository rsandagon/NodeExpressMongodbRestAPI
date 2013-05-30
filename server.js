var express = require('express'),
	wine = require('./routes/wines'),
	fs = require("fs");

var app = express();

app.configure(function(){
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
        fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, text){
            res.send(text);
        });
    });

app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);

app.listen(3000);	
console.log('Listening on port 3000...');