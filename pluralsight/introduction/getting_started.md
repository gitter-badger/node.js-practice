Getting Started with Node.js
============================

Node.js is a server-side JavaScript platform, invented by Ryan Dahl.

It's basing on three points:
* libuv, is a high performance, cross-plattform evented i/O Library
* Google's V8-JavaScript engine
* JS and C++, specifically developed for itself.

If you have installed Node.js you can start it like this:
```
testuser:~$ node
```

After this command, node will start and you're able to communicate with it. For example just type in
`console.log('Hello World')` and you will get `Hello World`.

##First file
Now we should create a file with this content:
#####timeout.js
```js
setTimeout(function() {
  console.log('world');
},1000);
console.log('Hello');
```

Run it with `node timeout.js` and  you will get
`Hello` and `world` after one second.

> What we are doing here is using the node.js eventloop.
> Node.js is async an that's it why first the `Hello` appears before the `world`

##First web-server

Now we want to setup a small web-server.
#####server.js
```js
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');
```

Run it with `node server.js` and open your browser and visit the printed [http://127.0.0.1:1337/]url.


##Writing asynchronous code
In Node.js we write asynchronous code, that means we will work with callbacks.
***
[visit the course :rocket:](http://www.pluralsight.com/courses/node-intro) - [go to the README of pluralsight :books:](../README.md)

[Next Module :arrow_forward:](modules_require_npm.md)
