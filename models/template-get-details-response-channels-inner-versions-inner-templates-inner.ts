/*
SuprSend API

SuprSend is a central communication stack for easily creating, managing and delivering notifications to your end users on multiple channels. Our single notification API has all the features set, which enables you to send notifications in a reliable and scalable manner and take care of end user experience, thereby eliminating the need to develop any notification service in-house for transactional/engagement notifications.

The version of the OpenAPI document: 1.2.1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInnerApprovalCycle } from './template-get-details-response-channels-inner-versions-inner-templates-inner-approval-cycle';
import { TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInnerContent } from './template-get-details-response-channels-inner-versions-inner-templates-inner-content';
import { TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInnerLanguage } from './template-get-details-response-channels-inner-versions-inner-templates-inner-language';
import { TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInnerUpdatedBy } from './template-get-details-response-channels-inner-versions-inner-templates-inner-updated-by';

/**
 * 
 * @export
 * @interface TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInner
 */
export interface TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInner {
    /**
     * 
     * @type {number}
     * @memberof TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInner
     */
    'id'?: number;
    /**
     * 
     * @type {TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInnerLanguage}
     * @memberof TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInner
     */
    'language'?: TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInnerLanguage;
    /**
     * 
     * @type {boolean}
     * @memberof TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInner
     */
    'is_enabled'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInner
     */
    'approval_status'?: string;
    /**
     * 
     * @type {TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInnerContent}
     * @memberof TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInner
     */
    'content'?: TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInnerContent;
    /**
     * 
     * @type {string}
     * @memberof TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInner
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInner
     */
    'updated_at'?: string;
    /**
     * 
     * @type {TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInnerUpdatedBy}
     * @memberof TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInner
     */
    'updated_by'?: TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInnerUpdatedBy;
    /**
     * 
     * @type {TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInnerApprovalCycle}
     * @memberof TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInner
     */
    'approval_cycle'?: TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInnerApprovalCycle;
    /**
     * 
     * @type {boolean}
     * @memberof TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInner
     */
    'is_approval_needed'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TemplateGetDetailsResponseChannelsInnerVersionsInnerTemplatesInner
     */
    'is_cloned_from_last_version'?: boolean;
}

