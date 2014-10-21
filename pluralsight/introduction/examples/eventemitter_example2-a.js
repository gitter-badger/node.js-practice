var Resource = require('./eventemitter_example2-b.js');
var result = new Resource(5);
/* Now we have this function and the function in process.nextTick is going to run
   Now we need to generate an instance of this module here */

result.on('start',function() {            // The emitted "start event" is caught and runs the following function
  console.log('I\'ve started!');
});

result.on('data',function(d) {            // The emitted "data event" is caught and runs the following function
  console.log('     I received data -> ' + d);
});

result.on('end',function(d) {             // The emitted "end event" is caught and runs the following function
  console.log('I\'m done, with ' + d + ' data events');
});
