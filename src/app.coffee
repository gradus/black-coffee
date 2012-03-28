coffeecup = require 'coffeecup'
creamer = require 'creamer'
flatiron = require 'flatiron'
ecstatic = require 'ecstatic'

app = flatiron.app
app.use flatiron.plugins.http
app.http.before = [
  ecstatic(__dirname + '/assets', { autoIndex : off, cache: on })
]

app.use creamer, layout: require(__dirname + '/pages/layout')

view = (name) -> "#{__dirname}/pages/#{name}"

index = require view("index")
sugar = require view("sugar")
cream = require view("cream")
skeleton = require view("skeleton")

app.router.get '/', ->
  @res.html app.render(@res, index, black: '.active', css: "app", title: "I like my Coffee Black")
app.router.get '/sugar', ->
  @res.html app.render(@res, sugar, sugar: '.active', css: "sugar", title: "I like my Coffee With a little Sugar")
app.router.get '/cream', ->
  @res.html app.render(@res, cream, cream: '.active', css: "app", title: "I like my Coffee with a splash of creamer")

app.router.get '/skeleton', -> @res.html app.render(@res, skeleton)

app.start 3000
console.log 'listening on port 3000'


