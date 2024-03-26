/*
SuprSend API

SuprSend is a central communication stack for easily creating, managing and delivering notifications to your end users on multiple channels. Our single notification API has all the features set, which enables you to send notifications in a reliable and scalable manner and take care of end user experience, thereby eliminating the need to develop any notification service in-house for transactional/engagement notifications.

The version of the OpenAPI document: 1.2.1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface SubscriberUpdateUserPreferencesCategoryRequest
 */
export interface SubscriberUpdateUserPreferencesCategoryRequest {
    /**
     * choose one of the options: `opt_in` if the user has allowed notification in this category and `opt_out` if user wants to discontinue notification in this category
     * @type {string}
     * @memberof SubscriberUpdateUserPreferencesCategoryRequest
     */
    'preference'?: string;
    /**
     * Add array of channels if user wants to unsubscribe from particular channels in this category. Add channels as `email`, `sms`, whatsapp`, `androidpush`, `inbox`, `iospush`, `slack`, `webpush`
     * @type {Array<string>}
     * @memberof SubscriberUpdateUserPreferencesCategoryRequest
     */
    'opt_out_channels'?: Array<string>;
}

