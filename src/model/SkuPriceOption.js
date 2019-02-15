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
    define(['ApiClient', 'model/Amount', 'model/SkuPriceOptionProperty'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'), require('./SkuPriceOptionProperty'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.SkuPriceOption = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.Amount, root.AliseeksApi.SkuPriceOptionProperty);
  }
}(this, function(ApiClient, Amount, SkuPriceOptionProperty) {
  'use strict';



  /**
   * The SkuPriceOption model module.
   * @module model/SkuPriceOption
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>SkuPriceOption</code>.
   * A SKU with price information 
   * @alias module:model/SkuPriceOption
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SkuPriceOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SkuPriceOption} obj Optional instance to populate.
   * @return {module:model/SkuPriceOption} The populated <code>SkuPriceOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('originalPrice')) {
        obj['originalPrice'] = Amount.constructFromObject(data['originalPrice']);
      }
      if (data.hasOwnProperty('discountedPrice')) {
        obj['discountedPrice'] = Amount.constructFromObject(data['discountedPrice']);
      }
      if (data.hasOwnProperty('bulkPrice')) {
        obj['bulkPrice'] = Amount.constructFromObject(data['bulkPrice']);
      }
      if (data.hasOwnProperty('bulkQuantity')) {
        obj['bulkQuantity'] = ApiClient.convertToType(data['bulkQuantity'], 'Number');
      }
      if (data.hasOwnProperty('skuImage')) {
        obj['skuImage'] = ApiClient.convertToType(data['skuImage'], 'String');
      }
      if (data.hasOwnProperty('discountedStock')) {
        obj['discountedStock'] = ApiClient.convertToType(data['discountedStock'], 'Number');
      }
      if (data.hasOwnProperty('stock')) {
        obj['stock'] = ApiClient.convertToType(data['stock'], 'Number');
      }
      if (data.hasOwnProperty('skuIdentifier')) {
        obj['skuIdentifier'] = ApiClient.convertToType(data['skuIdentifier'], 'String');
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], [SkuPriceOptionProperty]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Amount} originalPrice
   */
  exports.prototype['originalPrice'] = undefined;
  /**
   * @member {module:model/Amount} discountedPrice
   */
  exports.prototype['discountedPrice'] = undefined;
  /**
   * @member {module:model/Amount} bulkPrice
   */
  exports.prototype['bulkPrice'] = undefined;
  /**
   * The quantity that needs to be ordered to qualify for the bulk discount 
   * @member {Number} bulkQuantity
   */
  exports.prototype['bulkQuantity'] = undefined;
  /**
   * The image associated with the sku 
   * @member {String} skuImage
   */
  exports.prototype['skuImage'] = undefined;
  /**
   * The stock left at the discounted price 
   * @member {Number} discountedStock
   */
  exports.prototype['discountedStock'] = undefined;
  /**
   * The stock left for the sku 
   * @member {Number} stock
   */
  exports.prototype['stock'] = undefined;
  /**
   * The identifier of the sku 
   * @member {String} skuIdentifier
   */
  exports.prototype['skuIdentifier'] = undefined;
  /**
   * The properties associated with this sku 
   * @member {Array.<module:model/SkuPriceOptionProperty>} properties
   */
  exports.prototype['properties'] = undefined;



  return exports;
}));


