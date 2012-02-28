(function() {
  var app, coffeecup, flatiron;

  coffeecup = require('coffeecup');

  flatiron = require('flatiron');

  app = flatiron.app;

  app.use(flatiron.plugins.http);

  app.router.get('/', function() {
    this.res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    return this.res.end(coffeecup.render(function() {
      doctype(5);
      return html(function() {
        head(function() {
          title('I like my Coffee Black');
          script({
            src: 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'
          });
          style('body {\n  font-family: sans-serif;\n  background-color:black; \n  color:whitesmoke;\n  margin: 30px 30px;\n  padding: 0px;\n  text-align: center;\n}\n#wrap {\n  width:500px;\n  margin:0px auto;\n  text-align:left;\n}\na, a:visited, a:hover { color:white;}\np { color: white }\nheader, nav, section, footer {display: block}');
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
        return body(function() {
          return div({
            id: 'wrap'
          }, function() {
            h1({
              "class": 'black_coffee'
            }, function() {
              return 'Black Coffee';
            });
            h3({
              "class": 'like_it_black'
            }, function() {
              return '"I like my coffee black"';
            });
            p({
              "class": 'text'
            }, function() {
              text('Built with ');
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
              "class": 'fade_img',
              src: "http://static.flickr.com/44/143391932_886e771618.jpg"
            });
            return p({
              "class": 'credits'
            }, function() {
              text('created by ');
              return a({
                href: 'http://github.com/gradus'
              }, function() {
                return 'Kris Windham';
              });
            });
          });
        });
      });
    }));
  });

  app.start(3000);

  console.log('listening on port 3000');

}).call(this);
