var app, coffeecup, cream, creamer, ecstatic, flatiron, index, skeleton, sugar, view;

coffeecup = require('coffeecup');

creamer = require('creamer');

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

app.use(creamer, {
  layout: require(__dirname + '/pages/layout')
});

view = function(name) {
  return "" + __dirname + "/pages/" + name;
};

index = require(view("index"));

sugar = require(view("sugar"));

cream = require(view("cream"));

skeleton = require(view("skeleton"));

app.router.get('/', function() {
  return this.res.html(app.render(this.res, index));
});

app.router.get('/sugar', function() {
  return this.res.html(app.render(this.res, sugar));
});

app.router.get('/cream', function() {
  return this.res.html(app.render(this.res, cream));
});

app.router.get('/skeleton', function() {
  return this.res.html(app.render(this.res, skeleton));
});

app.start(3000);

console.log('listening on port 3000');
