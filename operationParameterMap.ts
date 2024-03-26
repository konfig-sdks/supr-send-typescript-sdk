type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/v1/brand/{brand_id}-GET': {
        parameters: [
            {
                name: 'brand_id'
            },
        ]
    },
    '/v1/brand/{brand_id}-POST': {
        parameters: [
            {
                name: 'brand_name'
            },
            {
                name: 'brand_id'
            },
            {
                name: 'logo'
            },
            {
                name: 'primary_color'
            },
            {
                name: 'secondary_color'
            },
            {
                name: 'tertiary_color'
            },
            {
                name: 'preference_page_url'
            },
            {
                name: 'social_links'
            },
            {
                name: 'properties'
            },
            {
                name: 'Content - Type'
            },
        ]
    },
    '/v1/brand/{brand_id}/category-GET': {
        parameters: [
            {
                name: 'brand_id'
            },
        ]
    },
    '/v1/brand-GET': {
        parameters: [
            {
                name: 'limit'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/v1/brand/{brand_id}/category/{category_slug}-POST': {
        parameters: [
            {
                name: 'brand_id'
            },
            {
                name: 'category_slug'
            },
            {
                name: 'preference'
            },
            {
                name: 'visible_to_subscriber'
            },
            {
                name: 'mandatory_channels'
            },
        ]
    },
    '/{workspace_key}/broadcast-POST': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'template'
            },
            {
                name: 'notification_category'
            },
            {
                name: 'workspace_key'
            },
            {
                name: 'channels'
            },
            {
                name: 'data'
            },
            {
                name: 'delay'
            },
            {
                name: 'trigger_at'
            },
            {
                name: 'brand_id'
            },
        ]
    },
    '/event-POST': {
        parameters: [
            {
                name: 'distinct_id'
            },
            {
                name: 'event'
            },
            {
                name: '$user_operations'
            },
            {
                name: 'properties'
            },
            {
                name: 'brand_id'
            },
            {
                name: '$idempotency_key'
            },
        ]
    },
    '/v1/subscriber/{distinct_id}/category-GET': {
        parameters: [
            {
                name: 'distinct_id'
            },
            {
                name: 'tenant_id'
            },
        ]
    },
    '/v1/subscriber/{distinct_id}/channel_preference-GET': {
        parameters: [
            {
                name: 'distinct_id'
            },
            {
                name: 'tenant_id'
            },
        ]
    },
    '/v1/subscriber/{distinct_id}/channel_preference-POST': {
        parameters: [
            {
                name: 'distinct_id'
            },
            {
                name: 'channel_preferences'
            },
            {
                name: 'tenant_id'
            },
        ]
    },
    '/v1/subscriber_list/{list_id}/version/{version_id}/subscriber/add-POST': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'version_id'
            },
            {
                name: 'distinct_ids'
            },
        ]
    },
    '/v1/subscriber_list/{list_id}/subscriber/add-POST': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'distinct_ids'
            },
        ]
    },
    '/v1/subscriber_list/{list_id}/version/{version_id}/delete-PATCH': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'version_id'
            },
        ]
    },
    '/v1/subscriber_list/{list_id}/version/{version_id}/finish_sync-PATCH': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'version_id'
            },
        ]
    },
    '/v1/subscriber_list/{list_id}/version/{version_id}/subscriber/remove-POST': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'version_id'
            },
            {
                name: 'distinct_ids'
            },
        ]
    },
    '/v1/subscriber/{distinct_id}/category/{category_slug}-POST': {
        parameters: [
            {
                name: 'distinct_id'
            },
            {
                name: 'category_slug'
            },
            {
                name: 'preference'
            },
            {
                name: 'opt_out_channels'
            },
            {
                name: 'tenant_id'
            },
        ]
    },
    '/v1/subscriber_list-POST': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'list_name'
            },
            {
                name: 'list_description'
            },
        ]
    },
    '/v1/subscriber_list/{list_id}/delete-PATCH': {
        parameters: [
            {
                name: 'list_id'
            },
        ]
    },
    '/v1/subscriber_list-GET': {
        parameters: [
            {
                name: 'limit'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/v1/subscriber_list/{list_id}-GET': {
        parameters: [
            {
                name: 'list_id'
            },
        ]
    },
    '/v1/subscriber_list/{list_id}/subscriber/remove-POST': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'distinct_ids'
            },
        ]
    },
    '/v1/subscriber_list/{list_id}/start_sync-POST': {
        parameters: [
            {
                name: 'list_id'
            },
        ]
    },
    '/v1/template/{template_slug}/channel/{channel_slug}-GET': {
        parameters: [
            {
                name: 'template_slug'
            },
            {
                name: 'channel_slug'
            },
        ]
    },
    '/v1/template/{template_slug}-GET': {
        parameters: [
            {
                name: 'template_slug'
            },
        ]
    },
    '/v1/template-GET': {
        parameters: [
            {
                name: 'has_tag_ids_any'
            },
            {
                name: 'has_channels_any'
            },
            {
                name: 'is_active'
            },
            {
                name: 'is_archived'
            },
        ]
    },
    '/{workspace_key}/trigger-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'template'
            },
            {
                name: 'notification_category'
            },
            {
                name: 'users'
            },
            {
                name: 'workspace_key'
            },
            {
                name: 'data'
            },
            {
                name: 'delivery'
            },
            {
                name: 'delay'
            },
            {
                name: 'trigger_at'
            },
            {
                name: 'brand_id'
            },
            {
                name: '$idempotency_key'
            },
        ]
    },
}