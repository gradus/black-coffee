(function() {
  var app, coffeecup, flatiron;

  //require('coffee-script');

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
          return style('body {\n  font-family: sans-serif; \n  background-color:black; color:#ffffff;\n  margin: 40px;\n}\na, a:visited, a:hover { color:white;}\np { color: white }\nheader, nav, section, footer {display: block}');
        });
        return body(function() {
          h1('Black Coffee');
          h3('I like my coffee black');
          h4('Built w/ CoffeeScript Flatiron http server template!');
          p(function() {
            text('using ');
            a({
              href: 'https://github.com/twilson63/iron-coffee'
            }, function() {
              return 'iron-coffee';
            });
            return text(' as the template');
          });
          return img({
            src: "http://static.flickr.com/44/143391932_886e771618.jpg"
          });
        });
      });
    }));
  });

  app.start(3000);

  console.log('listening on port 3000');

}).call(this);
