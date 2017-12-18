const express = require('express'),
  ParseServer = require('parse-server').ParseServer,
  ParseDashboard = require('parse-dashboard');

const parse = new ParseServer({
    databaseURI: 'mongodb://localhost/dev',
    appId: 'APPLICATION_ID',
    masterKey: 'MASTER_KEY',
    serverURL: 'http://localhost:4040/parse'
  }),
  dashboard = new ParseDashboard({
    "apps": [
      {
        "serverURL": "http://localhost:4040/parse",
        "appId": "APPLICATION_ID",
        "masterKey": "MASTER_KEY",
        "appName": "MyApp"
      }
    ],
    "users": [
      {
        "user":"admin",
        "pass":"admin"
      }
    ]
  }, {
    allowInsecureHTTP: true
  });

var app = express();
app.use('/parse', parse);
app.use('/dashboard', dashboard);

var httpServer = require('http').createServer(app);
httpServer.listen(4040);