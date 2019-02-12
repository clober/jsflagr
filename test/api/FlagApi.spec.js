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
    instance = new Jsflagr.FlagApi();
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

  describe('FlagApi', function() {
    describe('createFlag', function() {
      it('should call createFlag successfully', function(done) {
        //uncomment below and update the code to test createFlag
        //instance.createFlag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFlag', function() {
      it('should call deleteFlag successfully', function(done) {
        //uncomment below and update the code to test deleteFlag
        //instance.deleteFlag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findFlags', function() {
      it('should call findFlags successfully', function(done) {
        //uncomment below and update the code to test findFlags
        //instance.findFlags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFlag', function() {
      it('should call getFlag successfully', function(done) {
        //uncomment below and update the code to test getFlag
        //instance.getFlag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFlagEntityTypes', function() {
      it('should call getFlagEntityTypes successfully', function(done) {
        //uncomment below and update the code to test getFlagEntityTypes
        //instance.getFlagEntityTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFlagSnapshots', function() {
      it('should call getFlagSnapshots successfully', function(done) {
        //uncomment below and update the code to test getFlagSnapshots
        //instance.getFlagSnapshots(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putFlag', function() {
      it('should call putFlag successfully', function(done) {
        //uncomment below and update the code to test putFlag
        //instance.putFlag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setFlagEnabled', function() {
      it('should call setFlagEnabled successfully', function(done) {
        //uncomment below and update the code to test setFlagEnabled
        //instance.setFlagEnabled(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
