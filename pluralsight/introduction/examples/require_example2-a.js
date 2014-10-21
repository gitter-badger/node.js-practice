var count = 2;
var foo = 'Foo';
var doIt = function(i,callback)
{
   callback(null,i*count);
}

module.exports.doIt = doIt;
module.exports.count = count;
