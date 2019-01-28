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
    root.AliseeksApi.ImageSearchRequest = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.RealtimeCurrency);
  }
}(this, function(ApiClient, RealtimeCurrency) {
  'use strict';



  /**
   * The ImageSearchRequest model module.
   * @module model/ImageSearchRequest
   * @version 0.10.1
   */

  /**
   * Constructs a new <code>ImageSearchRequest</code>.
   * The search request body for searching AliExpress by image 
   * @alias module:model/ImageSearchRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ImageSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageSearchRequest} obj Optional instance to populate.
   * @return {module:model/ImageSearchRequest} The populated <code>ImageSearchRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('uploadKey')) {
        obj['uploadKey'] = ApiClient.convertToType(data['uploadKey'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = RealtimeCurrency.constructFromObject(data['currency']);
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('shipToCountry')) {
        obj['shipToCountry'] = ApiClient.convertToType(data['shipToCountry'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} uploadKey
   */
  exports.prototype['uploadKey'] = undefined;
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
   * Two character iso country code 
   * @member {String} shipToCountry
   */
  exports.prototype['shipToCountry'] = undefined;
  /**
   * AliExpress category to search in
   * @member {Number} category
   */
  exports.prototype['category'] = undefined;



  return exports;
}));


