
module.exports = function() {
  doctype(5);
  return html(function() {
    head(function() {
      title('I like my Coffee with a splash of creamer');
      meta({
        name: 'viewport',
        content: 'width=device-width, initial-scale=0.7, maximum-scale=1'
      });
      link({
        rel: 'stylesheet',
        href: 'stylesheets/base.css'
      });
      link({
        rel: 'stylesheet',
        href: 'stylesheets/skeleton.css'
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
      return div('.container', function() {
        div({
          id: 'wrap'
        }, function() {
          ul('.tabs', function() {
            li(function() {
              return a({
                href: '/'
              }, 'Black');
            });
            li(function() {
              return a({
                href: '/sugar'
              }, 'Sugar');
            });
            return li(function() {
              return a('.active', {
                href: '/cream'
              }, 'Cream');
            });
          });
          h1({
            "class": 'black_coffee'
          }, function() {
            return 'Black Coffee';
          });
          h4({
            "class": 'like_it_with_cream'
          }, function() {
            return '"sometimes with a splash of cream"';
          });
          p({
            "class": 'text'
          }, function() {
            text('Built w/ ');
            a({
              href: 'http://coffeescript.org/'
            }, function() {
              return 'CoffeeScript';
            });
            text(' and ');
            return a({
              href: 'http://http://flatironjs.org/'
            }, function() {
              return 'Flatiron';
            });
          });
          img({
            height: '300px',
            "class": 'fade_img',
            src: "/images/coffee_cream.jpg"
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
        script({
          src: '/javascripts/jquery.min.js'
        });
        script({
          src: 'javascripts/tabs.js'
        });
        return coffeescript(function() {
          return $(document).ready(function() {
            $('.black_coffee').hide();
            $('.like_it_with_cream').hide();
            $('.text').hide();
            $('.fade_img').hide();
            $('.credits').hide();
            $('.black_coffee').fadeIn(1000);
            $('.like_it_with_cream').fadeIn(3000);
            $('.text').fadeIn(4000);
            $('.fade_img').fadeIn(8000);
            return $('.credits').fadeIn(10000);
          });
        });
      });
    });
  });
};
