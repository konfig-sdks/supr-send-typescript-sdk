<div align="left">

[![Visit Suprsend](./header.png)](https://suprsend.com)

# [Suprsend](https://suprsend.com)<a id="suprsend"></a>

SuprSend is a central communication stack for easily creating, managing and delivering notifications to your end users on multiple channels. Our single notification API has all the features set, which enables you to send notifications in a reliable and scalable manner and take care of end user experience, thereby eliminating the need to develop any notification service in-house for transactional/engagement notifications.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`suprsend.brand.brandDataGet`](#suprsendbrandbranddataget)
  * [`suprsend.brand.createOrUpdate`](#suprsendbrandcreateorupdate)
  * [`suprsend.brand.getCategories`](#suprsendbrandgetcategories)
  * [`suprsend.brand.listGet`](#suprsendbrandlistget)
  * [`suprsend.brand.updateDefaultPreference`](#suprsendbrandupdatedefaultpreference)
  * [`suprsend.broadcast.triggerMessageList`](#suprsendbroadcasttriggermessagelist)
  * [`suprsend.event.triggerEvent`](#suprsendeventtriggerevent)
  * [`suprsend.prefCategory.getUserPreferencesAllCategories`](#suprsendprefcategorygetuserpreferencesallcategories)
  * [`suprsend.preference.getUserChannelPreferences`](#suprsendpreferencegetuserchannelpreferences)
  * [`suprsend.preference.updateChannelPreferences`](#suprsendpreferenceupdatechannelpreferences)
  * [`suprsend.subscriber.addToDraftList`](#suprsendsubscriberaddtodraftlist)
  * [`suprsend.subscriber.addToList`](#suprsendsubscriberaddtolist)
  * [`suprsend.subscriber.deleteDraftList`](#suprsendsubscriberdeletedraftlist)
  * [`suprsend.subscriber.finishSyncDraftVersion`](#suprsendsubscriberfinishsyncdraftversion)
  * [`suprsend.subscriber.removeFromDraftList`](#suprsendsubscriberremovefromdraftlist)
  * [`suprsend.subscriber.updateUserPreferencesCategory`](#suprsendsubscriberupdateuserpreferencescategory)
  * [`suprsend.subscriberList.createList`](#suprsendsubscriberlistcreatelist)
  * [`suprsend.subscriberList.deleteList`](#suprsendsubscriberlistdeletelist)
  * [`suprsend.subscriberList.getAllLists`](#suprsendsubscriberlistgetalllists)
  * [`suprsend.subscriberList.getListData`](#suprsendsubscriberlistgetlistdata)
  * [`suprsend.subscriberList.removeSubscribersFromList`](#suprsendsubscriberlistremovesubscribersfromlist)
  * [`suprsend.sync.listStartSync`](#suprsendsyncliststartsync)
  * [`suprsend.template.getContentChannel`](#suprsendtemplategetcontentchannel)
  * [`suprsend.template.getDetails`](#suprsendtemplategetdetails)
  * [`suprsend.template.getList`](#suprsendtemplategetlist)
  * [`suprsend.workflow.configureTrigger`](#suprsendworkflowconfiguretrigger)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=SuprSend&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { SuprSend } from "supr-send-typescript-sdk";

const suprsend = new SuprSend({
  // Defining the base path is optional and defaults to https://hub.suprsend.com
  // basePath: "https://hub.suprsend.com",
  apiKey: "API_KEY",
});

const brandDataGetResponse = await suprsend.brand.brandDataGet({
  brandId: "brandId_example",
});

console.log(brandDataGetResponse);
```

## Reference<a id="reference"></a>


### `suprsend.brand.brandDataGet`<a id="suprsendbrandbranddataget"></a>

API to get brand settings corresponding to a brand id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const brandDataGetResponse = await suprsend.brand.brandDataGet({
  brandId: "brandId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brandId: `string`<a id="brandid-string"></a>

unique identifier of the brand you want to get the details for

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/brand/{brand_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.brand.createOrUpdate`<a id="suprsendbrandcreateorupdate"></a>

API to create a new Brand OR update an existing Brand

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOrUpdateResponse = await suprsend.brand.createOrUpdate({
  brandId: "brandId_example",
  brand_name: "Awesome Brand",
  logo: "https://ik.imagekit.io/l0quatz6utm/suprsend/staging/media/suprsend-only-logo_c8aa27faef118418e8c5bd7b31a1cafc74e09200.png",
  primary_color: "#ff0000",
  secondary_color: "#00ff00",
  tertiary_color: "#0000ff",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brand_name: `string`<a id="brand_name-string"></a>

Name of the brand. You can add company / organization name here

##### brandId: `string`<a id="brandid-string"></a>

unique identifier of the brand that you want to create / update

##### logo: `string`<a id="logo-string"></a>

URL of the brand logo

##### primary_color: `string`<a id="primary_color-string"></a>

Primary color of the brand - used for designing brand template. If you don\\\'t provide any of the colors for the brand, SuprSend will assume you want to use the default values, so color settings will automatically be set to the color settings of default brand.

##### secondary_color: `string`<a id="secondary_color-string"></a>

Secondary color of the brand - not used for designing the default templates. You can however add this property and use it in your templates

##### tertiary_color: `string`<a id="tertiary_color-string"></a>

Tertiary color of the brand - not used for designing the default templates. You can however add this property and use it in your templates

##### preference_page_url: `string`<a id="preference_page_url-string"></a>

Link of the hosted preference page inside the brand product

##### social_links: [`BrandCreateOrUpdateRequestSocialLinks`](./models/brand-create-or-update-request-social-links.ts)<a id="social_links-brandcreateorupdaterequestsociallinksmodelsbrand-create-or-update-request-social-linksts"></a>

##### properties: `string`<a id="properties-string"></a>

Custom properties associated with the brand. Example value - `{\\\"k1\\\": \\\"v1\\\", \\\"k2\\\": 1.0}` <br> Update operation on properties works like upsert on 1st-level keys (i.e. if top-level key doesn\\\'t already exist, then it will be added, otherwise its value will be replaced by the new value. All other key-value pairs will remain unchanged).

##### ContentType: `string`<a id="contenttype-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/brand/{brand_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.brand.getCategories`<a id="suprsendbrandgetcategories"></a>

API to get Brand categories

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCategoriesResponse = await suprsend.brand.getCategories({
  brandId: "brandId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brandId: `string`<a id="brandid-string"></a>

unique identifier of the brand you want to get default preferences for

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/brand/{brand_id}/category` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.brand.listGet`<a id="suprsendbrandlistget"></a>

API to get the list of brands available in your workspace

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listGetResponse = await suprsend.brand.listGet({
  limit: "20",
  offset: "0",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `string`<a id="limit-string"></a>

number of results to be returned in API response

##### offset: `string`<a id="offset-string"></a>

starting position of brand list

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/brand` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.brand.updateDefaultPreference`<a id="suprsendbrandupdatedefaultpreference"></a>

API to update user default preferences for a brand

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDefaultPreferenceResponse =
  await suprsend.brand.updateDefaultPreference({
    brandId: "brandId_example",
    categorySlug: "categorySlug_example",
    preference: "opt_in",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brandId: `string`<a id="brandid-string"></a>

unique identifier of the brand you want to update default preferences for

##### categorySlug: `string`<a id="categoryslug-string"></a>

notification category slug. You can get this from Notification Categories page on SuprSend dashboard -> Settings page

##### preference: `string`<a id="preference-string"></a>

set `**opt_in**` to send notifications on all channels by default <br>  set `**opt_out**` to not send notifications in this category by default. For instance, **newsletter** <br>  set `**cant_unsubscribe**`if you do not want users to completely opt-out from this category. Notifications will always be sent on mandatory channels in this category.

##### visible_to_subscriber: `boolean`<a id="visible_to_subscriber-boolean"></a>

set it `false` to hide a category from user\\\'s preference page

##### mandatory_channels: `string`[]<a id="mandatory_channels-string"></a>

Add mandatory channels that the user can\\\'t unsubscribe from if preference is `cant_unsubscribe`. Add channels as `email`, `sms`, `whatsapp`, `androidpush`, `inbox`, `iospush`, `slack`, `webpush`

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/brand/{brand_id}/category/{category_slug}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.broadcast.triggerMessageList`<a id="suprsendbroadcasttriggermessagelist"></a>

API to trigger broadcast messages on a list of users

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const triggerMessageListResponse = await suprsend.broadcast.triggerMessageList({
  workspaceKey: "workspaceKey_example",
  list_id: "_list_id_",
  template: "_template_slug_",
  notification_category: "transactional",
  data: '{ "key": { "k1": "v1", "k2": "v2" } }',
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### list_id: `string`<a id="list_id-string"></a>

unique identifier to user list that you want to send broadcast messages to.

##### template: `string`<a id="template-string"></a>

Unique slug name of the template created on SuprSend dashboard. You can get this by clicking on the clipboard icon next to the Template name on SuprSend templates page.

##### notification_category: `string`<a id="notification_category-string"></a>

Category in which your notification belongs. You can understand more about them in the [Notification Category](https://docs.suprsend.com/docs/notification-category) documentation

##### workspaceKey: `string`<a id="workspacekey-string"></a>

##### channels: `string`[]<a id="channels-string"></a>

If set, broadcast will be sent only on the channels defined here irrespective of communication channels present in user profile.

##### data: `string`<a id="data-string"></a>

Mock data to replace the template variables.

##### delay: `string`<a id="delay-string"></a>

Broadcast will be halted for the time mentioned in delay, and become active once the delay period is over. Format - `XXdXXhXXmXXs` or if its number (n) then delay is in seconds (n)

##### trigger_at: `string`<a id="trigger_at-string"></a>

Trigger broadcast on a specific date-time. Format - date string in ISO 8601 eg. \\\"2022-08-27T20:14:51.643Z\\\"

##### brand_id: `string`<a id="brand_id-string"></a>

string identifier of the brand this broadcast is associated with

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{workspace_key}/broadcast` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.event.triggerEvent`<a id="suprsendeventtriggerevent"></a>

API used to pass event which can then be used to trigger workflows created on SuprSend dashboard

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const triggerEventResponse = await suprsend.event.triggerEvent({
  distinct_id: "_distinct_id_",
  event: "_event_name_",
  properties: "{}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### distinct_id: `string`<a id="distinct_id-string"></a>

distinct_id of recipient who should receive the notification

##### event: `string`<a id="event-string"></a>

string identifier for the event like `product_purchased`

##### $user_operations: [`EventTriggerEventRequestUserOperationsInner`](./models/event-trigger-event-request-user-operations-inner.ts)[]<a id="user_operations-eventtriggereventrequestuseroperationsinnermodelsevent-trigger-event-request-user-operations-innerts"></a>

Creating & updating users on SuprSend is done by sending an `$user_operations` event. All changes can be combined in one API call in an easy to replay format

##### properties: `string`<a id="properties-string"></a>

a dictionary representing event attributes like `first_name`. Event properties can be used to pass template variables in case of event based trigger

##### brand_id: `string`<a id="brand_id-string"></a>

string identifier of the brand this event is associated with

##### $idempotency_key: `string`<a id="idempotency_key-string"></a>

Idempotency key (valid for 24hours)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/event` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.prefCategory.getUserPreferencesAllCategories`<a id="suprsendprefcategorygetuserpreferencesallcategories"></a>

API to get user category preferences

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserPreferencesAllCategoriesResponse =
  await suprsend.prefCategory.getUserPreferencesAllCategories({
    distinctId: "distinctId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### distinctId: `string`<a id="distinctid-string"></a>

distinct_id of the user whose preferences should be fetched

##### tenantId: `string`<a id="tenantid-string"></a>

to fetch user preferences for a particular brand

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/subscriber/{distinct_id}/category` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.preference.getUserChannelPreferences`<a id="suprsendpreferencegetuserchannelpreferences"></a>

API to get user channel preferences

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserChannelPreferencesResponse =
  await suprsend.preference.getUserChannelPreferences({
    distinctId: "distinctId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### distinctId: `string`<a id="distinctid-string"></a>

distinct_id of the user whose preferences should be fetched

##### tenantId: `string`<a id="tenantid-string"></a>

to fetch user preferences for a particular brand

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/subscriber/{distinct_id}/channel_preference` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.preference.updateChannelPreferences`<a id="suprsendpreferenceupdatechannelpreferences"></a>

API to update user channel preferences

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateChannelPreferencesResponse =
  await suprsend.preference.updateChannelPreferences({
    distinctId: "distinctId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### distinctId: `string`<a id="distinctid-string"></a>

distinct_id of the user whose preferences should be fetched

##### channel_preferences: [`PreferenceUpdateChannelPreferencesRequestChannelPreferencesInner`](./models/preference-update-channel-preferences-request-channel-preferences-inner.ts)[]<a id="channel_preferences-preferenceupdatechannelpreferencesrequestchannelpreferencesinnermodelspreference-update-channel-preferences-request-channel-preferences-innerts"></a>

Use this to update channel level user preferences. Set `is_restricted - true` if the channel is opted_out by the user. This will only send critical notifications to the user which can\\\'t be opted out

##### tenantId: `string`<a id="tenantid-string"></a>

to fetch user preferences for a particular brand

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/subscriber/{distinct_id}/channel_preference` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.subscriber.addToDraftList`<a id="suprsendsubscriberaddtodraftlist"></a>

Add subscribers to a draft list with a version_id that uniquely identifies the draft list

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addToDraftListResponse = await suprsend.subscriber.addToDraftList({
  listId: "_list_id_",
  versionId: "__version_id__",
  distinct_ids: ["[]"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

Unique string idenitifier of the list to which user needs to be updated

##### versionId: `string`<a id="versionid-string"></a>

Unique string idenitifier of the draft version of the list to which user needs to be updated

##### distinct_ids: `string`[]<a id="distinct_ids-string"></a>

Array of subscriber_ids, uniquely identifying the subscribers to be added to the list.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/subscriber_list/{list_id}/version/{version_id}/subscriber/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.subscriber.addToList`<a id="suprsendsubscriberaddtolist"></a>

API to add users / subscribers to the list

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addToListResponse = await suprsend.subscriber.addToList({
  listId: "_list_id_",
  distinct_ids: ["_distinct_id1_"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

Unique string idenitifier of the list to which user needs to be updated

##### distinct_ids: `string`[]<a id="distinct_ids-string"></a>

Array of subscriber_ids, uniquely identifying the subscribers to be added to the list.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/subscriber_list/{list_id}/subscriber/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.subscriber.deleteDraftList`<a id="suprsendsubscriberdeletedraftlist"></a>

API to delete a list created in your workspace

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteDraftListResponse = await suprsend.subscriber.deleteDraftList({
  listId: "listId_example",
  versionId: "__version_id__",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

Unique string idenitifier of the list which you want to delete

##### versionId: `string`<a id="versionid-string"></a>

Unique identifier of the draft version of the list which needs to be deleted

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/subscriber_list/{list_id}/version/{version_id}/delete` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.subscriber.finishSyncDraftVersion`<a id="suprsendsubscriberfinishsyncdraftversion"></a>

Finishes the sync for a draft version and makes that particular version live for the given list_id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const finishSyncDraftVersionResponse =
  await suprsend.subscriber.finishSyncDraftVersion({
    listId: "_list_id_",
    versionId: "__version_id__",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

Unique string idenitifier of the list

##### versionId: `string`<a id="versionid-string"></a>

Unique string idenitifier of the draft version of the list which needs to be made active(live)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/subscriber_list/{list_id}/version/{version_id}/finish_sync` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.subscriber.removeFromDraftList`<a id="suprsendsubscriberremovefromdraftlist"></a>

Remove subscribers from a draft list with a version_id that uniquely identifies the draft list

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFromDraftListResponse =
  await suprsend.subscriber.removeFromDraftList({
    listId: "_list_id_",
    versionId: "__version_id__",
    distinct_ids: ["[]"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

Unique string idenitifier of the list to which user needs to be updated

##### versionId: `string`<a id="versionid-string"></a>

Unique string idenitifier of the draft version of the list to which user needs to be updated

##### distinct_ids: `string`[]<a id="distinct_ids-string"></a>

Array of subscriber_ids, uniquely identifying the subscribers to be removed from the list.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/subscriber_list/{list_id}/version/{version_id}/subscriber/remove` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.subscriber.updateUserPreferencesCategory`<a id="suprsendsubscriberupdateuserpreferencescategory"></a>

API to update user category preferences

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUserPreferencesCategoryResponse =
  await suprsend.subscriber.updateUserPreferencesCategory({
    distinctId: "distinctId_example",
    categorySlug: "categorySlug_example",
    preference: "opt_in",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### distinctId: `string`<a id="distinctid-string"></a>

distinct_id of the user whose preferences should be fetched

##### categorySlug: `string`<a id="categoryslug-string"></a>

notification category slug. You can get this from Notification Categories page on SuprSend dashboard -> Settings page

##### preference: `string`<a id="preference-string"></a>

choose one of the options: `opt_in` if the user has allowed notification in this category and `opt_out` if user wants to discontinue notification in this category

##### opt_out_channels: `string`[]<a id="opt_out_channels-string"></a>

Add array of channels if user wants to unsubscribe from particular channels in this category. Add channels as `email`, `sms`, whatsapp`, `androidpush`, `inbox`, `iospush`, `slack`, `webpush`

##### tenantId: `string`<a id="tenantid-string"></a>

to fetch user preferences for a particular brand

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/subscriber/{distinct_id}/category/{category_slug}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.subscriberList.createList`<a id="suprsendsubscriberlistcreatelist"></a>

API to create / manage lists to send notification to a bulk list of users

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createListResponse = await suprsend.subscriberList.createList({
  list_id: "_list_id_",
  list_name: "_list_name_",
  list_description: "_some sample description_",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### list_id: `string`<a id="list_id-string"></a>

Unique string idenitifier of the list. Add an id which defines the type of users who are part of the list

##### list_name: `string`<a id="list_name-string"></a>

Name of the List. Add a name which defines the type of users in the list

##### list_description: `string`<a id="list_description-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/subscriber_list` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.subscriberList.deleteList`<a id="suprsendsubscriberlistdeletelist"></a>

API to delete a list created in your workspace

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteListResponse = await suprsend.subscriberList.deleteList({
  listId: "listId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

Unique string idenitifier of the list which you want to delete

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/subscriber_list/{list_id}/delete` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.subscriberList.getAllLists`<a id="suprsendsubscriberlistgetalllists"></a>

API to get the data of all the lists created in your workspace

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllListsResponse = await suprsend.subscriberList.getAllLists({
  limit: "20",
  offset: "0",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `string`<a id="limit-string"></a>

number of results to be returned in API response

##### offset: `string`<a id="offset-string"></a>

starting position of brand list

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/subscriber_list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.subscriberList.getListData`<a id="suprsendsubscriberlistgetlistdata"></a>

API to get information corresponding to a list id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListDataResponse = await suprsend.subscriberList.getListData({
  listId: "_list_id_",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

Unique string idenitifier of the list.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/subscriber_list/{list_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.subscriberList.removeSubscribersFromList`<a id="suprsendsubscriberlistremovesubscribersfromlist"></a>

API to remove users / subscribers from the list

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeSubscribersFromListResponse =
  await suprsend.subscriberList.removeSubscribersFromList({
    listId: "_list_id_",
    distinct_ids: ["_distinct_id1_"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

Unique string idenitifier of the list to which user needs to be updated

##### distinct_ids: `string`[]<a id="distinct_ids-string"></a>

Array of subscriber_ids, uniquely identifying the subscribers to be removed from the list.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/subscriber_list/{list_id}/subscriber/remove` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.sync.listStartSync`<a id="suprsendsyncliststartsync"></a>

Starts sync on the active(live) version of the list, identified by list_id, and creates an empty draft version.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listStartSyncResponse = await suprsend.sync.listStartSync({
  listId: "_list_id_",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

Unique identifier of the list on which the sync needs to start to create a draft version

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/subscriber_list/{list_id}/start_sync` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.template.getContentChannel`<a id="suprsendtemplategetcontentchannel"></a>

APIs to fetch the content of a particular channel in a template group. It will return data for live and draft version of a template.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContentChannelResponse = await suprsend.template.getContentChannel({
  templateSlug: "templateSlug_example",
  channelSlug: "channelSlug_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateSlug: `string`<a id="templateslug-string"></a>

Template group slug you want to fetch content details. You\'ll get the template slug by clicking on copy button next to template group name on SuprSend dashboard -> template details page.

##### channelSlug: `string`<a id="channelslug-string"></a>

add one of the template channels  - `email`, `sms`, `whatsapp`, `inbox`, `slack`, `androidpush`, `iospush`, `webpush`

#### 🔄 Return<a id="🔄-return"></a>

[TemplateGetContentChannelResponse](./models/template-get-content-channel-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/template/{template_slug}/channel/{channel_slug}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.template.getDetails`<a id="suprsendtemplategetdetails"></a>

APIs to fetch the content of a template group. It will return data for live and draft version of a template.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await suprsend.template.getDetails({
  templateSlug: "templateSlug_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateSlug: `string`<a id="templateslug-string"></a>

Template group slug you want to fetch content details. You\'ll get the template slug by clicking on copy button next to template group name on SuprSend dashboard -> template details page.

#### 🔄 Return<a id="🔄-return"></a>

[TemplateGetDetailsResponse](./models/template-get-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/template/{template_slug}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.template.getList`<a id="suprsendtemplategetlist"></a>

APIs to fetch the list of all templates in a workspace

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await suprsend.template.getList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### hasTagIdsAny: `string`<a id="hastagidsany-string"></a>

comma separated string of tag ids attached to the template

##### hasChannelsAny: `string`<a id="haschannelsany-string"></a>

comma separated string of channels. Returns templates which has any of the channels present from the channel string. Use these keys for channels - `email`, `sms`, `whatsapp`, `inbox`, `slack`, `androidpush`, `iospush`, `webpush`

##### isActive: `boolean`<a id="isactive-boolean"></a>

Set `true` for published templates, `false` for templates which are in draft. Do not pass this key to return all templates.

##### isArchived: `boolean`<a id="isarchived-boolean"></a>

Set `true` to get archived templates, default = `false`

#### 🔄 Return<a id="🔄-return"></a>

[TemplateGetListResponse](./models/template-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/template` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `suprsend.workflow.configureTrigger`<a id="suprsendworkflowconfiguretrigger"></a>

API to configure and trigger workflow dynamically

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const configureTriggerResponse = await suprsend.workflow.configureTrigger({
  workspaceKey: "workspaceKey_example",
  name: "_workflow_name_",
  template: "_template_slug_",
  notification_category: "transactional",
  users: [
    {
      distinct_id: "_distinct_id_",
      $channels: [],
      $email: [],
      $sms: [],
      $whatsapp: [],
    },
  ],
  data: '{ "key": { "k1": "v1", "k2": "v2" } }',
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Unique name of the workflow. The workflow name should be easily identifiable for your reference at a later stage. You can see workflow-related analytics on the workflow page (how many notifications were sent, delivered, clicked or interacted).

##### template: `string`<a id="template-string"></a>

Unique slug name of the template created on SuprSend dashboard. You can get this by clicking on the clipboard icon next to the Template name on SuprSend templates page.

##### notification_category: `string`<a id="notification_category-string"></a>

Category in which your notification belongs. You can understand more about them in the \\\'Notification Category\\\' documentation

##### users: [`WorkflowConfigureTriggerRequestUsersInner`](./models/workflow-configure-trigger-request-users-inner.ts)[]<a id="users-workflowconfiguretriggerrequestusersinnermodelsworkflow-configure-trigger-request-users-innerts"></a>

Array object of target users.

##### workspaceKey: `string`<a id="workspacekey-string"></a>

##### data: `string`<a id="data-string"></a>

Mock data to replace the template variables.

##### delivery: [`WorkflowConfigureTriggerRequestDelivery`](./models/workflow-configure-trigger-request-delivery.ts)<a id="delivery-workflowconfiguretriggerrequestdeliverymodelsworkflow-configure-trigger-request-deliveryts"></a>

##### delay: `string`<a id="delay-string"></a>

Workflow will be halted for the time mentioned in delay, and become active once the delay period is over. Format - `XXdXXhXXmXXs` or if its number (n) then delay is in seconds (n)

##### trigger_at: `string`<a id="trigger_at-string"></a>

Trigger workflow on a specific date-time. Format - date string in ISO 8601 eg. \\\"2022-08-27T20:14:51.643Z\\\"

##### brand_id: `string`<a id="brand_id-string"></a>

string identifier of the brand this workflow is associated with

##### $idempotency_key: `string`<a id="idempotency_key-string"></a>

Idempotency_key (valid for 24hrs)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/{workspace_key}/trigger` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
