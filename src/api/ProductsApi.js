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
    define(['ApiClient', 'model/Product', 'model/ProductDetail', 'model/ProductDetailsRequest', 'model/ProductHtmlDescription', 'model/ProductHtmlDescriptionRequest', 'model/ProductRequest', 'model/ProductShipping', 'model/ProductShippingRequest', 'model/ProductSkus', 'model/ProductSkusRequest', 'model/WebError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Product'), require('../model/ProductDetail'), require('../model/ProductDetailsRequest'), require('../model/ProductHtmlDescription'), require('../model/ProductHtmlDescriptionRequest'), require('../model/ProductRequest'), require('../model/ProductShipping'), require('../model/ProductShippingRequest'), require('../model/ProductSkus'), require('../model/ProductSkusRequest'), require('../model/WebError'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.ProductsApi = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.Product, root.AliseeksApi.ProductDetail, root.AliseeksApi.ProductDetailsRequest, root.AliseeksApi.ProductHtmlDescription, root.AliseeksApi.ProductHtmlDescriptionRequest, root.AliseeksApi.ProductRequest, root.AliseeksApi.ProductShipping, root.AliseeksApi.ProductShippingRequest, root.AliseeksApi.ProductSkus, root.AliseeksApi.ProductSkusRequest, root.AliseeksApi.WebError);
  }
}(this, function(ApiClient, Product, ProductDetail, ProductDetailsRequest, ProductHtmlDescription, ProductHtmlDescriptionRequest, ProductRequest, ProductShipping, ProductShippingRequest, ProductSkus, ProductSkusRequest, WebError) {
  'use strict';

  /**
   * Products service.
   * @module api/ProductsApi
   * @version 0.10.1
   */

  /**
   * Constructs a new ProductsApi. 
   * @alias module:api/ProductsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get products details as an aggregated request from AliExpress in realtime. 
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductRequest} opts.productRequest The request body of get product 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Product} and HTTP response
     */
    this.getProductWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['productRequest'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Product;

      return this.apiClient.callApi(
        '/products', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get products details as an aggregated request from AliExpress in realtime. 
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductRequest} opts.productRequest The request body of get product 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.getProduct = function(opts) {
      return this.getProductWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets product details from AliExpress in realtime. 
     * @param {module:model/ProductDetailsRequest} productDetailsRequest The request body to get product details 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductDetail} and HTTP response
     */
    this.getProductDetailsWithHttpInfo = function(productDetailsRequest) {
      var postBody = productDetailsRequest;

      // verify the required parameter 'productDetailsRequest' is set
      if (productDetailsRequest === undefined || productDetailsRequest === null) {
        throw new Error("Missing the required parameter 'productDetailsRequest' when calling getProductDetails");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProductDetail;

      return this.apiClient.callApi(
        '/products/details', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets product details from AliExpress in realtime. 
     * @param {module:model/ProductDetailsRequest} productDetailsRequest The request body to get product details 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductDetail}
     */
    this.getProductDetails = function(productDetailsRequest) {
      return this.getProductDetailsWithHttpInfo(productDetailsRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get product HTML description from AliExpress in realtime. 
     * @param {module:model/ProductHtmlDescriptionRequest} productHtmlDescriptionRequest The request body to get product html description 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductHtmlDescription} and HTTP response
     */
    this.getProductHtmlDescriptionWithHttpInfo = function(productHtmlDescriptionRequest) {
      var postBody = productHtmlDescriptionRequest;

      // verify the required parameter 'productHtmlDescriptionRequest' is set
      if (productHtmlDescriptionRequest === undefined || productHtmlDescriptionRequest === null) {
        throw new Error("Missing the required parameter 'productHtmlDescriptionRequest' when calling getProductHtmlDescription");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProductHtmlDescription;

      return this.apiClient.callApi(
        '/products/description/html', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get product HTML description from AliExpress in realtime. 
     * @param {module:model/ProductHtmlDescriptionRequest} productHtmlDescriptionRequest The request body to get product html description 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductHtmlDescription}
     */
    this.getProductHtmlDescription = function(productHtmlDescriptionRequest) {
      return this.getProductHtmlDescriptionWithHttpInfo(productHtmlDescriptionRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets product shipping information AliExpress in realtime. 
     * @param {module:model/ProductShippingRequest} productShippingRequest The request body to get product shipping 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductShipping} and HTTP response
     */
    this.getProductShippingWithHttpInfo = function(productShippingRequest) {
      var postBody = productShippingRequest;

      // verify the required parameter 'productShippingRequest' is set
      if (productShippingRequest === undefined || productShippingRequest === null) {
        throw new Error("Missing the required parameter 'productShippingRequest' when calling getProductShipping");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProductShipping;

      return this.apiClient.callApi(
        '/products/shipping', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets product shipping information AliExpress in realtime. 
     * @param {module:model/ProductShippingRequest} productShippingRequest The request body to get product shipping 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductShipping}
     */
    this.getProductShipping = function(productShippingRequest) {
      return this.getProductShippingWithHttpInfo(productShippingRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets product skus / variation information from AliExpress in realtime. 
     * @param {module:model/ProductSkusRequest} productSkusRequest The request body to get product skus / variations 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductSkus} and HTTP response
     */
    this.getProductSkusWithHttpInfo = function(productSkusRequest) {
      var postBody = productSkusRequest;

      // verify the required parameter 'productSkusRequest' is set
      if (productSkusRequest === undefined || productSkusRequest === null) {
        throw new Error("Missing the required parameter 'productSkusRequest' when calling getProductSkus");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProductSkus;

      return this.apiClient.callApi(
        '/products/variations', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets product skus / variation information from AliExpress in realtime. 
     * @param {module:model/ProductSkusRequest} productSkusRequest The request body to get product skus / variations 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductSkus}
     */
    this.getProductSkus = function(productSkusRequest) {
      return this.getProductSkusWithHttpInfo(productSkusRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
