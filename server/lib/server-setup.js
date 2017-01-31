var express = require('express'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    path = require('path'),
    publicPath = path.resolve('./public');


// Export server
module.exports = function () {
  const server = express();

  // setting up sessions
  server.use(session ({
    secret:"superSecretySecrets",
    resave: false,
    saveUninitialized: true
  }));

  //rest of node modules
  server.use(express.static(publicPath));
  server.use(bodyParser.urlencoded({extended : true}));
  server.use(methodOverride('_method'))

  return server
}
