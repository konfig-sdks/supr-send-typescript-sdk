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
 * @interface WorkflowConfigureTriggerRequestUsersInnerIospushInner
 */
export interface WorkflowConfigureTriggerRequestUsersInnerIospushInner {
    /**
     * iOSpush token
     * @type {string}
     * @memberof WorkflowConfigureTriggerRequestUsersInnerIospushInner
     */
    'token': string;
    /**
     * vendor delivering the push notification
     * @type {string}
     * @memberof WorkflowConfigureTriggerRequestUsersInnerIospushInner
     */
    'provider': string;
    /**
     * unique identifier of user\'s device. This is used to avoid sending duplicate push notification on the same device
     * @type {string}
     * @memberof WorkflowConfigureTriggerRequestUsersInnerIospushInner
     */
    'device_id'?: string;
}

