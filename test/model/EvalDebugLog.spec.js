/**
 * Flagr
 * Flagr is a feature flagging, A/B testing and dynamic configuration microservice. The base path for all the APIs is \"/api/v1\". 
 *
 * OpenAPI spec version: 1.0.13
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
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
    instance = new Jsflagr.EvalDebugLog();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EvalDebugLog', function() {
    it('should create an instance of EvalDebugLog', function() {
      // uncomment below and update the code to test EvalDebugLog
      //var instance = new Jsflagr.EvalDebugLog();
      //expect(instance).to.be.a(Jsflagr.EvalDebugLog);
    });

    it('should have the property segmentDebugLogs (base name: "segmentDebugLogs")', function() {
      // uncomment below and update the code to test the property segmentDebugLogs
      //var instance = new Jsflagr.EvalDebugLog();
      //expect(instance).to.be();
    });

    it('should have the property msg (base name: "msg")', function() {
      // uncomment below and update the code to test the property msg
      //var instance = new Jsflagr.EvalDebugLog();
      //expect(instance).to.be();
    });

  });

}));
