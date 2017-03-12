/**
 * http://usejsdoc.org/
 */
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars').create(
	{defaultLayout:'main'}
	);
var data = require('./models/data');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('view cache', false);

app.get('/', function(req, res, next){
	res.render('index');
});

app.get('/products', function(req, res, next){
    res.render('products',{data:data.getAll()});
});

app.get('/products/:productType', function(req, res, next){
	console.log(req.params.productType);
    res.render('products',{data:data.getByProduct(req.params.productType)});
});


// Ofrecer archivos estáticos si es necesario
app.use(express.static(__dirname + '/public'));

var hostname = 'localhost';
var port = 3000;

app.listen(port, hostname, function(){
	console.log('Servidor corriendo en http://'+hostname+':'+port+'/');
});