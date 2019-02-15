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
    define(['ApiClient', 'model/SearchItemFreight', 'model/SearchPriceOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SearchItemFreight'), require('./SearchPriceOption'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.RealtimeSearchItem = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.SearchItemFreight, root.AliseeksApi.SearchPriceOption);
  }
}(this, function(ApiClient, SearchItemFreight, SearchPriceOption) {
  'use strict';



  /**
   * The RealtimeSearchItem model module.
   * @module model/RealtimeSearchItem
   * @version 1.0.0-rc.1
   */

  /**
   * Constructs a new <code>RealtimeSearchItem</code>.
   * A realtime search item 
   * @alias module:model/RealtimeSearchItem
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>RealtimeSearchItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RealtimeSearchItem} obj Optional instance to populate.
   * @return {module:model/RealtimeSearchItem} The populated <code>RealtimeSearchItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('imageUrl')) {
        obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('ratings')) {
        obj['ratings'] = ApiClient.convertToType(data['ratings'], 'Number');
      }
      if (data.hasOwnProperty('orders')) {
        obj['orders'] = ApiClient.convertToType(data['orders'], 'Number');
      }
      if (data.hasOwnProperty('freight')) {
        obj['freight'] = SearchItemFreight.constructFromObject(data['freight']);
      }
      if (data.hasOwnProperty('priceOptions')) {
        obj['priceOptions'] = ApiClient.convertToType(data['priceOptions'], [SearchPriceOption]);
      }
    }
    return obj;
  }

  /**
   * The AliExpress product ID 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The image URL for the item 
   * @member {String} imageUrl
   */
  exports.prototype['imageUrl'] = undefined;
  /**
   * The subject / title of the item 
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * The ratings of the item 
   * @member {Number} ratings
   */
  exports.prototype['ratings'] = undefined;
  /**
   * The number of orders of the item 
   * @member {Number} orders
   */
  exports.prototype['orders'] = undefined;
  /**
   * @member {module:model/SearchItemFreight} freight
   */
  exports.prototype['freight'] = undefined;
  /**
   * The price options for the item 
   * @member {Array.<module:model/SearchPriceOption>} priceOptions
   */
  exports.prototype['priceOptions'] = undefined;



  return exports;
}));


