var app, coffeecup, creamer, ecstatic, flatiron, index, skeleton, sugar, view;

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

app.use(creamer);

view = function(name) {
  return "" + __dirname + "/pages/" + name;
};

index = require(view("index"));

sugar = require(view("sugar"));

skeleton = require(view("skeleton"));

app.router.get('/', function() {
  return this.res.html(app.render(this.res, index, {
    home: '.active'
  }));
});

app.router.get('/sugar', function() {
  return this.res.html(app.render(this.res, sugar, {
    home: '.active'
  }));
});

app.router.get('/skeleton', function() {
  return this.res.html(app.render(this.res, skeleton, {
    home: '.active'
  }));
});

app.start(3000);

console.log('listening on port 3000');
