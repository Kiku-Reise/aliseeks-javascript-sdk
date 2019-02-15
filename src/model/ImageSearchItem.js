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
    root.AliseeksApi.ImageSearchItem = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.Amount);
  }
}(this, function(ApiClient, Amount) {
  'use strict';



  /**
   * The ImageSearchItem model module.
   * @module model/ImageSearchItem
   * @version 1.0.0-rc.1
   */

  /**
   * Constructs a new <code>ImageSearchItem</code>.
   * The search item in a realtime image search 
   * @alias module:model/ImageSearchItem
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ImageSearchItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageSearchItem} obj Optional instance to populate.
   * @return {module:model/ImageSearchItem} The populated <code>ImageSearchItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('imageUrl')) {
        obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = Amount.constructFromObject(data['price']);
      }
      if (data.hasOwnProperty('orders')) {
        obj['orders'] = ApiClient.convertToType(data['orders'], 'Number');
      }
    }
    return obj;
  }

  /**
   * AliExpress product ID 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The title / subject of the AliExpress product 
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * The image of the item 
   * @member {String} imageUrl
   */
  exports.prototype['imageUrl'] = undefined;
  /**
   * @member {module:model/Amount} price
   */
  exports.prototype['price'] = undefined;
  /**
   * The orders of the item 
   * @member {Number} orders
   */
  exports.prototype['orders'] = undefined;



  return exports;
}));


