getResult(function(error,result) {
  if(!error) {
    modfiyResult(result, function(error,content) {
      if(!error) {
        console.log(content);
      }
      else {
        console.error('An error occured, while getting content');
      }
    });
  }
  else {
    console.error('An error occured, while getting result');
  }
});
doSomethingElseAsync();



function getResult(callback) {
  console.log('Get Result');
  setTimeout(function() {
    console.log('Got Result');
    callback(null,'Result');
    return 0;
  },2000);
}

function modfiyResult(result,callback) {
  console.log('Modify Result');
  setTimeout(function() {
    callback(null,'Result modified');
    return 0;
  },2000);
}

function doSomethingElseAsync() {
  console.log('Do something else while getting result.');
  return 0;
}
