process.mixin(GLOBAL, require("mjsunit"));
process.mixin(GLOBAL, require("../../module/node-couch"));

function unwantedError(result) {
	throw("Unwanted error" + JSON.stringify(result));
}

var result;

function onLoad () {
	CouchDB.activeTasks({
		success : function(response) {
			result = response;
		},
		error : unwantedError
	});
}

function onExit() {
	assertInstanceof(result, Array);
}
