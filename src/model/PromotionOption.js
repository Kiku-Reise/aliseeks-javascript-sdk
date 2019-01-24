/**
 * Aliseeks API
 * AliExpress product searching and product details retrieval API. 
 *
 * OpenAPI spec version: 0.10.0
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
    define(['ApiClient', 'model/Amount', 'model/TimeDuration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'), require('./TimeDuration'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.PromotionOption = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.Amount, root.AliseeksApi.TimeDuration);
  }
}(this, function(ApiClient, Amount, TimeDuration) {
  'use strict';



  /**
   * The PromotionOption model module.
   * @module model/PromotionOption
   * @version 0.10.1
   */

  /**
   * Constructs a new <code>PromotionOption</code>.
   * A promotion option 
   * @alias module:model/PromotionOption
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PromotionOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PromotionOption} obj Optional instance to populate.
   * @return {module:model/PromotionOption} The populated <code>PromotionOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('maxAmount')) {
        obj['maxAmount'] = Amount.constructFromObject(data['maxAmount']);
      }
      if (data.hasOwnProperty('minAmount')) {
        obj['minAmount'] = Amount.constructFromObject(data['minAmount']);
      }
      if (data.hasOwnProperty('discount')) {
        obj['discount'] = ApiClient.convertToType(data['discount'], 'Number');
      }
      if (data.hasOwnProperty('timeLeft')) {
        obj['timeLeft'] = TimeDuration.constructFromObject(data['timeLeft']);
      }
      if (data.hasOwnProperty('stock')) {
        obj['stock'] = ApiClient.convertToType(data['stock'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Amount} maxAmount
   */
  exports.prototype['maxAmount'] = undefined;
  /**
   * @member {module:model/Amount} minAmount
   */
  exports.prototype['minAmount'] = undefined;
  /**
   * The amount of the discount 
   * @member {Number} discount
   */
  exports.prototype['discount'] = undefined;
  /**
   * @member {module:model/TimeDuration} timeLeft
   */
  exports.prototype['timeLeft'] = undefined;
  /**
   * The amount of stock left on an item 
   * @member {Number} stock
   */
  exports.prototype['stock'] = undefined;



  return exports;
}));


