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
    instance = new AliseeksApi.ProductRequest();
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

  describe('ProductRequest', function() {
    it('should create an instance of ProductRequest', function() {
      // uncomment below and update the code to test ProductRequest
      //var instance = new AliseeksApi.ProductRequest();
      //expect(instance).to.be.a(AliseeksApi.ProductRequest);
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new AliseeksApi.ProductRequest();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instance = new AliseeksApi.ProductRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instance = new AliseeksApi.ProductRequest();
      //expect(instance).to.be();
    });

    it('should have the property timeZone (base name: "timeZone")', function() {
      // uncomment below and update the code to test the property timeZone
      //var instance = new AliseeksApi.ProductRequest();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new AliseeksApi.ProductRequest();
      //expect(instance).to.be();
    });

    it('should have the property sendGoodsCountry (base name: "sendGoodsCountry")', function() {
      // uncomment below and update the code to test the property sendGoodsCountry
      //var instance = new AliseeksApi.ProductRequest();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new AliseeksApi.ProductRequest();
      //expect(instance).to.be();
    });

    it('should have the property components (base name: "components")', function() {
      // uncomment below and update the code to test the property components
      //var instance = new AliseeksApi.ProductRequest();
      //expect(instance).to.be();
    });

  });

}));
