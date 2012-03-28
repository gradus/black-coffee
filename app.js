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
  return this.res.html(app.render(this.res, index, {
    black: '.active',
    css: "app",
    title: "I like my Coffee Black"
  }));
});

app.router.get('/sugar', function() {
  return this.res.html(app.render(this.res, sugar, {
    sugar: '.active',
    css: "sugar",
    title: "I like my Coffee With a little Sugar"
  }));
});

app.router.get('/cream', function() {
  return this.res.html(app.render(this.res, cream, {
    cream: '.active',
    css: "app",
    title: "I like my Coffee with a splash of creamer"
  }));
});

app.router.get('/skeleton', function() {
  return this.res.html(app.render(this.res, skeleton));
});

app.start(3000);

console.log('listening on port 3000');
