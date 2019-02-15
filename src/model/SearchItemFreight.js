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
    root.AliseeksApi.SearchItemFreight = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.Amount);
  }
}(this, function(ApiClient, Amount) {
  'use strict';



  /**
   * The SearchItemFreight model module.
   * @module model/SearchItemFreight
   * @version 1.0.0-rc.1
   */

  /**
   * Constructs a new <code>SearchItemFreight</code>.
   * Freight information for a search item 
   * @alias module:model/SearchItemFreight
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SearchItemFreight</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchItemFreight} obj Optional instance to populate.
   * @return {module:model/SearchItemFreight} The populated <code>SearchItemFreight</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('price')) {
        obj['price'] = Amount.constructFromObject(data['price']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Amount} price
   */
  exports.prototype['price'] = undefined;
  /**
   * The freight type 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


