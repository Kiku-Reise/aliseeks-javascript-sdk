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
    root.AliseeksApi.ProductDetailsRequest = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.RealtimeCurrency);
  }
}(this, function(ApiClient, RealtimeCurrency) {
  'use strict';



  /**
   * The ProductDetailsRequest model module.
   * @module model/ProductDetailsRequest
   * @version 0.10.1
   */

  /**
   * Constructs a new <code>ProductDetailsRequest</code>.
   * Get product details request body when fetching product details from AliExpress 
   * @alias module:model/ProductDetailsRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProductDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductDetailsRequest} obj Optional instance to populate.
   * @return {module:model/ProductDetailsRequest} The populated <code>ProductDetailsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = RealtimeCurrency.constructFromObject(data['currency']);
      }
      if (data.hasOwnProperty('productId')) {
        obj['productId'] = ApiClient.convertToType(data['productId'], 'String');
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
      if (data.hasOwnProperty('timeZone')) {
        obj['timeZone'] = ApiClient.convertToType(data['timeZone'], 'String');
      }
      if (data.hasOwnProperty('needStoreInfo')) {
        obj['needStoreInfo'] = ApiClient.convertToType(data['needStoreInfo'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RealtimeCurrency} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * The Product ID 
   * @member {String} productId
   */
  exports.prototype['productId'] = undefined;
  /**
   * AliExpress locale to use. 
   * @member {String} locale
   * @default 'en_US'
   */
  exports.prototype['locale'] = 'en_US';
  /**
   * Timezone to format times in 
   * @member {String} timeZone
   * @default 'CST'
   */
  exports.prototype['timeZone'] = 'CST';
  /**
   * Whether we should fetch store information 
   * @member {Boolean} needStoreInfo
   * @default false
   */
  exports.prototype['needStoreInfo'] = false;



  return exports;
}));


