/**
 * Bare-bones Express server that will serve up the static assets in our build directory
 *
 * For Heorku purposes, we are telling our app to use the given environment variable PORT
 * which Heroku provides. 
 * If not use port 8080   
 */

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build'));

app.listen(process.env.PORT || 8080);