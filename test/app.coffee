require './app'
request = require 'request'

describe 'app', ->
  it 'should respond to root', (done) ->
    request.get 'http://localhost:3000/', (e, b, r) ->
      if b == undefined
        console.log 'fire up your app with node server.js for this test to pass' 
      b.should != undefined
      done()
