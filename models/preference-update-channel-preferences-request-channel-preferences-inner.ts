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
 * @interface PreferenceUpdateChannelPreferencesRequestChannelPreferencesInner
 */
export interface PreferenceUpdateChannelPreferencesRequestChannelPreferencesInner {
    /**
     * Add channel as `email`, `inbox`, `sms`, `whatsapp`, `androidpush`, `slack`, `iospush`, `webpush`
     * @type {string}
     * @memberof PreferenceUpdateChannelPreferencesRequestChannelPreferencesInner
     */
    'channel'?: string;
    /**
     * set `is_restricted = true` if user wants to receive notification in mandatory categories on this channel. Mandatory categories are `can\'t unsubscribe` categories and the above channel is added as `mandatory channel` in that category
     * @type {boolean}
     * @memberof PreferenceUpdateChannelPreferencesRequestChannelPreferencesInner
     */
    'is_restricted'?: boolean;
}

