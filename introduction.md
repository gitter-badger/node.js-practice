Node.js - Introduction
=======
With node.js you can build network applications using JavaScript as serverside-language. For example a **websocket server** or any **real-time data apps**.
Node.js isn't a web-framework and it's not made for beginners because it's very low level. If you want to work with node.js you should have some experiences
with JavaScript. Node.js bases on a non-blocking, event-driven model that makes it lightweight and efficient, *perfect for data-intensive real-time applications
that run across distributed devices*.

##Blocking or Non-Blocking / Sync or Async
Now we want to differ these to keywords.

####theoretical Example
**Blocking Code**
```
1. Read file from file-system.
2. Print contents
3. Do something else
```
This tasks will be done step by step.

**Non-Blocking Code**
```
Read file from file-system
  whenever completed, print contents // This is a callback, which is called when the file is read.
Do something else
```
This tasks are running asynchronously, that means the reading process starts and after that we do something else an
it doesn't matter if the reading process is still running or already finished. When the reading process is finished, the
call back will be called, which will print the contents.

####practical Example
Let's see a more practical example about this

**Blocking Code**
```js
var contents = fs.readFileSync('/etc/hosts');
console.log(contents);
console.log('Doing something else');
```

**Non-Blocking Code**
```js
fs.readFile('/etc/hosts', function(err, contents) {
  console.log(contents); // This is the callback, initialized with function() as a second parameter
});
console.log('Doing something else') // This will run while the reading process is still running.
```

This **Non-Blocking Example** could be written in another way:
```js
var callback = function(err,contents) {
  console.log(contents);
}
fs.readFile('/etc/hosts', callback);
```

In a second step we want to read one more file:
```js
...
fs.readFile('/etc/hosts', callback);
fs.readFile('/etc/inetcfg', callback);
```
So if we want to do this in a **Blocking Way** the second file **won't be read until the first reading process is finished**.
But with the **Non-Blocking Way** they are read parallel which means the time needed to read this files will be shorter.

##Event-Driven

> *"JavaScript has certain characteristics that make it very different than other dynamic languages, namely that it has no concept of threads.
> Its model of concurrency is completely based around events"* - **Ryan Dahl**, founder of Node.js

That's the reason why node.js is written in JavaScript.
