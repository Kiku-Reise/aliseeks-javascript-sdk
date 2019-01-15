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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Amount', 'model/DoubleRange', 'model/ImageSearchCategory', 'model/ImageSearchItem', 'model/ImageSearchRequest', 'model/ImageSearchResponse', 'model/IntegerRange', 'model/NonRealtimeCurrency', 'model/ProductAttribute', 'model/ProductBulkOption', 'model/ProductDetail', 'model/ProductDetailsRequest', 'model/ProductHtmlDescription', 'model/ProductHtmlDescriptionRequest', 'model/ProductPriceOption', 'model/ProductPropertyVariationIdentifier', 'model/ProductReviews', 'model/ProductShipping', 'model/ProductShippingOptions', 'model/ProductShippingRequest', 'model/ProductSku', 'model/ProductSkus', 'model/ProductSkusRequest', 'model/PromotionOption', 'model/RealtimeCurrency', 'model/RealtimeSearchAggregation', 'model/RealtimeSearchItem', 'model/RealtimeSearchRequest', 'model/RealtimeSearchResponse', 'model/SearchAggregation', 'model/SearchItem', 'model/SearchItemFreight', 'model/SearchItemFreightType', 'model/SearchItemSeller', 'model/SearchPriceOption', 'model/SearchRequest', 'model/SearchResponse', 'model/SkuProperty', 'model/SkuPropertyValue', 'model/StringRange', 'model/TimeDuration', 'model/TradeInformation', 'model/UploadImageByUrlRequest', 'model/UploadImageResponse', 'model/WebError', 'api/ProductsApi', 'api/SearchApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Amount'), require('./model/DoubleRange'), require('./model/ImageSearchCategory'), require('./model/ImageSearchItem'), require('./model/ImageSearchRequest'), require('./model/ImageSearchResponse'), require('./model/IntegerRange'), require('./model/NonRealtimeCurrency'), require('./model/ProductAttribute'), require('./model/ProductBulkOption'), require('./model/ProductDetail'), require('./model/ProductDetailsRequest'), require('./model/ProductHtmlDescription'), require('./model/ProductHtmlDescriptionRequest'), require('./model/ProductPriceOption'), require('./model/ProductPropertyVariationIdentifier'), require('./model/ProductReviews'), require('./model/ProductShipping'), require('./model/ProductShippingOptions'), require('./model/ProductShippingRequest'), require('./model/ProductSku'), require('./model/ProductSkus'), require('./model/ProductSkusRequest'), require('./model/PromotionOption'), require('./model/RealtimeCurrency'), require('./model/RealtimeSearchAggregation'), require('./model/RealtimeSearchItem'), require('./model/RealtimeSearchRequest'), require('./model/RealtimeSearchResponse'), require('./model/SearchAggregation'), require('./model/SearchItem'), require('./model/SearchItemFreight'), require('./model/SearchItemFreightType'), require('./model/SearchItemSeller'), require('./model/SearchPriceOption'), require('./model/SearchRequest'), require('./model/SearchResponse'), require('./model/SkuProperty'), require('./model/SkuPropertyValue'), require('./model/StringRange'), require('./model/TimeDuration'), require('./model/TradeInformation'), require('./model/UploadImageByUrlRequest'), require('./model/UploadImageResponse'), require('./model/WebError'), require('./api/ProductsApi'), require('./api/SearchApi'));
  }
}(function(ApiClient, Amount, DoubleRange, ImageSearchCategory, ImageSearchItem, ImageSearchRequest, ImageSearchResponse, IntegerRange, NonRealtimeCurrency, ProductAttribute, ProductBulkOption, ProductDetail, ProductDetailsRequest, ProductHtmlDescription, ProductHtmlDescriptionRequest, ProductPriceOption, ProductPropertyVariationIdentifier, ProductReviews, ProductShipping, ProductShippingOptions, ProductShippingRequest, ProductSku, ProductSkus, ProductSkusRequest, PromotionOption, RealtimeCurrency, RealtimeSearchAggregation, RealtimeSearchItem, RealtimeSearchRequest, RealtimeSearchResponse, SearchAggregation, SearchItem, SearchItemFreight, SearchItemFreightType, SearchItemSeller, SearchPriceOption, SearchRequest, SearchResponse, SkuProperty, SkuPropertyValue, StringRange, TimeDuration, TradeInformation, UploadImageByUrlRequest, UploadImageResponse, WebError, ProductsApi, SearchApi) {
  'use strict';

  /**
   * JavaScript client library for the Aliseeks API, AliExpress product information.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var AliseeksApi = require('index'); // See note below*.
   * var xxxSvc = new AliseeksApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new AliseeksApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new AliseeksApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new AliseeksApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.10.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Amount model constructor.
     * @property {module:model/Amount}
     */
    Amount: Amount,
    /**
     * The DoubleRange model constructor.
     * @property {module:model/DoubleRange}
     */
    DoubleRange: DoubleRange,
    /**
     * The ImageSearchCategory model constructor.
     * @property {module:model/ImageSearchCategory}
     */
    ImageSearchCategory: ImageSearchCategory,
    /**
     * The ImageSearchItem model constructor.
     * @property {module:model/ImageSearchItem}
     */
    ImageSearchItem: ImageSearchItem,
    /**
     * The ImageSearchRequest model constructor.
     * @property {module:model/ImageSearchRequest}
     */
    ImageSearchRequest: ImageSearchRequest,
    /**
     * The ImageSearchResponse model constructor.
     * @property {module:model/ImageSearchResponse}
     */
    ImageSearchResponse: ImageSearchResponse,
    /**
     * The IntegerRange model constructor.
     * @property {module:model/IntegerRange}
     */
    IntegerRange: IntegerRange,
    /**
     * The NonRealtimeCurrency model constructor.
     * @property {module:model/NonRealtimeCurrency}
     */
    NonRealtimeCurrency: NonRealtimeCurrency,
    /**
     * The ProductAttribute model constructor.
     * @property {module:model/ProductAttribute}
     */
    ProductAttribute: ProductAttribute,
    /**
     * The ProductBulkOption model constructor.
     * @property {module:model/ProductBulkOption}
     */
    ProductBulkOption: ProductBulkOption,
    /**
     * The ProductDetail model constructor.
     * @property {module:model/ProductDetail}
     */
    ProductDetail: ProductDetail,
    /**
     * The ProductDetailsRequest model constructor.
     * @property {module:model/ProductDetailsRequest}
     */
    ProductDetailsRequest: ProductDetailsRequest,
    /**
     * The ProductHtmlDescription model constructor.
     * @property {module:model/ProductHtmlDescription}
     */
    ProductHtmlDescription: ProductHtmlDescription,
    /**
     * The ProductHtmlDescriptionRequest model constructor.
     * @property {module:model/ProductHtmlDescriptionRequest}
     */
    ProductHtmlDescriptionRequest: ProductHtmlDescriptionRequest,
    /**
     * The ProductPriceOption model constructor.
     * @property {module:model/ProductPriceOption}
     */
    ProductPriceOption: ProductPriceOption,
    /**
     * The ProductPropertyVariationIdentifier model constructor.
     * @property {module:model/ProductPropertyVariationIdentifier}
     */
    ProductPropertyVariationIdentifier: ProductPropertyVariationIdentifier,
    /**
     * The ProductReviews model constructor.
     * @property {module:model/ProductReviews}
     */
    ProductReviews: ProductReviews,
    /**
     * The ProductShipping model constructor.
     * @property {module:model/ProductShipping}
     */
    ProductShipping: ProductShipping,
    /**
     * The ProductShippingOptions model constructor.
     * @property {module:model/ProductShippingOptions}
     */
    ProductShippingOptions: ProductShippingOptions,
    /**
     * The ProductShippingRequest model constructor.
     * @property {module:model/ProductShippingRequest}
     */
    ProductShippingRequest: ProductShippingRequest,
    /**
     * The ProductSku model constructor.
     * @property {module:model/ProductSku}
     */
    ProductSku: ProductSku,
    /**
     * The ProductSkus model constructor.
     * @property {module:model/ProductSkus}
     */
    ProductSkus: ProductSkus,
    /**
     * The ProductSkusRequest model constructor.
     * @property {module:model/ProductSkusRequest}
     */
    ProductSkusRequest: ProductSkusRequest,
    /**
     * The PromotionOption model constructor.
     * @property {module:model/PromotionOption}
     */
    PromotionOption: PromotionOption,
    /**
     * The RealtimeCurrency model constructor.
     * @property {module:model/RealtimeCurrency}
     */
    RealtimeCurrency: RealtimeCurrency,
    /**
     * The RealtimeSearchAggregation model constructor.
     * @property {module:model/RealtimeSearchAggregation}
     */
    RealtimeSearchAggregation: RealtimeSearchAggregation,
    /**
     * The RealtimeSearchItem model constructor.
     * @property {module:model/RealtimeSearchItem}
     */
    RealtimeSearchItem: RealtimeSearchItem,
    /**
     * The RealtimeSearchRequest model constructor.
     * @property {module:model/RealtimeSearchRequest}
     */
    RealtimeSearchRequest: RealtimeSearchRequest,
    /**
     * The RealtimeSearchResponse model constructor.
     * @property {module:model/RealtimeSearchResponse}
     */
    RealtimeSearchResponse: RealtimeSearchResponse,
    /**
     * The SearchAggregation model constructor.
     * @property {module:model/SearchAggregation}
     */
    SearchAggregation: SearchAggregation,
    /**
     * The SearchItem model constructor.
     * @property {module:model/SearchItem}
     */
    SearchItem: SearchItem,
    /**
     * The SearchItemFreight model constructor.
     * @property {module:model/SearchItemFreight}
     */
    SearchItemFreight: SearchItemFreight,
    /**
     * The SearchItemFreightType model constructor.
     * @property {module:model/SearchItemFreightType}
     */
    SearchItemFreightType: SearchItemFreightType,
    /**
     * The SearchItemSeller model constructor.
     * @property {module:model/SearchItemSeller}
     */
    SearchItemSeller: SearchItemSeller,
    /**
     * The SearchPriceOption model constructor.
     * @property {module:model/SearchPriceOption}
     */
    SearchPriceOption: SearchPriceOption,
    /**
     * The SearchRequest model constructor.
     * @property {module:model/SearchRequest}
     */
    SearchRequest: SearchRequest,
    /**
     * The SearchResponse model constructor.
     * @property {module:model/SearchResponse}
     */
    SearchResponse: SearchResponse,
    /**
     * The SkuProperty model constructor.
     * @property {module:model/SkuProperty}
     */
    SkuProperty: SkuProperty,
    /**
     * The SkuPropertyValue model constructor.
     * @property {module:model/SkuPropertyValue}
     */
    SkuPropertyValue: SkuPropertyValue,
    /**
     * The StringRange model constructor.
     * @property {module:model/StringRange}
     */
    StringRange: StringRange,
    /**
     * The TimeDuration model constructor.
     * @property {module:model/TimeDuration}
     */
    TimeDuration: TimeDuration,
    /**
     * The TradeInformation model constructor.
     * @property {module:model/TradeInformation}
     */
    TradeInformation: TradeInformation,
    /**
     * The UploadImageByUrlRequest model constructor.
     * @property {module:model/UploadImageByUrlRequest}
     */
    UploadImageByUrlRequest: UploadImageByUrlRequest,
    /**
     * The UploadImageResponse model constructor.
     * @property {module:model/UploadImageResponse}
     */
    UploadImageResponse: UploadImageResponse,
    /**
     * The WebError model constructor.
     * @property {module:model/WebError}
     */
    WebError: WebError,
    /**
     * The ProductsApi service constructor.
     * @property {module:api/ProductsApi}
     */
    ProductsApi: ProductsApi,
    /**
     * The SearchApi service constructor.
     * @property {module:api/SearchApi}
     */
    SearchApi: SearchApi
  };

  return exports;
}));
