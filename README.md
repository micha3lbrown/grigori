# grigori
Vulnerability feed parser

## Monitored vulnerability feeds
- [Ubuntu Security Notices](https://usn.ubuntu.com/usn/rss.xml)
- [FreeBSD VuXML](http://vuxml.freebsd.org/freebsd/rss.xml)

## Notes
- [Feed Parser](https://github.com/danmactough/node-feedparser#what-is-the-parsed-output-produced-by-feedparser) is what I'm using to parse XML feeds.

Node 101
`Events`: Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") periodically emit named events that cause Function objects ("listeners") to be called.
|
|--> EventEmitter --> Stream

`Stream`: A stream is an abstract interface for working with streaming data in Node.js. The stream module provides a base API that makes it easy to build objects that implement the stream interface. [More on streams here](https://www.sitepoint.com/basics-node-js-streams/)

## TODO
- [x] get XML feedparsing working and inspect objects
- [ ] investigate other feeds to find similarities
- [ ] scaffold a schema
- [ ] storage options, probably SQL based
