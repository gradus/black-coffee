var app, coffeecup, flatiron;

require('coffee-script');

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
        title('I like my Coffee Back');
        return style('body {\n  font-family: sans-serif; \n  background-color:black; color:#ffffff;\n  margin: 40px;\n}\nheader, nav, section, footer {display: block}');
      });
      return body(function() {
        h1('Welcome to Black -Coffee');
        h4('Built w/ CoffeeScript Flatiron http server template!');
        return a({
          href: 'https://github.com/twilson63/iron-coffee'
        }, function() {
          return 'iron-coffee';
        });
      });
    });
  }));
});

app.start(3000);
