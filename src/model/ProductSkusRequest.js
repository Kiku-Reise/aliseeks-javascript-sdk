/**
 * Aliseeks API
 * AliExpress product searching and product details retrieval API. 
 *
 * OpenAPI spec version: 0.10.1
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
    define(['ApiClient', 'model/RealtimeCurrency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RealtimeCurrency'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.ProductSkusRequest = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.RealtimeCurrency);
  }
}(this, function(ApiClient, RealtimeCurrency) {
  'use strict';



  /**
   * The ProductSkusRequest model module.
   * @module model/ProductSkusRequest
   * @version 0.10.1
   */

  /**
   * Constructs a new <code>ProductSkusRequest</code>.
   * Get product variations request body 
   * @alias module:model/ProductSkusRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProductSkusRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductSkusRequest} obj Optional instance to populate.
   * @return {module:model/ProductSkusRequest} The populated <code>ProductSkusRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('productId')) {
        obj['productId'] = ApiClient.convertToType(data['productId'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = RealtimeCurrency.constructFromObject(data['currency']);
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Product ID 
   * @member {String} productId
   */
  exports.prototype['productId'] = undefined;
  /**
   * @member {module:model/RealtimeCurrency} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * AliExpress language to retrieve content in. Use locale. 
   * @member {String} language
   * @default 'en_US'
   */
  exports.prototype['language'] = 'en_US';
  /**
   * AliExpress locale to use. 
   * @member {String} locale
   * @default 'en_US'
   */
  exports.prototype['locale'] = 'en_US';



  return exports;
}));


