/*
SuprSend API

SuprSend is a central communication stack for easily creating, managing and delivering notifications to your end users on multiple channels. Our single notification API has all the features set, which enables you to send notifications in a reliable and scalable manner and take care of end user experience, thereby eliminating the need to develop any notification service in-house for transactional/engagement notifications.

The version of the OpenAPI document: 1.2.1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WorkflowConfigureTriggerRequestDelivery } from './workflow-configure-trigger-request-delivery';
import { WorkflowConfigureTriggerRequestUsersInner } from './workflow-configure-trigger-request-users-inner';

/**
 * 
 * @export
 * @interface WorkflowConfigureTriggerRequest
 */
export interface WorkflowConfigureTriggerRequest {
    /**
     * Unique name of the workflow. The workflow name should be easily identifiable for your reference at a later stage. You can see workflow-related analytics on the workflow page (how many notifications were sent, delivered, clicked or interacted).
     * @type {string}
     * @memberof WorkflowConfigureTriggerRequest
     */
    'name': string;
    /**
     * Unique slug name of the template created on SuprSend dashboard. You can get this by clicking on the clipboard icon next to the Template name on SuprSend templates page.
     * @type {string}
     * @memberof WorkflowConfigureTriggerRequest
     */
    'template': string;
    /**
     * Category in which your notification belongs. You can understand more about them in the \'Notification Category\' documentation
     * @type {string}
     * @memberof WorkflowConfigureTriggerRequest
     */
    'notification_category': string;
    /**
     * Array object of target users.
     * @type {Array<WorkflowConfigureTriggerRequestUsersInner>}
     * @memberof WorkflowConfigureTriggerRequest
     */
    'users': Array<WorkflowConfigureTriggerRequestUsersInner>;
    /**
     * Mock data to replace the template variables.
     * @type {string}
     * @memberof WorkflowConfigureTriggerRequest
     */
    'data'?: string;
    /**
     * 
     * @type {WorkflowConfigureTriggerRequestDelivery}
     * @memberof WorkflowConfigureTriggerRequest
     */
    'delivery'?: WorkflowConfigureTriggerRequestDelivery;
    /**
     * Workflow will be halted for the time mentioned in delay, and become active once the delay period is over. Format - `XXdXXhXXmXXs` or if its number (n) then delay is in seconds (n)
     * @type {string}
     * @memberof WorkflowConfigureTriggerRequest
     */
    'delay'?: string;
    /**
     * Trigger workflow on a specific date-time. Format - date string in ISO 8601 eg. \"2022-08-27T20:14:51.643Z\"
     * @type {string}
     * @memberof WorkflowConfigureTriggerRequest
     */
    'trigger_at'?: string;
    /**
     * string identifier of the brand this workflow is associated with
     * @type {string}
     * @memberof WorkflowConfigureTriggerRequest
     */
    'brand_id'?: string;
    /**
     * Idempotency_key (valid for 24hrs)
     * @type {string}
     * @memberof WorkflowConfigureTriggerRequest
     */
    '$idempotency_key'?: string;
}

