/*
 * Flagr
 * Flagr is a feature flagging, A/B testing and dynamic configuration microservice. The base path for all the APIs is \"/api/v1\". 
 *
 * OpenAPI spec version: 1.1.10
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Jsflagr);
  }
}(this, function(expect, Jsflagr) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Jsflagr.HealthApi();
  });

  describe('(package)', function() {
    describe('HealthApi', function() {
      describe('getHealth', function() {
        it('should call getHealth successfully', function(done) {
          // TODO: uncomment getHealth call and complete the assertions
          /*

          instance.getHealth(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Jsflagr.Health);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
