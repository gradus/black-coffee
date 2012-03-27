module.exports = ->
  doctype 5
  comment '[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]'
  comment '[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]'
  comment '[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]'
  comment '[if (gte IE 9)|!(IE)]><!'
  html lang: 'en', ->
    comment '<![endif]'
    head ->
      meta charset: 'utf-8'
      title 'Black Skeleton Coffee'
      meta name: 'description', content: 'Skeleton Layout'
      meta name: 'author', content: ''

      meta name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1'
      
      link rel: 'stylesheet', href: 'stylesheets/base.css'
      link rel: 'stylesheet', href: 'stylesheets/skeleton.css'
      link rel: 'stylesheet', href: 'stylesheets/layout.css'
      link rel: 'stylesheet', href: 'stylesheets/sugar.css'


      comment '[if lt IE 9]>\r\n\t\t<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>\r\n\t<![endif]'

      link rel: 'shortcut icon', href: 'images/favicon.ico'
    body ->
      comment 'Primary Page Layout\r\n\t=================================================='
      comment 'Delete everything in this .container and get started on your own site!'
      div '.container', ->
        div '.sixteen.columns', ->
          h1 '.remove-bottom', style: 'margin-top: 40px', 'Skeleton'
          h5 'Version 1.1'
          hr()
        div '.one-third.column', ->
          h3 'About Skeleton?'
          p 'Skeleton is a small collection of well-organized CSS &amp; JS files that can help you rapidly develop sites that look beautiful at any size, be it a 17" laptop screen or an iPhone. It\'s based on a responsive grid, but also provides very basic CSS for typography, buttons, tabs, forms and media queries. Go ahead, resize this super basic page to see the grid in action.'
        div '.one-third.column', ->
          h3 'Three Core Principles'
          p 'Skeleton is built on three core principles:'
          ul '.square', ->
            li ->
              strong 'A Responsive Grid Down To Mobile'
              text ': Elegant scaling from a browser to tablets to mobile.'
            li ->
              strong 'Fast to Start'
              text ': It\'s a tool for rapid development with best practices'
            li ->
              strong 'Style Agnostic'
              text ': It provides the most basic, beautiful styles, but is meant to be overwritten.'
        div '.one-third.column', ->
          h3 'Docs &amp; Support'
          p ->
            text 'The easiest way to really get started with Skeleton is to check out the full docs and info at'
            a href: 'http://www.getskeleton.com', 'www.getskeleton.com.'
            text '. Skeleton is also open-source and has a'
            a href: 'https://github.com/dhgamache/skeleton', 'project on git'
            text ', so check that out if you want to report bugs or create a pull request. If you have any questions, thoughts, concerns or feedback, please don\'t hesitate to email me at'
            a href: 'mailto:hi@getskeleton.com', 'hi@getskeleton.com'
            text '.'
      comment 'container'

      comment 'JS\r\n\t=================================================='
      script src: 'http://code.jquery.com/jquery-1.7.1.min.js'
      script src: 'javascripts/tabs.js'

