coffeecup = require 'coffeecup'
fs = require 'fs'
flatiron = require 'flatiron'
ecstatic = require 'ecstatic'
app = flatiron.app
app.use flatiron.plugins.http
app.http.before = [
  ecstatic(__dirname + '/public', { autoIndex : off })
]

template = ''

fs.readFile('./public/index.coffee', 'utf8', (err,data) -> template += data)

app.router.get '/', ->
  @res.writeHead 200, 'Content-Type': 'text/html'
  @res.end coffeecup.render(template)

app.start 3000
console.log 'listening on port 3000'


