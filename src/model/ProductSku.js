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
    define(['ApiClient', 'model/Amount', 'model/ProductPropertyVariationIdentifier'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'), require('./ProductPropertyVariationIdentifier'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.ProductSku = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.Amount, root.AliseeksApi.ProductPropertyVariationIdentifier);
  }
}(this, function(ApiClient, Amount, ProductPropertyVariationIdentifier) {
  'use strict';



  /**
   * The ProductSku model module.
   * @module model/ProductSku
   * @version 0.10.2
   */

  /**
   * Constructs a new <code>ProductSku</code>.
   * The pricing option of the product 
   * @alias module:model/ProductSku
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProductSku</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductSku} obj Optional instance to populate.
   * @return {module:model/ProductSku} The populated <code>ProductSku</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('propertyIdentifiers')) {
        obj['propertyIdentifiers'] = ApiClient.convertToType(data['propertyIdentifiers'], [ProductPropertyVariationIdentifier]);
      }
      if (data.hasOwnProperty('propertyValueIds')) {
        obj['propertyValueIds'] = ApiClient.convertToType(data['propertyValueIds'], ['Number']);
      }
      if (data.hasOwnProperty('productId')) {
        obj['productId'] = ApiClient.convertToType(data['productId'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = Amount.constructFromObject(data['price']);
      }
      if (data.hasOwnProperty('stock')) {
        obj['stock'] = ApiClient.convertToType(data['stock'], 'Number');
      }
      if (data.hasOwnProperty('imageUrl')) {
        obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * List of property variation identifiers 
   * @member {Array.<module:model/ProductPropertyVariationIdentifier>} propertyIdentifiers
   */
  exports.prototype['propertyIdentifiers'] = undefined;
  /**
   * List of property value IDs 
   * @member {Array.<Number>} propertyValueIds
   */
  exports.prototype['propertyValueIds'] = undefined;
  /**
   * The ID of the product 
   * @member {String} productId
   */
  exports.prototype['productId'] = undefined;
  /**
   * @member {module:model/Amount} price
   */
  exports.prototype['price'] = undefined;
  /**
   * The stock of the product variation 
   * @member {Number} stock
   */
  exports.prototype['stock'] = undefined;
  /**
   * The image URL of the product variation 
   * @member {String} imageUrl
   */
  exports.prototype['imageUrl'] = undefined;



  return exports;
}));


