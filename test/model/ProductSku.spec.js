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
    instance = new AliseeksApi.ProductSku();
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

  describe('ProductSku', function() {
    it('should create an instance of ProductSku', function() {
      // uncomment below and update the code to test ProductSku
      //var instance = new AliseeksApi.ProductSku();
      //expect(instance).to.be.a(AliseeksApi.ProductSku);
    });

    it('should have the property propertyIdentifiers (base name: "propertyIdentifiers")', function() {
      // uncomment below and update the code to test the property propertyIdentifiers
      //var instance = new AliseeksApi.ProductSku();
      //expect(instance).to.be();
    });

    it('should have the property propertyValueIds (base name: "propertyValueIds")', function() {
      // uncomment below and update the code to test the property propertyValueIds
      //var instance = new AliseeksApi.ProductSku();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instance = new AliseeksApi.ProductSku();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new AliseeksApi.ProductSku();
      //expect(instance).to.be();
    });

    it('should have the property discountedPrice (base name: "discountedPrice")', function() {
      // uncomment below and update the code to test the property discountedPrice
      //var instance = new AliseeksApi.ProductSku();
      //expect(instance).to.be();
    });

    it('should have the property bulkPrice (base name: "bulkPrice")', function() {
      // uncomment below and update the code to test the property bulkPrice
      //var instance = new AliseeksApi.ProductSku();
      //expect(instance).to.be();
    });

    it('should have the property bulkQuantity (base name: "bulkQuantity")', function() {
      // uncomment below and update the code to test the property bulkQuantity
      //var instance = new AliseeksApi.ProductSku();
      //expect(instance).to.be();
    });

    it('should have the property stock (base name: "stock")', function() {
      // uncomment below and update the code to test the property stock
      //var instance = new AliseeksApi.ProductSku();
      //expect(instance).to.be();
    });

    it('should have the property imageUrl (base name: "imageUrl")', function() {
      // uncomment below and update the code to test the property imageUrl
      //var instance = new AliseeksApi.ProductSku();
      //expect(instance).to.be();
    });

  });

}));
