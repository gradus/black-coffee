doctype 5
html ->
  head ->
    title 'I like my Coffee Black'
    meta name: 'viewport', content: 'width=device-width, initial-scale=0.7, maximum-scale=0.8'
    script src: 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'
    link rel: 'stylesheet', href: '/stylesheets/app.css'

  body ->
    div id: 'wrap', ->
      h1 class: 'black_coffee', -> 'Black Coffee'
      h3 class: 'like_it_black', -> '"I like my coffee black"'
      p class: 'text', ->
        text 'Built w/ '
        a href: 'https://github.com/twilson63/iron-coffee', -> 'iron-coffee'
        text ', a '
        a href: 'http://coffeescript.org/', -> 'CoffeeScript'
        br()
        text ' and '
        a href: 'http://http://flatironjs.org/', -> 'Flatiron'
        text ' http server template.'
      img class: 'fade_img', src: "http://static.flickr.com/44/143391932_886e771618.jpg"

      p class: 'credits', style: 'float:right;padding-right:230px;', ->
        text 'created by '
        a href: 'http://github.com/gradus', -> 'Kris Windham'

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


