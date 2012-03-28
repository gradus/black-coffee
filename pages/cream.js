
module.exports = function() {
  h1({
    "class": 'black_coffee'
  }, function() {
    return 'Black Coffee';
  });
  h4({
    "class": 'like_it_with_cream'
  }, function() {
    return '"sometimes with a splash of cream"';
  });
  p({
    "class": 'text'
  }, function() {
    text('Built w/ ');
    a({
      href: 'http://coffeescript.org/'
    }, function() {
      return 'CoffeeScript';
    });
    text(' and ');
    return a({
      href: 'http://http://flatironjs.org/'
    }, function() {
      return 'Flatiron';
    });
  });
  img({
    height: '300px',
    "class": 'fade_img',
    src: "/images/coffee_cream.jpg"
  });
  p({
    "class": 'credits',
    style: 'float:left;'
  }, function() {
    return a({
      href: 'http://easydoc.org/blackcoffee'
    }, function() {
      return 'black-coffee docs';
    });
  });
  p({
    "class": 'credits',
    style: 'float:right;padding-right:180px;'
  }, function() {
    text('created by ');
    return a({
      href: 'http://gradus.github.com/'
    }, function() {
      return 'Kris Windham';
    });
  });
  return coffeescript(function() {
    return $(document).ready(function() {
      $('.black_coffee').hide();
      $('.like_it_with_cream').hide();
      $('.text').hide();
      $('.fade_img').hide();
      $('.credits').hide();
      $('.black_coffee').fadeIn(1000);
      $('.like_it_with_cream').fadeIn(3000);
      $('.text').fadeIn(4000);
      $('.fade_img').fadeIn(8000);
      return $('.credits').fadeIn(10000);
    });
  });
};
