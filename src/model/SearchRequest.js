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
    define(['ApiClient', 'model/DoubleRange', 'model/IntegerRange', 'model/NonRealtimeCurrency', 'model/StringRange'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DoubleRange'), require('./IntegerRange'), require('./NonRealtimeCurrency'), require('./StringRange'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.SearchRequest = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.DoubleRange, root.AliseeksApi.IntegerRange, root.AliseeksApi.NonRealtimeCurrency, root.AliseeksApi.StringRange);
  }
}(this, function(ApiClient, DoubleRange, IntegerRange, NonRealtimeCurrency, StringRange) {
  'use strict';



  /**
   * The SearchRequest model module.
   * @module model/SearchRequest
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>SearchRequest</code>.
   * Non realtime search request body 
   * @alias module:model/SearchRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchRequest} obj Optional instance to populate.
   * @return {module:model/SearchRequest} The populated <code>SearchRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = NonRealtimeCurrency.constructFromObject(data['currency']);
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'Number');
      }
      if (data.hasOwnProperty('includeSubcategories')) {
        obj['includeSubcategories'] = ApiClient.convertToType(data['includeSubcategories'], 'Boolean');
      }
      if (data.hasOwnProperty('sortDirection')) {
        obj['sortDirection'] = ApiClient.convertToType(data['sortDirection'], 'String');
      }
      if (data.hasOwnProperty('ratingsRange')) {
        obj['ratingsRange'] = DoubleRange.constructFromObject(data['ratingsRange']);
      }
      if (data.hasOwnProperty('quantityRange')) {
        obj['quantityRange'] = IntegerRange.constructFromObject(data['quantityRange']);
      }
      if (data.hasOwnProperty('priceRange')) {
        obj['priceRange'] = DoubleRange.constructFromObject(data['priceRange']);
      }
      if (data.hasOwnProperty('unitPriceRange')) {
        obj['unitPriceRange'] = DoubleRange.constructFromObject(data['unitPriceRange']);
      }
      if (data.hasOwnProperty('orderRange')) {
        obj['orderRange'] = IntegerRange.constructFromObject(data['orderRange']);
      }
      if (data.hasOwnProperty('itemIdRange')) {
        obj['itemIdRange'] = StringRange.constructFromObject(data['itemIdRange']);
      }
      if (data.hasOwnProperty('freightTypes')) {
        obj['freightTypes'] = ApiClient.convertToType(data['freightTypes'], ['String']);
      }
      if (data.hasOwnProperty('skip')) {
        obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('scrollPagination')) {
        obj['scrollPagination'] = ApiClient.convertToType(data['scrollPagination'], 'Boolean');
      }
      if (data.hasOwnProperty('scrollIdentifier')) {
        obj['scrollIdentifier'] = ApiClient.convertToType(data['scrollIdentifier'], 'String');
      }
    }
    return obj;
  }

  /**
   * The search query 
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * @member {module:model/SearchRequest.SortEnum} sort
   * @default 'BEST_MATCH'
   */
  exports.prototype['sort'] = 'BEST_MATCH';
  /**
   * @member {module:model/NonRealtimeCurrency} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * The AliExpress category to search in 
   * @member {Number} category
   */
  exports.prototype['category'] = undefined;
  /**
   * When this flag is set to `true` the `category` field will be expanded so that all items in sub-categories will be included 
   * @member {Boolean} includeSubcategories
   * @default false
   */
  exports.prototype['includeSubcategories'] = false;
  /**
   * The direction to sort the results by. Only valid for certain `sort` values 
   * @member {module:model/SearchRequest.SortDirectionEnum} sortDirection
   * @default 'ASC'
   */
  exports.prototype['sortDirection'] = 'ASC';
  /**
   * @member {module:model/DoubleRange} ratingsRange
   */
  exports.prototype['ratingsRange'] = undefined;
  /**
   * @member {module:model/IntegerRange} quantityRange
   */
  exports.prototype['quantityRange'] = undefined;
  /**
   * @member {module:model/DoubleRange} priceRange
   */
  exports.prototype['priceRange'] = undefined;
  /**
   * @member {module:model/DoubleRange} unitPriceRange
   */
  exports.prototype['unitPriceRange'] = undefined;
  /**
   * @member {module:model/IntegerRange} orderRange
   */
  exports.prototype['orderRange'] = undefined;
  /**
   * @member {module:model/StringRange} itemIdRange
   */
  exports.prototype['itemIdRange'] = undefined;
  /**
   * Filter by freight types 
   * @member {Array.<String>} freightTypes
   */
  exports.prototype['freightTypes'] = undefined;
  /**
   * Skip a number of items, if you need to skip more than 10000 items then use the scroll feature 
   * @member {Number} skip
   */
  exports.prototype['skip'] = undefined;
  /**
   * Limit the request to a number of items 
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * When this value is `true` then you will receive a scroll identifier which you can use to request the next page of results. The scroll identifier is good for 60 seconds. 
   * @member {Boolean} scrollPagination
   * @default false
   */
  exports.prototype['scrollPagination'] = false;
  /**
   * The scroll identifier which can be retrieved by sending an initial search request with `scrollPagination` set to `true`. Scroll identifiers are good for 60 seconds. 
   * @member {String} scrollIdentifier
   */
  exports.prototype['scrollIdentifier'] = undefined;


  /**
   * Allowed values for the <code>sort</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SortEnum = {
    /**
     * value: "PRODUCT_ID"
     * @const
     */
    "PRODUCT_ID": "PRODUCT_ID",
    /**
     * value: "UPDATE_TIME"
     * @const
     */
    "UPDATE_TIME": "UPDATE_TIME",
    /**
     * value: "WHOLESALE_PRICE"
     * @const
     */
    "WHOLESALE_PRICE": "WHOLESALE_PRICE",
    /**
     * value: "ITEM_RATING"
     * @const
     */
    "ITEM_RATING": "ITEM_RATING",
    /**
     * value: "ORDERS"
     * @const
     */
    "ORDERS": "ORDERS",
    /**
     * value: "BEST_MATCH"
     * @const
     */
    "BEST_MATCH": "BEST_MATCH"  };

  /**
   * Allowed values for the <code>sortDirection</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SortDirectionEnum = {
    /**
     * value: "ASC"
     * @const
     */
    "ASC": "ASC",
    /**
     * value: "DESC"
     * @const
     */
    "DESC": "DESC"  };


  return exports;
}));


