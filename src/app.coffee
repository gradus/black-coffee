coffeecup = require 'coffeecup'
fs = require 'fs'
flatiron = require 'flatiron'
ecstatic = require 'ecstatic'
app = flatiron.app
app.use flatiron.plugins.http
app.http.before = [
  ecstatic(__dirname + '/assets', { autoIndex : off })
]

indexPage = ''

fs.readFile('./pages/index.coffee', 'utf8', (err,data) -> indexPage += data)

app.router.get '/', ->
  @res.writeHead 200, 'Content-Type': 'text/html'
  @res.end coffeecup.render(indexPage)

app.start 3000
console.log 'listening on port 3000'


