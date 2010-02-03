process.mixin(GLOBAL, require("mjsunit"));
process.mixin(GLOBAL, require("../../module/node-couch"));

(function() {
	function unwantedError(result) {
		throw("Unwanted error" + JSON.stringify(result));
	}

	var result = 0;

	CouchDB.generateUUIDs({
		count : 10,
		success : function(response) {
			result++;
			assertEquals(10, response.length, "not honoring count");
		},
		error : unwantedError
	});
	CouchDB.generateUUIDs({
		success : function(response) {
			result++;
			assertEquals(100, response.length, "not honoring default count");
		},
		error : unwantedError
	});

	process.addListener("exit", function(code) {
		assertEquals(2, result, "Number of callbacks mismatch");
	});
}());
