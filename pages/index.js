
module.exports = function() {
  doctype(5);
  return html(function() {
    head(function() {
      title('I like my Coffee Black');
      meta({
        name: 'viewport',
        content: 'width=device-width, initial-scale=0.6, maximum-scale=0.55'
      });
      script({
        src: '/javascripts/jquery.min.js'
      });
      link({
        rel: 'stylesheet',
        href: '/stylesheets/app.css'
      });
      return link({
        rel: 'shortcut icon',
        href: '/images/favicon.ico'
      });
    });
    return body(function() {
      div({
        id: 'wrap'
      }, function() {
        h1({
          "class": 'black_coffee'
        }, function() {
          return 'Black Coffee';
        });
        h4({
          "class": 'like_it_black'
        }, function() {
          return '"I like my coffee black"';
        });
        p({
          "class": 'text'
        }, function() {
          a({
            href: '/sugar'
          }, function() {
            return '...or with a little sugar';
          });
          br();
          br();
          text('Built w/ ');
          a({
            href: 'https://github.com/twilson63/iron-coffee'
          }, function() {
            return 'iron-coffee';
          });
          text(', a ');
          a({
            href: 'http://coffeescript.org/'
          }, function() {
            return 'CoffeeScript';
          });
          br();
          text(' and ');
          a({
            href: 'http://http://flatironjs.org/'
          }, function() {
            return 'Flatiron';
          });
          return text(' http server template.');
        });
        img({
          height: '300px',
          "class": 'fade_img',
          src: "/images/coffeemoon.jpg"
        });
        p({
          "class": 'credits',
          style: 'float:left;'
        }, function() {
          return a({
            href: 'http://easydoc.org/blackcoffee'
          }, function() {
            return 'black-coffee docs';
          });
        });
        return p({
          "class": 'credits',
          style: 'float:right;padding-right:180px;'
        }, function() {
          text('created by ');
          return a({
            href: 'http://gradus.github.com/'
          }, function() {
            return 'Kris Windham';
          });
        });
      });
      return coffeescript(function() {
        return $(document).ready(function() {
          $('.black_coffee').hide();
          $('.like_it_black').hide();
          $('.text').hide();
          $('.fade_img').hide();
          $('.credits').hide();
          $('.black_coffee').fadeIn(1000);
          $('.like_it_black').fadeIn(3000);
          $('.text').fadeIn(4000);
          $('.fade_img').fadeIn(8000);
          return $('.credits').fadeIn(10000);
        });
      });
    });
  });
};
