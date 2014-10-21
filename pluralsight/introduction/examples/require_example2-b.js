var one = require('./require_example2-a');

one.doIt(23,function(err,result) {
  if(!err) {
    console.log(result);
  }
});

console.log(one.count);
