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
        script src: 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'
        style '''
          body {
            font-family: sans-serif;
            background-color:black; 
            color:whitesmoke;
            margin: 30px 30px;
            padding: 0px;
            text-align: center;
          }
          #wrap {
            width:500px;
            margin:0px auto;
            text-align:left;
          }
          a, a:visited, a:hover { color:white;}
          p { color: white }
          header, nav, section, footer {display: block}
        '''
        coffeescript ->
          $(document).ready ->
            $('.black_coffee').hide()
            $('.like_it_black').hide()
            $('.text').hide()
            $('.fade_img').hide()
            $('.credits').hide()
            $('.black_coffee').fadeIn(1000)
            $('.like_it_black').fadeIn(3000)
            $('.text').fadeIn(4000)
            $('.fade_img').fadeIn(8000)
            $('.credits').fadeIn(10000)


      body ->
        div id: 'wrap', ->
          h1 class: 'black_coffee', -> 'Black Coffee'
          h3 class: 'like_it_black', -> '"I like my coffee black"'
          p class: 'text', ->
            text 'Built with '
            a href: 'https://github.com/twilson63/iron-coffee', -> 'iron-coffee'
            text ', a '
            a href: 'http://coffeescript.org/', -> 'CoffeeScript'
            br()
            text ' and '
            a href: 'http://http://flatironjs.org/', -> 'Flatiron'
            text ' http server template.'
          img class: 'fade_img', src: "http://static.flickr.com/44/143391932_886e771618.jpg"

          p class: 'credits', ->
            text 'created by '
            a href: 'http://github.com/gradus', -> 'Kris Windham'

app.start 3000
console.log 'listening on port 3000'


