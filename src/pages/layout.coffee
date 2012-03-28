module.exports = ->
  doctype 5
  html ->
    head ->
      title @title
      meta name: 'viewport', content: 'width=device-width, initial-scale=0.7, maximum-scale=1'
      link rel: 'stylesheet', href: 'stylesheets/base.css'
      link rel: 'stylesheet', href: 'stylesheets/skeleton.css'
      link rel: 'stylesheet', href: "/stylesheets/#{@css}.css"
      link rel: 'shortcut icon', href: '/images/favicon.ico'
      script src: '/javascripts/jquery.min.js'
      script src: 'javascripts/tabs.js'
    body ->
      div '.container', ->
        div id: 'wrap', ->
          ul '.tabs', ->
            li ->
              a @black || '', href: '/', 'Black'
            li ->
              a @sugar || '', href: '/sugar', 'Sugar'
            li ->
              a @cream || '', href: '/cream', 'Cream'

          content()
