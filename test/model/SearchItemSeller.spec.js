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
    instance = new AliseeksApi.SearchItemSeller();
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

  describe('SearchItemSeller', function() {
    it('should create an instance of SearchItemSeller', function() {
      // uncomment below and update the code to test SearchItemSeller
      //var instance = new AliseeksApi.SearchItemSeller();
      //expect(instance).to.be.a(AliseeksApi.SearchItemSeller);
    });

    it('should have the property storeName (base name: "storeName")', function() {
      // uncomment below and update the code to test the property storeName
      //var instance = new AliseeksApi.SearchItemSeller();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new AliseeksApi.SearchItemSeller();
      //expect(instance).to.be();
    });

    it('should have the property positiveFeedback (base name: "positiveFeedback")', function() {
      // uncomment below and update the code to test the property positiveFeedback
      //var instance = new AliseeksApi.SearchItemSeller();
      //expect(instance).to.be();
    });

    it('should have the property negativeFeedback (base name: "negativeFeedback")', function() {
      // uncomment below and update the code to test the property negativeFeedback
      //var instance = new AliseeksApi.SearchItemSeller();
      //expect(instance).to.be();
    });

    it('should have the property sellerScore (base name: "sellerScore")', function() {
      // uncomment below and update the code to test the property sellerScore
      //var instance = new AliseeksApi.SearchItemSeller();
      //expect(instance).to.be();
    });

    it('should have the property totalFeedback (base name: "totalFeedback")', function() {
      // uncomment below and update the code to test the property totalFeedback
      //var instance = new AliseeksApi.SearchItemSeller();
      //expect(instance).to.be();
    });

  });

}));
