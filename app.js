var app, coffeecup, ecstatic, flatiron, fs, template;

coffeecup = require('coffeecup');

fs = require('fs');

flatiron = require('flatiron');

ecstatic = require('ecstatic');

app = flatiron.app;

app.use(flatiron.plugins.http);

app.http.before = [
  ecstatic(__dirname + '/public', {
    autoIndex: false
  })
];

template = '';

fs.readFile('./public/index.coffee', 'utf8', function(err, data) {
  return template += data;
});

app.router.get('/', function() {
  this.res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  return this.res.end(coffeecup.render(template));
});

app.start(3000);

console.log('listening on port 3000');
