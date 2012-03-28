module.exports = ->
  doctype 5
  html ->
    head ->
      title 'I like my Coffee Black'
      meta name: 'viewport', content: 'width=device-width, initial-scale=0.6, maximum-scale=0.55'
      link rel: 'stylesheet', href: 'stylesheets/base.css'
      link rel: 'stylesheet', href: 'stylesheets/skeleton.css'
      link rel: 'stylesheet', href: '/stylesheets/app.css'
      link rel: 'shortcut icon', href: '/images/favicon.ico'

    body ->
      div '.container', ->
        ul '.tabs', ->
          li ->
            a '.active', href: '/', 'Black'
          li ->
            a href: '/sugar', 'Sugar'

        div id: 'wrap', ->
          h1 class: 'black_coffee', -> 'Black Coffee'
          h4 class: 'like_it_black', -> '"I like my coffee black"'
          p class: 'text', ->
            text 'Built w/ '
            a href: 'https://github.com/twilson63/iron-coffee', -> 'iron-coffee'
            text ', a '
            a href: 'http://coffeescript.org/', -> 'CoffeeScript'
            br()
            text ' and '
            a href: 'http://http://flatironjs.org/', -> 'Flatiron'
            text ' http server template.'

          img height: '300px', class: 'fade_img', src: "/images/coffeemoon.jpg"

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
            $('.like_it_black').hide()
            $('.text').hide()
            $('.fade_img').hide()
            $('.credits').hide()
            $('.black_coffee').fadeIn(1000)
            $('.like_it_black').fadeIn(3000)
            $('.text').fadeIn(4000)
            $('.fade_img').fadeIn(8000)
            $('.credits').fadeIn(10000)
