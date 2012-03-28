
module.exports = function() {
  doctype(5);
  return html(function() {
    head(function() {
      title('I like my Coffee With a little Sugar');
      meta({
        name: 'viewport',
        content: 'width=device-width, initial-scale=0.6, maximum-scale=0.55'
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
        href: '/stylesheets/sugar.css'
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
              return a('.active', {
                href: '/sugar'
              }, 'Sugar');
            });
            return li(function() {
              return a({
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
            "class": 'little_sugar'
          }, function() {
            return 'with a little sugar';
          });
          p({
            "class": 'text'
          }, function() {
            text('Built w/ ');
            a({
              href: 'https://github.com/gradus/black-coffee'
            }, function() {
              return 'black-coffee';
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
            "class": 'fade_img',
            src: "/images/coffeesugar.jpg"
          });
          return p({
            "class": 'credits',
            style: 'float:right;padding-right:230px;'
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
            $('.little_sugar').hide();
            $('.text').hide();
            $('.fade_img').hide();
            $('.credits').hide();
            $('.black_coffee').fadeIn(1000);
            $('.little_sugar').fadeIn(3000);
            $('.text').fadeIn(4000);
            $('.fade_img').fadeIn(8000);
            return $('.credits').fadeIn(10000);
          });
        });
      });
    });
  });
};
