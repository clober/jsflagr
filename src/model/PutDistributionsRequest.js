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
    define(['ApiClient', 'model/Distribution'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Distribution'));
  } else {
    // Browser globals (root is window)
    if (!root.Flagr) {
      root.Flagr = {};
    }
    root.Flagr.PutDistributionsRequest = factory(root.Flagr.ApiClient, root.Flagr.Distribution);
  }
}(this, function(ApiClient, Distribution) {
  'use strict';




  /**
   * The PutDistributionsRequest model module.
   * @module model/PutDistributionsRequest
   * @version 1.0.10
   */

  /**
   * Constructs a new <code>PutDistributionsRequest</code>.
   * @alias module:model/PutDistributionsRequest
   * @class
   * @param distributions {Array.<module:model/Distribution>} 
   */
  var exports = function(distributions) {
    var _this = this;

    _this['distributions'] = distributions;
  };

  /**
   * Constructs a <code>PutDistributionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutDistributionsRequest} obj Optional instance to populate.
   * @return {module:model/PutDistributionsRequest} The populated <code>PutDistributionsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('distributions')) {
        obj['distributions'] = ApiClient.convertToType(data['distributions'], [Distribution]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Distribution>} distributions
   */
  exports.prototype['distributions'] = undefined;



  return exports;
}));


