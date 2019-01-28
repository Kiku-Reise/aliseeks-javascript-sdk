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
    define(['ApiClient', 'model/Amount', 'model/ProductBulkOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'), require('./ProductBulkOption'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.ProductPriceOption = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.Amount, root.AliseeksApi.ProductBulkOption);
  }
}(this, function(ApiClient, Amount, ProductBulkOption) {
  'use strict';



  /**
   * The ProductPriceOption model module.
   * @module model/ProductPriceOption
   * @version 0.10.1
   */

  /**
   * Constructs a new <code>ProductPriceOption</code>.
   * A product price option 
   * @alias module:model/ProductPriceOption
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProductPriceOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductPriceOption} obj Optional instance to populate.
   * @return {module:model/ProductPriceOption} The populated <code>ProductPriceOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('maxAmount')) {
        obj['maxAmount'] = Amount.constructFromObject(data['maxAmount']);
      }
      if (data.hasOwnProperty('maxAmountPerPiece')) {
        obj['maxAmountPerPiece'] = Amount.constructFromObject(data['maxAmountPerPiece']);
      }
      if (data.hasOwnProperty('minAmount')) {
        obj['minAmount'] = Amount.constructFromObject(data['minAmount']);
      }
      if (data.hasOwnProperty('minAmountPerPiece')) {
        obj['minAmountPerPiece'] = Amount.constructFromObject(data['minAmountPerPiece']);
      }
      if (data.hasOwnProperty('minimumPurchase')) {
        obj['minimumPurchase'] = ApiClient.convertToType(data['minimumPurchase'], 'Number');
      }
      if (data.hasOwnProperty('processingTime')) {
        obj['processingTime'] = ApiClient.convertToType(data['processingTime'], 'Number');
      }
      if (data.hasOwnProperty('bulkOption')) {
        obj['bulkOption'] = ProductBulkOption.constructFromObject(data['bulkOption']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Amount} maxAmount
   */
  exports.prototype['maxAmount'] = undefined;
  /**
   * @member {module:model/Amount} maxAmountPerPiece
   */
  exports.prototype['maxAmountPerPiece'] = undefined;
  /**
   * @member {module:model/Amount} minAmount
   */
  exports.prototype['minAmount'] = undefined;
  /**
   * @member {module:model/Amount} minAmountPerPiece
   */
  exports.prototype['minAmountPerPiece'] = undefined;
  /**
   * The minimum purchase amount for this price option 
   * @member {Number} minimumPurchase
   */
  exports.prototype['minimumPurchase'] = undefined;
  /**
   * The amount of time to process an order in this option 
   * @member {Number} processingTime
   */
  exports.prototype['processingTime'] = undefined;
  /**
   * @member {module:model/ProductBulkOption} bulkOption
   */
  exports.prototype['bulkOption'] = undefined;



  return exports;
}));


