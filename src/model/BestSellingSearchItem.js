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
    define(['ApiClient', 'model/SearchPriceOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SearchPriceOption'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.BestSellingSearchItem = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.SearchPriceOption);
  }
}(this, function(ApiClient, SearchPriceOption) {
  'use strict';



  /**
   * The BestSellingSearchItem model module.
   * @module model/BestSellingSearchItem
   * @version 1.0.0-rc.1
   */

  /**
   * Constructs a new <code>BestSellingSearchItem</code>.
   * A best selling item 
   * @alias module:model/BestSellingSearchItem
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>BestSellingSearchItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BestSellingSearchItem} obj Optional instance to populate.
   * @return {module:model/BestSellingSearchItem} The populated <code>BestSellingSearchItem</code> instance.
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
      if (data.hasOwnProperty('ratings')) {
        obj['ratings'] = ApiClient.convertToType(data['ratings'], 'Number');
      }
      if (data.hasOwnProperty('orders')) {
        obj['orders'] = ApiClient.convertToType(data['orders'], 'Number');
      }
      if (data.hasOwnProperty('detailUrl')) {
        obj['detailUrl'] = ApiClient.convertToType(data['detailUrl'], 'String');
      }
      if (data.hasOwnProperty('storeDetailUrl')) {
        obj['storeDetailUrl'] = ApiClient.convertToType(data['storeDetailUrl'], 'String');
      }
      if (data.hasOwnProperty('priceOptions')) {
        obj['priceOptions'] = ApiClient.convertToType(data['priceOptions'], [SearchPriceOption]);
      }
    }
    return obj;
  }

  /**
   * The ID of the product 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The title of the product 
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * The url of the product image 
   * @member {String} imageUrl
   */
  exports.prototype['imageUrl'] = undefined;
  /**
   * The product ratings 
   * @member {Number} ratings
   */
  exports.prototype['ratings'] = undefined;
  /**
   * The number of orders that the item has 
   * @member {Number} orders
   */
  exports.prototype['orders'] = undefined;
  /**
   * The detail URL of the item 
   * @member {String} detailUrl
   */
  exports.prototype['detailUrl'] = undefined;
  /**
   * The store detail URL for the item 
   * @member {String} storeDetailUrl
   */
  exports.prototype['storeDetailUrl'] = undefined;
  /**
   * The price options of the item 
   * @member {Array.<module:model/SearchPriceOption>} priceOptions
   */
  exports.prototype['priceOptions'] = undefined;



  return exports;
}));


