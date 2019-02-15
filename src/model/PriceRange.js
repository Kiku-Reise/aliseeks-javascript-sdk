/**
 * Aliseeks API
 * AliExpress product searching and product details retrieval API. 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Amount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.PriceRange = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.Amount);
  }
}(this, function(ApiClient, Amount) {
  'use strict';



  /**
   * The PriceRange model module.
   * @module model/PriceRange
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>PriceRange</code>.
   * A range of type price 
   * @alias module:model/PriceRange
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PriceRange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PriceRange} obj Optional instance to populate.
   * @return {module:model/PriceRange} The populated <code>PriceRange</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('min')) {
        obj['min'] = Amount.constructFromObject(data['min']);
      }
      if (data.hasOwnProperty('max')) {
        obj['max'] = Amount.constructFromObject(data['max']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Amount} min
   */
  exports.prototype['min'] = undefined;
  /**
   * @member {module:model/Amount} max
   */
  exports.prototype['max'] = undefined;



  return exports;
}));


