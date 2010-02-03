var sys = require("sys");
process.mixin(GLOBAL, require("mjsunit"));
process.mixin(GLOBAL, require("../../module/node-couch"));

(function() {
	var result;

	function unwantedError(result) {
		throw("Unwanted error" + JSON.stringify(result));
	}

	CouchDB.activeTasks({
		success : function(response) {
			result = response;
		},
		error : unwantedError
	});
}());
