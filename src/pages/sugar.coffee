module.exports = ->
  h1 class: 'black_coffee', -> 'Black Coffee'
  h4 class: 'little_sugar', -> 'with a little sugar'
  p class: 'text', ->
    text 'Built w/ '
    a href: 'https://github.com/gradus/black-coffee', -> 'black-coffee'
    text ', a '
    a href: 'http://coffeescript.org/', -> 'CoffeeScript'
    br()
    text ' and '
    a href: 'http://http://flatironjs.org/', -> 'Flatiron'
    text ' http server template.'

  img class: 'fade_img', src: "/images/coffeesugar.jpg"

  p class: 'credits', style: 'float:right;padding-right:230px;', ->
    text 'created by '
    a href: 'http://gradus.github.com/', -> 'Kris Windham'

  coffeescript ->
    $(document).ready ->
      $('.black_coffee').hide()
      $('.little_sugar').hide()
      $('.text').hide()
      $('.fade_img').hide()
      $('.credits').hide()
      $('.black_coffee').fadeIn(1000)
      $('.little_sugar').fadeIn(3000)
      $('.text').fadeIn(4000)
      $('.fade_img').fadeIn(8000)
      $('.credits').fadeIn(10000)
