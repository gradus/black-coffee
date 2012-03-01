var app, coffeecup, ecstatic, flatiron, fs, indexPage, skeletonPage, sugarPage;

coffeecup = require('coffeecup');

fs = require('fs');

flatiron = require('flatiron');

ecstatic = require('ecstatic');

app = flatiron.app;

app.use(flatiron.plugins.http);

app.http.before = [
  ecstatic(__dirname + '/assets', {
    autoIndex: false,
    cache: true
  })
];

indexPage = '';

fs.readFile('./pages/index.coffee', 'utf8', function(err, data) {
  return indexPage += data;
});

sugarPage = '';

fs.readFile('./pages/sugar.coffee', 'utf8', function(err, data) {
  return sugarPage += data;
});

skeletonPage = '';

fs.readFile('./pages/skeleton.coffee', 'utf8', function(err, data) {
  return skeletonPage += data;
});

app.router.get('/', function() {
  this.res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  return this.res.end(coffeecup.render(indexPage));
});

app.router.get('/sugar', function() {
  this.res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  return this.res.end(coffeecup.render(sugarPage));
});

app.router.get('/skeleton', function() {
  this.res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  return this.res.end(coffeecup.render(skeletonPage));
});

app.start(3000);

console.log('listening on port 3000');
