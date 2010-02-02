node-couch - A CouchDB client for node.js
=========================================

If the header is not enough for you:

* [CouchDB](http://couchdb.org/)
* [node.js](http://tinyclouds.org/node/)

The API is inspired by jquery.node.js.

This is a very initial check-in, please bear with me :-)

Feedback welcome.

To Do
-----

* Make the tests work again. The test files run to completion now, but they don't actually do anything in recent versions of node.

* Add the ability to pass additional HTTP headers with the client requests. This is needed to interact with CouchDB hosts (e.g., [Cloudant](http://cloudant.com)) that require the HTTP Authorization header for authentication and the Host header for service resolution.
