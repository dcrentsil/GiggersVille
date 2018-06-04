var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
var http = require('http');
var cors = require('cors');
var pug = require('pug');
const cookieParser = require('cookie-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(cookieParser());


var routes = require('./routes/index');
app.use('/api', routes);


app.set('views', path.join(__dirname, 'public/views'));


app.use(cors());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });
  
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token');
//     res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     next();
//   });

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept',
	);
	res.header(
		'Access-Control-Allow-Methods',
		'OPTIONS, GET, PUT, POST, DELETE, HEAD',
  );
      res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');

     res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token');

	res.header('Access-Control-Allow-Credentials', 'true');

	if ('OPTIONS' === req.method) {
		res.sendStatus(200);
	} else {
		next();
	}
});
  app.use('*', (req, res, next) => {
    console.log(req.body)
  })
   
  const port = normalizePort(process.env.PORT || '3000');
  app.set('port', port); 

  function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  }

const server = http.createServer(app);
server.listen(port, () => console.log(`We got our server on port: ${port}`));

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

module.exports = app;