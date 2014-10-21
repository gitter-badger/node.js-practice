var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Resource (number) {
  var self = this;                        // 'this' is an instance of EventEmitter by itself, we don't need to define a new one.
  process.nextTick(function() {
    var counter = 0;
    self.emit('start');
    var interval = setInterval(function() {
      self.emit('data',++counter);
      if(counter === number) {
        self.emit('end',counter);
        clearInterval(interval);
      }
    },100);
  });
}

util.inherits(Resource, EventEmitter);    // Resource inherits now from EventEmitter
module.exports = Resource;
