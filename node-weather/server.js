const express = require('express')
const app = express()
const bodyParser=require('body-Parser') // through this we can use req.body

app.set('view engine', 'ejs');
app.use(express.static('css'));// allows to access all the static files present in the css folder 
app.use(bodyParser.urlencoded({extended:true}))


// app.get('/'...) ## Where we are focussing on root URL.
app.get('/', function (req, res) {
  res.render('index'); // will render our view, then send the equivalent HTML to the client ***Generally used in templeting language
  // res.send('Hello World!') // Used to send the HTTP response
})

app.post('/', function(req,res){
  res.render('index');
  console.log(req.body.city);
})

// app.listen(...) we are creating a server listening on port for connectons,
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})