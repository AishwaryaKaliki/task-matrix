var expect = require("chai").expect;
var request = require("request");
var app = require("../app/index");

describe("Index", function() {
    var url = "http://localhost:3000/"
    
    it("returns status 200", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();  
      });
    });

    it("says Hello World!", function() {
      request(url, function(error, response, body) {
        expect(body).to.equal("Hello World!");
        done();  
      });
    });
});