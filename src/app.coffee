creamer = require 'creamer'
flatiron = require 'flatiron'
ecstatic = require 'ecstatic'

app = flatiron.app
app.use flatiron.plugins.http

app.use creamer,
  views: __dirname + '/pages'
  layout: require __dirname + '/pages/layout'

app.http.before = [
  ecstatic(__dirname + '/../assets', { autoIndex : off, cache: on })
]

app.router.get '/', ->
  @res.html @bind('index', black: '.active', css: "app", title: "I like my Coffee Black")
app.router.get '/sugar', ->
  @res.html @bind('sugar', sugar: '.active', css: "sugar", title: "I like my Coffee With a little Sugar")
app.router.get '/cream', ->
  @res.html @bind('cream', cream: '.active', css: "cream", title: "I like my Coffee with a splash of creamer")

app.router.get '/skeleton', -> @res.html @bind('skeleton')

app.start 3000
console.log 'listening on port 3000'


