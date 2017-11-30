// Required libs
var FeedParser = require('feedparser'),
    request = require('request');

// Initialization
var feedparser = new FeedParser();

var feeds = [ 'http://vuxml.freebsd.org/freebsd/rss.xml', 'https://usn.ubuntu.com/usn/rss.xml'];

debugger;

var req = request(feeds[1]);

// Request stream handling
req.on('error', function (error) {
  this.emit('error', new Error('Something went wrong with the instantiating the `request`'));
})

req.on('response', function (res) {
  var stream = this; // `this` == req which is a stream with an EventEmitter listening for response?

  if (res.statusCode !== 200) {
    this.emit('error', new Error('Expected status code 200, but received...'));
  }

  else {
    this.pipe(feedparser);
  }

});

// FeedParser stream handling
feedparser.on('error', function (error) {
  this.emit('error', new Error('Something went wrong with the feed parser, oh no!'));
});

feedparser.on('readable', function() {
  var meta = this.meta,
      item;

  while (item = this.read()) {
    console.log(item);
  }

});
