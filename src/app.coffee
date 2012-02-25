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
          p { color: white }
          header, nav, section, footer {display: block}
        '''
        
      body ->
        h1 'Black Coffee'
        h3 'I like my coffee black'
        h4 'Built w/ CoffeeScript Flatiron http server template!'
        p ->
          text 'using '
          a href: 'https://github.com/twilson63/iron-coffee', -> 'iron-coffee'
          text ' as the template'
        img src: "http://static.flickr.com/44/143391932_886e771618.jpg"
app.start 3000
console.log 'listening on port 3000'
