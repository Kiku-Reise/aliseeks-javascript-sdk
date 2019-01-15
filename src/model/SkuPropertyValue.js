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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.SkuPropertyValue = factory(root.AliseeksApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SkuPropertyValue model module.
   * @module model/SkuPropertyValue
   * @version 0.10.0
   */

  /**
   * Constructs a new <code>SkuPropertyValue</code>.
   * Defines a product SKU value which corresponds to a unique item variation 
   * @alias module:model/SkuPropertyValue
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SkuPropertyValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SkuPropertyValue} obj Optional instance to populate.
   * @return {module:model/SkuPropertyValue} The populated <code>SkuPropertyValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('propertyValueName')) {
        obj['propertyValueName'] = ApiClient.convertToType(data['propertyValueName'], 'String');
      }
      if (data.hasOwnProperty('propertyValueId')) {
        obj['propertyValueId'] = ApiClient.convertToType(data['propertyValueId'], 'Number');
      }
      if (data.hasOwnProperty('propertyValueDisplayName')) {
        obj['propertyValueDisplayName'] = ApiClient.convertToType(data['propertyValueDisplayName'], 'String');
      }
    }
    return obj;
  }

  /**
   * The name of a sku value 
   * @member {String} propertyValueName
   */
  exports.prototype['propertyValueName'] = undefined;
  /**
   * The ID of the sku value 
   * @member {Number} propertyValueId
   */
  exports.prototype['propertyValueId'] = undefined;
  /**
   * The display name of the sku value 
   * @member {String} propertyValueDisplayName
   */
  exports.prototype['propertyValueDisplayName'] = undefined;



  return exports;
}));


