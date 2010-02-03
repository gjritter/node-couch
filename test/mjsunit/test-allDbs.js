process.mixin(GLOBAL, require("mjsunit"));
process.mixin(GLOBAL, require("../../module/node-couch"));

(function() {
	function unwantedError(result) {
		throw("Unwanted error" + JSON.stringify(result));
	}

	var result;

	CouchDB.allDbs({
		success : function(response) {
			result = response;
		},
		error : unwantedError
	});

	process.addListener("exit", function(code) {
		assertInstanceof(result, Array);
		for (var ii = 0; ii < result.length; ii++) {
			assertEquals("string", typeof result[ii]);
		}
	});
}());
