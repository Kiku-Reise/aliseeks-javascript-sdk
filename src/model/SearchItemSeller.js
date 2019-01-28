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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.SearchItemSeller = factory(root.AliseeksApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SearchItemSeller model module.
   * @module model/SearchItemSeller
   * @version 0.10.1
   */

  /**
   * Constructs a new <code>SearchItemSeller</code>.
   * The seller of the search item 
   * @alias module:model/SearchItemSeller
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SearchItemSeller</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchItemSeller} obj Optional instance to populate.
   * @return {module:model/SearchItemSeller} The populated <code>SearchItemSeller</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('storeName')) {
        obj['storeName'] = ApiClient.convertToType(data['storeName'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('positiveFeedback')) {
        obj['positiveFeedback'] = ApiClient.convertToType(data['positiveFeedback'], 'Number');
      }
      if (data.hasOwnProperty('negativeFeedback')) {
        obj['negativeFeedback'] = ApiClient.convertToType(data['negativeFeedback'], 'Number');
      }
      if (data.hasOwnProperty('sellerScore')) {
        obj['sellerScore'] = ApiClient.convertToType(data['sellerScore'], 'Number');
      }
      if (data.hasOwnProperty('totalFeedback')) {
        obj['totalFeedback'] = ApiClient.convertToType(data['totalFeedback'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The name of the seller store 
   * @member {String} storeName
   */
  exports.prototype['storeName'] = undefined;
  /**
   * The name of the seller 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The amount of positive feedback for the seller 
   * @member {Number} positiveFeedback
   */
  exports.prototype['positiveFeedback'] = undefined;
  /**
   * The amount of negative feedback for the seller 
   * @member {Number} negativeFeedback
   */
  exports.prototype['negativeFeedback'] = undefined;
  /**
   * The score of the seller 
   * @member {Number} sellerScore
   */
  exports.prototype['sellerScore'] = undefined;
  /**
   * The total amount of feedback for the seller 
   * @member {Number} totalFeedback
   */
  exports.prototype['totalFeedback'] = undefined;



  return exports;
}));


