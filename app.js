var app, coffeecup, ecstatic, flatiron, fs, indexPage;

coffeecup = require('coffeecup');

fs = require('fs');

flatiron = require('flatiron');

ecstatic = require('ecstatic');

app = flatiron.app;

app.use(flatiron.plugins.http);

app.http.before = [
  ecstatic(__dirname + '/assets', {
    autoIndex: false
  })
];

indexPage = '';

fs.readFile('./pages/index.coffee', 'utf8', function(err, data) {
  return indexPage += data;
});

app.router.get('/', function() {
  this.res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  return this.res.end(coffeecup.render(indexPage));
});

app.start(3000);

console.log('listening on port 3000');
