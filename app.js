const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//__dirname: Your project folder.

router.get('/',function(req, res){
  res.sendFile(path.join(__dirname+'/HTML/index.html'));
});

router.get('/login',function(req, res){
  res.sendFile(path.join(__dirname+'/HTML/login.html'));
});

router.get('/charts',function(req, res){
  res.sendFile(path.join(__dirname+'/HTML/login.html'));
});

router.get('/strips',function(req, res){
  res.sendFile(path.join(__dirname+'/HTML/strips.html'));
});

// Add the router

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');