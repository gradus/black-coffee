module.exports = ->
  doctype 5
  html ->
    head ->
      title 'I like my Coffee with a splash of creamer'
      meta name: 'viewport', content: 'width=device-width, initial-scale=0.7, maximum-scale=1'
      link rel: 'stylesheet', href: 'stylesheets/base.css'
      link rel: 'stylesheet', href: 'stylesheets/skeleton.css'
      link rel: 'stylesheet', href: '/stylesheets/app.css'
      link rel: 'shortcut icon', href: '/images/favicon.ico'

    body ->
      div '.container', ->
        div id: 'wrap', ->
          ul '.tabs', ->
            li ->
              a href: '/', 'Black'
            li ->
              a href: '/sugar', 'Sugar'
            li ->
              a '.active', href: '/cream', 'Cream'
          h1 class: 'black_coffee', -> 'Black Coffee'
          h4 class: 'like_it_with_cream', -> '"sometimes with a splash of cream"'
          p class: 'text', ->
            text 'Built w/ '
            a href: 'http://coffeescript.org/', -> 'CoffeeScript'
            text ' and '
            a href: 'http://http://flatironjs.org/', -> 'Flatiron'

          img height: '300px', class: 'fade_img', src: "/images/coffee_cream.jpg"

          p class: 'credits', style: 'float:left;', ->
            a href: 'http://easydoc.org/blackcoffee', -> 'black-coffee docs'

          p class: 'credits', style: 'float:right;padding-right:180px;', ->
            text 'created by '
            a href: 'http://gradus.github.com/', -> 'Kris Windham'

        script src: '/javascripts/jquery.min.js'
        script src: 'javascripts/tabs.js'

        coffeescript ->
          $(document).ready ->
            $('.black_coffee').hide()
            $('.like_it_with_cream').hide()
            $('.text').hide()
            $('.fade_img').hide()
            $('.credits').hide()
            $('.black_coffee').fadeIn(1000)
            $('.like_it_with_cream').fadeIn(3000)
            $('.text').fadeIn(4000)
            $('.fade_img').fadeIn(8000)
            $('.credits').fadeIn(10000)

