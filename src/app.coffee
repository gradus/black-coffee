require 'coffee-script'
coffeecup = require 'coffeecup'

flatiron = require 'flatiron'
app = flatiron.app
app.use flatiron.plugins.http
app.router.get '/', ->
  @res.writeHead 200, 'Content-Type': 'text/html'
  @res.end coffeecup.render ->
    doctype 5
    html ->
      head ->
        title 'I like my Coffee Black'
        style '''
          body {
            font-family: sans-serif; 
            background-color:black; color:#ffffff;
            margin: 40px;
          }
          a, a:visited, a:hover { color:white;}
          header, nav, section, footer {display: block}
        '''
        
      body ->
        h1 'Welcome to Black -Coffee'
        h4 'Built w/ CoffeeScript Flatiron http server template!'
        a href: 'https://github.com/twilson63/iron-coffee', -> 'iron-coffee'
app.start 3000
