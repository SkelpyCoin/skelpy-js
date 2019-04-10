var Buffer = require("buffer/").Buffer;
var should = require("should");
var skelpy = require("../index.js");

describe("skelpy JS", function () {

	it("should be ok", function () {
		(skelpy).should.be.ok;
	});

	it("should be object", function () {
		(skelpy).should.be.type("object");
	});

	it("should have properties", function () {
		var properties = ["transaction", "signature", "vote", "delegate", "crypto"];

		properties.forEach(function (property) {
			(skelpy).should.have.property(property);
		});
	});

});
