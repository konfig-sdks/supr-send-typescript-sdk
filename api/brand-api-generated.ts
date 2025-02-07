/* tslint:disable */
/* eslint-disable */
/*
SuprSend API

SuprSend is a central communication stack for easily creating, managing and delivering notifications to your end users on multiple channels. Our single notification API has all the features set, which enables you to send notifications in a reliable and scalable manner and take care of end user experience, thereby eliminating the need to develop any notification service in-house for transactional/engagement notifications.

The version of the OpenAPI document: 1.2.1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BrandCreateOrUpdateRequest } from '../models';
// @ts-ignore
import { BrandCreateOrUpdateRequestSocialLinks } from '../models';
// @ts-ignore
import { BrandUpdateDefaultPreferenceRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * BrandApi - axios parameter creator
 * @export
 */
export const BrandApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * API to get brand settings corresponding to a brand id
         * @summary Get Brand data
         * @param {string} brandId unique identifier of the brand you want to get the details for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        brandDataGet: async (brandId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'brandId' is not null or undefined
            assertParamExists('brandDataGet', 'brandId', brandId)
            const localVarPath = `/v1/brand/{brand_id}`
                .replace(`{${"brand_id"}}`, encodeURIComponent(String(brandId !== undefined ? brandId : `-brand_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec0", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/brand/{brand_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * API to create a new Brand OR update an existing Brand
         * @summary Create / Update Brands
         * @param {string} brandId unique identifier of the brand that you want to create / update
         * @param {string} [contentType] 
         * @param {BrandCreateOrUpdateRequest} [brandCreateOrUpdateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOrUpdate: async (brandId: string, contentType?: string, brandCreateOrUpdateRequest?: BrandCreateOrUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'brandId' is not null or undefined
            assertParamExists('createOrUpdate', 'brandId', brandId)
            const localVarPath = `/v1/brand/{brand_id}`
                .replace(`{${"brand_id"}}`, encodeURIComponent(String(brandId !== undefined ? brandId : `-brand_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec0", configuration })
            if (contentType != null) {
                localVarHeaderParameter['Content - Type'] = String(contentType);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: brandCreateOrUpdateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/brand/{brand_id}',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(brandCreateOrUpdateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * API to get Brand categories
         * @summary Get Brand Default Preference
         * @param {string} brandId unique identifier of the brand you want to get default preferences for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCategories: async (brandId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'brandId' is not null or undefined
            assertParamExists('getCategories', 'brandId', brandId)
            const localVarPath = `/v1/brand/{brand_id}/category`
                .replace(`{${"brand_id"}}`, encodeURIComponent(String(brandId !== undefined ? brandId : `-brand_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec0", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/brand/{brand_id}/category',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * API to get the list of brands available in your workspace
         * @summary Get Brand list
         * @param {string} [limit] number of results to be returned in API response
         * @param {string} [offset] starting position of brand list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listGet: async (limit?: string, offset?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/brand`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec0", configuration })
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/brand',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * API to update user default preferences for a brand
         * @summary Update Brand Default Preference
         * @param {string} brandId unique identifier of the brand you want to update default preferences for
         * @param {string} categorySlug notification category slug. You can get this from Notification Categories page on SuprSend dashboard -&gt; Settings page
         * @param {BrandUpdateDefaultPreferenceRequest} [brandUpdateDefaultPreferenceRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDefaultPreference: async (brandId: string, categorySlug: string, brandUpdateDefaultPreferenceRequest?: BrandUpdateDefaultPreferenceRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'brandId' is not null or undefined
            assertParamExists('updateDefaultPreference', 'brandId', brandId)
            // verify required parameter 'categorySlug' is not null or undefined
            assertParamExists('updateDefaultPreference', 'categorySlug', categorySlug)
            const localVarPath = `/v1/brand/{brand_id}/category/{category_slug}`
                .replace(`{${"brand_id"}}`, encodeURIComponent(String(brandId !== undefined ? brandId : `-brand_id-`)))
                .replace(`{${"category_slug"}}`, encodeURIComponent(String(categorySlug !== undefined ? categorySlug : `-category_slug-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec0", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: brandUpdateDefaultPreferenceRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/brand/{brand_id}/category/{category_slug}',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(brandUpdateDefaultPreferenceRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BrandApi - functional programming interface
 * @export
 */
export const BrandApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BrandApiAxiosParamCreator(configuration)
    return {
        /**
         * API to get brand settings corresponding to a brand id
         * @summary Get Brand data
         * @param {BrandApiBrandDataGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async brandDataGet(requestParameters: BrandApiBrandDataGetRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.brandDataGet(requestParameters.brandId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * API to create a new Brand OR update an existing Brand
         * @summary Create / Update Brands
         * @param {BrandApiCreateOrUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOrUpdate(requestParameters: BrandApiCreateOrUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const brandCreateOrUpdateRequest: BrandCreateOrUpdateRequest = {
                brand_name: requestParameters.brand_name,
                logo: requestParameters.logo,
                primary_color: requestParameters.primary_color,
                secondary_color: requestParameters.secondary_color,
                tertiary_color: requestParameters.tertiary_color,
                preference_page_url: requestParameters.preference_page_url,
                social_links: requestParameters.social_links,
                properties: requestParameters.properties
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOrUpdate(requestParameters.brandId, requestParameters.contentType, brandCreateOrUpdateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * API to get Brand categories
         * @summary Get Brand Default Preference
         * @param {BrandApiGetCategoriesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCategories(requestParameters: BrandApiGetCategoriesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCategories(requestParameters.brandId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * API to get the list of brands available in your workspace
         * @summary Get Brand list
         * @param {BrandApiListGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listGet(requestParameters: BrandApiListGetRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listGet(requestParameters.limit, requestParameters.offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * API to update user default preferences for a brand
         * @summary Update Brand Default Preference
         * @param {BrandApiUpdateDefaultPreferenceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateDefaultPreference(requestParameters: BrandApiUpdateDefaultPreferenceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const brandUpdateDefaultPreferenceRequest: BrandUpdateDefaultPreferenceRequest = {
                preference: requestParameters.preference,
                visible_to_subscriber: requestParameters.visible_to_subscriber,
                mandatory_channels: requestParameters.mandatory_channels
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateDefaultPreference(requestParameters.brandId, requestParameters.categorySlug, brandUpdateDefaultPreferenceRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BrandApi - factory interface
 * @export
 */
export const BrandApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BrandApiFp(configuration)
    return {
        /**
         * API to get brand settings corresponding to a brand id
         * @summary Get Brand data
         * @param {BrandApiBrandDataGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        brandDataGet(requestParameters: BrandApiBrandDataGetRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.brandDataGet(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * API to create a new Brand OR update an existing Brand
         * @summary Create / Update Brands
         * @param {BrandApiCreateOrUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOrUpdate(requestParameters: BrandApiCreateOrUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.createOrUpdate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * API to get Brand categories
         * @summary Get Brand Default Preference
         * @param {BrandApiGetCategoriesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCategories(requestParameters: BrandApiGetCategoriesRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.getCategories(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * API to get the list of brands available in your workspace
         * @summary Get Brand list
         * @param {BrandApiListGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listGet(requestParameters: BrandApiListGetRequest = {}, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.listGet(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * API to update user default preferences for a brand
         * @summary Update Brand Default Preference
         * @param {BrandApiUpdateDefaultPreferenceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDefaultPreference(requestParameters: BrandApiUpdateDefaultPreferenceRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.updateDefaultPreference(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for brandDataGet operation in BrandApi.
 * @export
 * @interface BrandApiBrandDataGetRequest
 */
export type BrandApiBrandDataGetRequest = {
    
    /**
    * unique identifier of the brand you want to get the details for
    * @type {string}
    * @memberof BrandApiBrandDataGet
    */
    readonly brandId: string
    
}

/**
 * Request parameters for createOrUpdate operation in BrandApi.
 * @export
 * @interface BrandApiCreateOrUpdateRequest
 */
export type BrandApiCreateOrUpdateRequest = {
    
    /**
    * unique identifier of the brand that you want to create / update
    * @type {string}
    * @memberof BrandApiCreateOrUpdate
    */
    readonly brandId: string
    
    /**
    * 
    * @type {string}
    * @memberof BrandApiCreateOrUpdate
    */
    readonly contentType?: string
    
} & BrandCreateOrUpdateRequest

/**
 * Request parameters for getCategories operation in BrandApi.
 * @export
 * @interface BrandApiGetCategoriesRequest
 */
export type BrandApiGetCategoriesRequest = {
    
    /**
    * unique identifier of the brand you want to get default preferences for
    * @type {string}
    * @memberof BrandApiGetCategories
    */
    readonly brandId: string
    
}

/**
 * Request parameters for listGet operation in BrandApi.
 * @export
 * @interface BrandApiListGetRequest
 */
export type BrandApiListGetRequest = {
    
    /**
    * number of results to be returned in API response
    * @type {string}
    * @memberof BrandApiListGet
    */
    readonly limit?: string
    
    /**
    * starting position of brand list
    * @type {string}
    * @memberof BrandApiListGet
    */
    readonly offset?: string
    
}

/**
 * Request parameters for updateDefaultPreference operation in BrandApi.
 * @export
 * @interface BrandApiUpdateDefaultPreferenceRequest
 */
export type BrandApiUpdateDefaultPreferenceRequest = {
    
    /**
    * unique identifier of the brand you want to update default preferences for
    * @type {string}
    * @memberof BrandApiUpdateDefaultPreference
    */
    readonly brandId: string
    
    /**
    * notification category slug. You can get this from Notification Categories page on SuprSend dashboard -> Settings page
    * @type {string}
    * @memberof BrandApiUpdateDefaultPreference
    */
    readonly categorySlug: string
    
} & BrandUpdateDefaultPreferenceRequest

/**
 * BrandApiGenerated - object-oriented interface
 * @export
 * @class BrandApiGenerated
 * @extends {BaseAPI}
 */
export class BrandApiGenerated extends BaseAPI {
    /**
     * API to get brand settings corresponding to a brand id
     * @summary Get Brand data
     * @param {BrandApiBrandDataGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandApiGenerated
     */
    public brandDataGet(requestParameters: BrandApiBrandDataGetRequest, options?: AxiosRequestConfig) {
        return BrandApiFp(this.configuration).brandDataGet(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * API to create a new Brand OR update an existing Brand
     * @summary Create / Update Brands
     * @param {BrandApiCreateOrUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandApiGenerated
     */
    public createOrUpdate(requestParameters: BrandApiCreateOrUpdateRequest, options?: AxiosRequestConfig) {
        return BrandApiFp(this.configuration).createOrUpdate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * API to get Brand categories
     * @summary Get Brand Default Preference
     * @param {BrandApiGetCategoriesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandApiGenerated
     */
    public getCategories(requestParameters: BrandApiGetCategoriesRequest, options?: AxiosRequestConfig) {
        return BrandApiFp(this.configuration).getCategories(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * API to get the list of brands available in your workspace
     * @summary Get Brand list
     * @param {BrandApiListGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandApiGenerated
     */
    public listGet(requestParameters: BrandApiListGetRequest = {}, options?: AxiosRequestConfig) {
        return BrandApiFp(this.configuration).listGet(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * API to update user default preferences for a brand
     * @summary Update Brand Default Preference
     * @param {BrandApiUpdateDefaultPreferenceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandApiGenerated
     */
    public updateDefaultPreference(requestParameters: BrandApiUpdateDefaultPreferenceRequest, options?: AxiosRequestConfig) {
        return BrandApiFp(this.configuration).updateDefaultPreference(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
