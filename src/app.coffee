coffeecup = require 'coffeecup'
creamer = require 'creamer'
flatiron = require 'flatiron'
ecstatic = require 'ecstatic'

app = flatiron.app
app.use flatiron.plugins.http
app.http.before = [
  ecstatic(__dirname + '/assets', { autoIndex : off, cache: on })
]

app.use creamer

view = (name) -> "#{__dirname}/pages/#{name}"

index = require view("index")
sugar = require view("sugar")
skeleton = require view("skeleton")

app.router.get '/', -> @res.html app.render(@res, index, home: '.active')
app.router.get '/sugar', -> @res.html app.render(@res, sugar, home: '.active')
app.router.get '/skeleton', -> @res.html app.render(@res, sugar, home: '.active')

app.start 3000
console.log 'listening on port 3000'


