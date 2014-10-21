var EventEmitter = require('events').EventEmitter;

var getResources = function(number) {
  var e = new EventEmitter();             // Now we can emit/fire some events over this e-variable
  process.nextTick(function() {
    /* With this process.nextTick we can be sure, that the included function starts AFTER returning e,
       now this function runs asynchronous */
    var counter = 0;
    e.emit('start');                      // Now we emited/fired the "start event"
    var interval = setInterval(function() {
      e.emit('data',++counter);           // Now we emited/fired the "data event"
      if(counter === number) {
        e.emit('end',counter);            // Now we emited/fired the "end event"
        clearInterval(interval);          // We have to "kill" the interval
      }
    },100);
  });
  return(e);
}

var result = getResources(5);             // Now we have this function and the function in process.nextTick is going to run

result.on('start',function() {            // The emitted "start event" is caught and runs the following function
  console.log('I\'ve started!');
});

result.on('data',function(d) {            // The emitted "data event" is caught and runs the following function
  console.log('     I received data -> ' + d);
});

result.on('end',function(d) {             // The emitted "end event" is caught and runs the following function
  console.log('I\'m done, with ' + d + ' data events');
});
