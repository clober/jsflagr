/**
 * Flagr
 * Flagr is a feature flagging, A/B testing and dynamic configuration microservice
 *
 * OpenAPI spec version: 1.0.10
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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Flagr) {
      root.Flagr = {};
    }
    root.Flagr.PutSegmentRequest = factory(root.Flagr.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PutSegmentRequest model module.
   * @module model/PutSegmentRequest
   * @version 1.0.10
   */

  /**
   * Constructs a new <code>PutSegmentRequest</code>.
   * @alias module:model/PutSegmentRequest
   * @class
   * @param description {String} 
   * @param rolloutPercent {Number} 
   */
  var exports = function(description, rolloutPercent) {
    var _this = this;

    _this['description'] = description;
    _this['rolloutPercent'] = rolloutPercent;
  };

  /**
   * Constructs a <code>PutSegmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutSegmentRequest} obj Optional instance to populate.
   * @return {module:model/PutSegmentRequest} The populated <code>PutSegmentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('rolloutPercent')) {
        obj['rolloutPercent'] = ApiClient.convertToType(data['rolloutPercent'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Number} rolloutPercent
   */
  exports.prototype['rolloutPercent'] = undefined;



  return exports;
}));


