var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.listen(8000);

var tweets = [];

// app.get('/',function(req,res){
//   res.send('Welcome to Node Twitter');
// })

app.post('/send',[bodyParser.json(),bodyParser.urlencoded({ extended: true })],function(req,res){
  if(req.body && req.body.tweet){
    res.send({status:'ok',message:'Tweet received'})
  }else{
    res.send({status:'nok',message:'No tweet received'})
  }
})

app.get('/',function(req,res){
  var title='Chirpie',
  header="welcome to Chirpie"

  res.render('index',{
    locals:{
      'title':title,
      'header':header,
      'tweets': tweets,
      stylesheets:{'public/style.css'}
    }
  })
})

app.get('/tweets',function(req,res){
  res.send(tweets)
})
