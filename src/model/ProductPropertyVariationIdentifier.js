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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.ProductPropertyVariationIdentifier = factory(root.AliseeksApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ProductPropertyVariationIdentifier model module.
   * @module model/ProductPropertyVariationIdentifier
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>ProductPropertyVariationIdentifier</code>.
   * The product variation identifier 
   * @alias module:model/ProductPropertyVariationIdentifier
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProductPropertyVariationIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductPropertyVariationIdentifier} obj Optional instance to populate.
   * @return {module:model/ProductPropertyVariationIdentifier} The populated <code>ProductPropertyVariationIdentifier</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('propertyId')) {
        obj['propertyId'] = ApiClient.convertToType(data['propertyId'], 'Number');
      }
      if (data.hasOwnProperty('propertyValueId')) {
        obj['propertyValueId'] = ApiClient.convertToType(data['propertyValueId'], 'Number');
      }
      if (data.hasOwnProperty('propertyValueName')) {
        obj['propertyValueName'] = ApiClient.convertToType(data['propertyValueName'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ID of the property 
   * @member {Number} propertyId
   */
  exports.prototype['propertyId'] = undefined;
  /**
   * The ID of the property value ID 
   * @member {Number} propertyValueId
   */
  exports.prototype['propertyValueId'] = undefined;
  /**
   * The name of the property 
   * @member {String} propertyValueName
   */
  exports.prototype['propertyValueName'] = undefined;



  return exports;
}));


