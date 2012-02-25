(function() {
  var request;

  require('./app');

  request = require('request');

  describe('app', function() {
    return it('should respond to root', function(done) {
      return request.get('http://localhost:3000/', function(e, b, r) {
        console.log(b);
        return done();
      });
    });
  });

}).call(this);
