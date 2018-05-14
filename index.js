var calc = require('./utils/calculator')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


console.log(__dirname)

app.get('*', function logger(req, res, next) {
  console.log('Hey someone is here')
  next()
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

var todos = []

app.post('/todos', function (req, res, next) {
  console.log(req.body)
  todos.push(req.body)
  res.send('thank you!!!')
})

app.get('/todos', function (req, res, next) {
  console.log(req.body)
  res.send(todos)
})

app.get('/todos/:id', function (req, res, next) {
  res.send(todos[req.params])
  
})



//NOTHING THAT REQUIRES AUTH BELOW ME!!!
app.get('/auth/*', function (req, res, next) {
  if (true) {
    return next()
  }
  res.send("I hate cats")
})

app.get('/auth/userinfo', function (req, res) {
  res.send("I love kittens, but not cats!")
})






//NOTHING BELOW ME!!!
app.get('*', function logger(req, res, next) {
  console.log('Hey someone just left')
  res.status(404).send("<h1>404</h1>")
})






app.listen(3001)


console.log(calc.add(20, 5))
console.log(calc.cubed(14))