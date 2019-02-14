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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AliseeksApi);
  }
}(this, function(expect, AliseeksApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AliseeksApi.ProductSeller();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProductSeller', function() {
    it('should create an instance of ProductSeller', function() {
      // uncomment below and update the code to test ProductSeller
      //var instance = new AliseeksApi.ProductSeller();
      //expect(instance).to.be.a(AliseeksApi.ProductSeller);
    });

    it('should have the property storeId (base name: "storeId")', function() {
      // uncomment below and update the code to test the property storeId
      //var instance = new AliseeksApi.ProductSeller();
      //expect(instance).to.be();
    });

    it('should have the property storeUrl (base name: "storeUrl")', function() {
      // uncomment below and update the code to test the property storeUrl
      //var instance = new AliseeksApi.ProductSeller();
      //expect(instance).to.be();
    });

    it('should have the property storeName (base name: "storeName")', function() {
      // uncomment below and update the code to test the property storeName
      //var instance = new AliseeksApi.ProductSeller();
      //expect(instance).to.be();
    });

    it('should have the property sellerLevel (base name: "sellerLevel")', function() {
      // uncomment below and update the code to test the property sellerLevel
      //var instance = new AliseeksApi.ProductSeller();
      //expect(instance).to.be();
    });

    it('should have the property positiveFeedbackRate (base name: "positiveFeedbackRate")', function() {
      // uncomment below and update the code to test the property positiveFeedbackRate
      //var instance = new AliseeksApi.ProductSeller();
      //expect(instance).to.be();
    });

  });

}));
