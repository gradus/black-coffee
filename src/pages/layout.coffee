module.exports = ->
  doctype 5
  html ->
    head ->
      title 'I like my Coffee Black'
      meta name: 'viewport', content: 'width=device-width, initial-scale=0.7, maximum-scale=1'
      link rel: 'stylesheet', href: 'stylesheets/base.css'
      link rel: 'stylesheet', href: 'stylesheets/skeleton.css'
      link rel: 'stylesheet', href: '/stylesheets/app.css'
      link rel: 'shortcut icon', href: '/images/favicon.ico'
    content()
