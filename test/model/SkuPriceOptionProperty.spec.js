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
    instance = new AliseeksApi.SkuPriceOptionProperty();
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

  describe('SkuPriceOptionProperty', function() {
    it('should create an instance of SkuPriceOptionProperty', function() {
      // uncomment below and update the code to test SkuPriceOptionProperty
      //var instance = new AliseeksApi.SkuPriceOptionProperty();
      //expect(instance).to.be.a(AliseeksApi.SkuPriceOptionProperty);
    });

    it('should have the property propertyId (base name: "propertyId")', function() {
      // uncomment below and update the code to test the property propertyId
      //var instance = new AliseeksApi.SkuPriceOptionProperty();
      //expect(instance).to.be();
    });

    it('should have the property propertyName (base name: "propertyName")', function() {
      // uncomment below and update the code to test the property propertyName
      //var instance = new AliseeksApi.SkuPriceOptionProperty();
      //expect(instance).to.be();
    });

    it('should have the property valueId (base name: "valueId")', function() {
      // uncomment below and update the code to test the property valueId
      //var instance = new AliseeksApi.SkuPriceOptionProperty();
      //expect(instance).to.be();
    });

    it('should have the property valueName (base name: "valueName")', function() {
      // uncomment below and update the code to test the property valueName
      //var instance = new AliseeksApi.SkuPriceOptionProperty();
      //expect(instance).to.be();
    });

    it('should have the property valueDisplayName (base name: "valueDisplayName")', function() {
      // uncomment below and update the code to test the property valueDisplayName
      //var instance = new AliseeksApi.SkuPriceOptionProperty();
      //expect(instance).to.be();
    });

    it('should have the property shipFromCountry (base name: "shipFromCountry")', function() {
      // uncomment below and update the code to test the property shipFromCountry
      //var instance = new AliseeksApi.SkuPriceOptionProperty();
      //expect(instance).to.be();
    });

  });

}));
