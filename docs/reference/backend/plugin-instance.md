---
title: Plugin::Instance
---

These methods are available for use within `plugin.rb`:

 ### activate!() [](#method-i-activate-21)
 note, we need to be able to parse separately to activation. this allows us to present information about a plugin in the UI prior to activations

 ### add_admin_route(label, location, opts = {}) [](#method-i-add_admin_route)
 ### add_api_key_scope(resource, action) [](#method-i-add_api_key_scope)
 Register a new API key scope.

Example: [`add_api_key_scope`](Instance.html#method-i-add_api_key_scope)(:groups, { delete: { actions: %[w](groups#add_members), params: %[i](id) } })

This scope lets you add members to a group. Additionally, you can specify which group ids are allowed. The delete action is added to the groups resource.

 ### add_api_parameter_route(methods: nil, actions: nil, formats: nil) [](#method-i-add_api_parameter_route)
 Register a route which can be authenticated using an api key or user api key in a query parameter rather than a header. For example:

[`add_api_parameter_route`](Instance.html#method-i-add_api_parameter_route)(

```
methods: :get,
actions: "users#bookmarks",
formats: :ics
```

)

See Auth::DefaultCurrentUserProvider::PARAMETER\_API\_PATTERNS for more examples and Auth::DefaultCurrentUserProvider#api\_parameter\_allowed? for implementation

 ### add_body_class(class_name) [](#method-i-add_body_class)
 Applies to all sites in a multisite environment. Ignores plugin.enabled?

 ### add_class_method(klass_name, attr, &block) [](#method-i-add_class_method)
 Adds a class method to a class, respecting if plugin is enabled

 ### add_custom_reviewable_filter(filter) [](#method-i-add_custom_reviewable_filter)
 Receives an array with two elements:

1. A symbol that represents the name of the value to filter.

2. A Proc that takes the existing ActiveRecord::Relation and the value received from the front-end.


 ### add_directory_column(column_name, query:, icon: nil) [](#method-i-add_directory_column)
 ### add_model_callback(klass_name, callback, options = {}, &block) [](#method-i-add_model_callback)
 ### add_permitted_post_create_param(name, type = :string) [](#method-i-add_permitted_post_create_param)
 Add a permitted\_create\_param to Post, respecting if the plugin is enabled

 ### add_permitted_post_update_param(attribute, &block) [](#method-i-add_permitted_post_update_param)
 Add a permitted\_update\_param to Post, respecting if the plugin is enabled

 ### add_permitted_reviewable_param(type, param) [](#method-i-add_permitted_reviewable_param)
 ### add_post_revision_notifier_recipients(&block) [](#method-i-add_post_revision_notifier_recipients)
 Allows to add additional user\_ids to the list of people notified when doing a post revision

 ### add_preloaded_group_custom_field(field) [](#method-i-add_preloaded_group_custom_field)
 Applies to all sites in a multisite environment. Ignores plugin.enabled?

 ### add_preloaded_topic_list_custom_field(field) [](#method-i-add_preloaded_topic_list_custom_field)
 Applies to all sites in a multisite environment. Ignores plugin.enabled?

 ### add_report(name, &block) [](#method-i-add_report)
 Applies to all sites in a multisite environment. Ignores plugin.enabled?

 ### add_reviewable_score_link(reason, setting_name) [](#method-i-add_reviewable_score_link)
 Register a ReviewableScore setting\_name associated with a reason. We’ll use this to build a site setting link and add it to the reason’s translation.

If your plugin has a reason translation looking like this:

```
my_plugin_reason: "This is the reason this post was flagged. See %{link}."
```

And you associate the reason with a setting:

```
add\_reviewable\_score\_link(:my\_plugin\_reason,'a\_plugin\_setting')
```

We’ll generate the following link and attach it to the translation:

```
<a href="/admin/site_settings/category/all_results?filter=a_plugin_setting">
 a plugin setting
</a>
```
 ### add_to_class(class_name, attr, &block) [](#method-i-add_to_class)
 Extend a class but check that the plugin is enabled for class methods use ‘add\_class\_method`

 ### add_to_serializer( serializer, attr, deprecated_respect_plugin_enabled = nil, respect_plugin_enabled: true, include_condition: nil, &block ) [](#method-i-add_to_serializer)
 ### add_topic_static_page(page, options = {}, &blk) [](#method-i-add_topic_static_page)
 Allows customizing existing topic-backed static pages, like: faq, tos, privacy (see: StaticController) The block passed to this method has to return a SiteSetting name that contains a topic id.

```
add\_topic\_static\_page("faq")do|controller|current\_user&.locale=="pl"?"polish\_faq\_topic\_id":"faq\_topic\_id"end
```

You can also add new pages in a plugin, but remember to add a route, for example:

```
get"contact"=\>"static#show",id:"contact"
```
 ### add_user_api_key_scope(scope_name, matcher_parameters) [](#method-i-add_user_api_key_scope)
 Register a new UserApiKey scope, and its allowed routes. Scope will be prefixed with the (parameterized) plugin name followed by a colon.

For example, if discourse-awesome-plugin registered this:

[`add_user_api_key_scope`](Instance.html#method-i-add_user_api_key_scope)(:read\_my\_route,

```
methods: :get,
actions: "mycontroller#myaction",
formats: :ics,
params: :testparam
```

)

The scope registered would be ‘discourse-awesome-plugin:read\_my\_route`

Multiple matchers can be attached by supplying an array of parameter hashes

See UserApiKeyScope::SCOPES for more examples And lib/route\_matcher.rb for the route matching logic

 ### admin_js_asset_exists?() [](#method-i-admin_js_asset_exists-3F)
 ### after_initialize(&block) [](#method-i-after_initialize)
 ### allow_public_user_custom_field(field) [](#method-i-allow_public_user_custom_field)
 ### allow_staff_user_custom_field(field) [](#method-i-allow_staff_user_custom_field)
 ### auth_provider(opts) [](#method-i-auth_provider)
 ### auto_generated_path() [](#method-i-auto_generated_path)
 ### automatic_assets() [](#method-i-automatic_assets)
 ### commit_hash() [](#method-i-commit_hash)
 ### commit_url() [](#method-i-commit_url)
 ### configurable?() [](#method-i-configurable-3F)
 ### css_asset_exists?(target = nil) [](#method-i-css_asset_exists-3F)
 ### custom_avatar_column(column) [](#method-i-custom_avatar_column)
 ### delete_extra_automatic_assets(good_paths) [](#method-i-delete_extra_automatic_assets)
 ### directory() [](#method-i-directory)
 ### directory_name() [](#method-i-directory_name)
 ### discourse_owned?() [](#method-i-discourse_owned-3F)
 ### enabled?() [](#method-i-enabled-3F)
 ### enabled_site_setting(setting = nil) [](#method-i-enabled_site_setting)
 ### ensure_directory(path) [](#method-i-ensure_directory)
 ### extend_content_security_policy(extension) [](#method-i-extend_content_security_policy)
 ### extend_list_method(klass, method, new_attributes) [](#method-i-extend_list_method)
 ### extra_js_asset_exists?() [](#method-i-extra_js_asset_exists-3F)
 ### gem(name, version, opts = {}) [](#method-i-gem)
 shotgun approach to gem loading, in future we need to hack bundler

```
to at least determine dependencies do not clash before loading
```

Additionally we want to support multiple ruby versions correctly and so on

This is a very rough initial implementation

 ### generate_automatic_assets!() [](#method-i-generate_automatic_assets-21)
 will make sure all the assets this plugin needs are registered

 ### git_repo() [](#method-i-git_repo)
 ### hide_plugin() [](#method-i-hide_plugin)
 ### humanized_name() [](#method-i-humanized_name)
 ### javascript_includes() [](#method-i-javascript_includes)
 ### js_asset_exists?() [](#method-i-js_asset_exists-3F)
 ### listen_for(event_name) [](#method-i-listen_for)
 ### notify_after_initialize() [](#method-i-notify_after_initialize)
 ### on(event_name, &block) [](#method-i-on)
 A proxy to ‘DiscourseEvent.on` which does nothing if the plugin is disabled

 ### register_anonymous_cache_key(key, &block) [](#method-i-register_anonymous_cache_key)
 ### register_asset(file, opts = nil) [](#method-i-register_asset)
 ### register_asset_filter(&blk) [](#method-i-register_asset_filter)
 Register a block to run when adding css and js assets Two arguments will be passed: (type, request) Type is :css or :js. ‘request` is an instance of Rack::Request When using this, make sure to consider the effect on AnonymousCache

 ### register_bookmarkable(klass) [](#method-i-register_bookmarkable)
 Register a class that implements [BaseBookmarkable], which represents another

<dl class="rdoc-list label-list">
<dt>ActiveRecord::Model
</dt>
<dd>
<p>that may be bookmarked via the [Bookmark] model’s</p>
</dd>
</dl>

polymorphic association. The class handles create and destroy hooks, querying, and reminders among other things.

 ### register_category_custom_field_type(name, type, max_length: nil) [](#method-i-register_category_custom_field_type)
 Applies to all sites in a multisite environment. Ignores plugin.enabled?

 ### register_color_scheme(name, colors) [](#method-i-register_color_scheme)
 ### register_css(style) [](#method-i-register_css)
 ### register_custom_filter_by_status(status, &block) [](#method-i-register_custom_filter_by_status)
 Allows to define custom “status:” filter. Example usage:

```
register\_custom\_filter\_by\_status("foobar")do|scope|scope.where("word\_count = 42")end
```
 ### register_custom_html(hash) [](#method-i-register_custom_html)
 ### register_demon_process(demon_class) [](#method-i-register_demon_process)
 Register a new demon process to be forked by the Unicorn master. The demon\_class should inherit from Demon::Base. With great power comes great responsibility - this method should be used with extreme caution. See ‘config/unicorn.conf.rb`.

 ### register_editable_group_custom_field(field) [](#method-i-register_editable_group_custom_field)
 ### register_editable_topic_custom_field(field, staff_only: false) [](#method-i-register_editable_topic_custom_field)
 ### register_editable_user_custom_field(field, staff_only: false) [](#method-i-register_editable_user_custom_field)
 ### register_email_notification_filter(&block) [](#method-i-register_email_notification_filter)
 Registers a new email notification filter. Notification is passed into block, and if all filters return ‘true`, the email notification will be sent.

 ### register_email_poller(poller) [](#method-i-register_email_poller)
 ### register_email_unsubscriber(type, unsubscriber) [](#method-i-register_email_unsubscriber)
 Let plugin define custom unsubscribe keys, set custom instance variables on the ‘EmailController#unsubscribe` action, and describe what unsubscribing for that key does.

The method receives a class that inherits from ‘Email::BaseEmailUnsubscriber`. Take a look at it to know how to implement your child class.

In conjunction with this, you’ll have to:

```
- Register a new connector under app/views/connectors/unsubscribe_options.
We'll include the HTML inside the unsubscribe form, so you can add your fields using the
instance variables you set in the controller previously. When the form is submitted,
it sends the updated preferences to `EmailController#perform_unsubscribe`.

- Your code is responsible for creating the custom key by calling `UnsubscribeKey#create_key_for`.
```
 ### register_emoji(name, url, group = Emoji::DEFAULT_GROUP) [](#method-i-register_emoji)
 ### register_group_custom_field_type(name, type, max_length: nil) [](#method-i-register_group_custom_field_type)
 Applies to all sites in a multisite environment. Ignores plugin.enabled?

 ### register_group_param(param) [](#method-i-register_group_param)
 Add a permitted\_param to Group, respecting if the plugin is enabled Used in GroupsController#update and Admin::GroupsController#create

 ### register_groups_callback_for_users_search_controller_action(callback, &block) [](#method-i-register_groups_callback_for_users_search_controller_action)
 Add a custom callback for search to Group Callback is called in UsersController#search\_users Block takes groups and optional current\_user For example: plugin.register\_groups\_callback\_for\_users\_search\_controller\_action(:admins\_filter) do |groups, user|

```
groups.where(name:"admins")
```

end

 ### register_hashtag_data_source(klass) [](#method-i-register_hashtag_data_source)
 Used to register data sources for HashtagAutocompleteService to look up results based on a hashtag string.

@param {Class} klass - Must be a class that implements methods with the following signatures:

```
Roughly corresponding to a model, this is used as a unique
key for the datasource and is also used when allowing different
contexts to search for and lookup these types. The `category`
and `tag` types are registered by default.
def self.type
end

The FontAwesome icon to use for the data source in the search results
and cooked markdown.
def self.icon
end

@param {Guardian} guardian - Current user's guardian, used for permission-based filtering
@param {Array} slugs - An array of strings that represent slugs to search this type for,
 e.g. category slugs.
@returns {Hash} A hash with the slug as the key and the URL of the record as the value.
def self.lookup(guardian, slugs)
end

@param {Guardian} guardian - Current user's guardian, used for permission-based filtering
@param {String} term - The search term used to filter results
@param {Integer} limit - The number of search results that should be returned by the query
@returns {Array} An Array of HashtagAutocompleteService::HashtagItem
def self.search(guardian, term, limit)
end

@param {Array} search_results - An array of HashtagAutocompleteService::HashtagItem to sort
@param {String} term - The search term which was used, which may help with sorting.
@returns {Array} An Array of HashtagAutocompleteService::HashtagItem
def self.search_sort(search_results, term)
end

@param {Guardian} guardian - Current user's guardian, used for permission-based filtering
@param {Integer} limit - The number of search results that should be returned by the query
@returns {Array} An Array of HashtagAutocompleteService::HashtagItem
def self.search_without_term(guardian, limit)
end
```
 ### register_hashtag_type_priority_for_context(type, context, priority) [](#method-i-register_hashtag_type_priority_for_context)
 Used to set up the priority ordering of hashtag autocomplete results by type using HashtagAutocompleteService.

@param {String} type - Roughly corresponding to a model, can only be registered once

```
per context. The `category` and `tag` types are registered
for the `topic-composer` context by default in that priority order.
```

@param {String} context - The context in which the hashtag lookup or search is happening

```
in. For example, the Discourse composer context is `topic-composer`.
Different contexts may want to have different priority orderings
for certain types of hashtag result.
```

@param {Integer} priority - A number value for ordering type results when hashtag searches

```
or lookups occur. Priority is ordered by DESCENDING order.
```
 ### register_html_builder(name, &block) [](#method-i-register_html_builder)
 ### register_javascript(js) [](#method-i-register_javascript)
 ### register_locale(locale, opts = {}) [](#method-i-register_locale)
 @option opts [String] :name @option opts [String] :nativeName @option opts [String] :fallbackLocale @option opts [Hash] :plural

 ### register_modifier(modifier_name, &blk) [](#method-i-register_modifier)
 ### register_notification_consolidation_plan(plan) [](#method-i-register_notification_consolidation_plan)
 If your plugin creates notifications, and you’d like to consolidate/collapse similar ones, you’re in the right place. This method receives a plan object, which must be an instance of ‘Notifications::ConsolidateNotifications`.

Instead of using ‘Notification#create!`, you should use `Notification#consolidate\_or\_save!`, which will automatically pick your plan and apply it, updating an already consolidated notification, consolidating multiple ones, or creating a regular one.

The rule object is quite complex. We strongly recommend you write tests to ensure your plugin consolidates notifications correctly.

- Threshold and time window consolidation plan: [github.com/discourse/discourse/blob/main/app/services/notifications/consolidate\_notifications.rb](https://github.com/discourse/discourse/blob/main/app/services/notifications/consolidate_notifications.rb)

- Create a new notification and delete previous versions plan: [github.com/discourse/discourse/blob/main/app/services/notifications/delete\_previous\_notifications.rb](https://github.com/discourse/discourse/blob/main/app/services/notifications/delete_previous_notifications.rb)

- Base plans: [github.com/discourse/discourse/blob/main/app/services/notifications/consolidation\_planner.rb](https://github.com/discourse/discourse/blob/main/app/services/notifications/consolidation_planner.rb)

 ### register_post_action_notify_user_handler(handler) [](#method-i-register_post_action_notify_user_handler)
 Register a block that will be called when PostActionCreator is going to notify a user of a post action. If any of these handlers returns false the default PostCreator call will be skipped.

 ### register_post_custom_field_type(name, type, max_length: nil) [](#method-i-register_post_custom_field_type)
 Applies to all sites in a multisite environment. Ignores plugin.enabled?

 ### register_post_stripper(&block) [](#method-i-register_post_stripper)
 We strip posts before detecting mentions, oneboxes, attachments etc. We strip those elements that shouldn’t be detected. For example, a mention inside a quote should be ignored, so we strip it off. Using this API plugins can register their own post strippers.

 ### register_preloaded_category_custom_fields(field) [](#method-i-register_preloaded_category_custom_fields)
 Registers a category custom field to be loaded when rendering a category list Example usage:

```
register\_preloaded\_category\_custom\_fields("custom\_field")
```
 ### register_presence_channel_prefix(prefix, &block) [](#method-i-register_presence_channel_prefix)
 Register a new PresenceChannel prefix. See {PresenceChannel.register\_prefix} for usage instructions

 ### register_problem_check(klass) [](#method-i-register_problem_check)
 ### register_push_notification_filter(&block) [](#method-i-register_push_notification_filter)
 Registers a new push notification filter. User and notification payload are passed into block, and if all filters return ‘true`, the push notification will be sent.

 ### register_reviewable_type(reviewable_type_class) [](#method-i-register_reviewable_type)
 ### register_search_advanced_filter(trigger, &block) [](#method-i-register_search_advanced_filter)
 Allows to define custom search filters. Example usage:

```
Search.advanced\_filter(/^min\_chars:(\d+)$/)do|posts,match|posts.where("(SELECT LENGTH(p2.raw) FROM posts p2 WHERE p2.id = posts.id) \>= ?",match.to\_i)end
```
 ### register_search_advanced_order(trigger, &block) [](#method-i-register_search_advanced_order)
 Allows to define custom search order. Example usage:

```
Search.advanced\_order(:chars)do|posts|posts.reorder("(SELECT LENGTH(raw) FROM posts WHERE posts.topic\_id = subquery.topic\_id) DESC")end
```
 ### register_search_group_query_callback(callback) [](#method-i-register_search_group_query_callback)
 ### register_search_topic_eager_load(tables = nil, &block) [](#method-i-register_search_topic_eager_load)
 Allow to eager load additional tables in Search. Useful to avoid N+1 performance problems. Example usage:

```
register\_search\_topic\_eager\_loaddo|opts|%i(example\_table)end
```

OR

```
register\_search\_topic\_eager\_load(%i(example\_table))
```
 ### register_seed_data(key, value) [](#method-i-register_seed_data)
 ### register_seed_path_builder(&block) [](#method-i-register_seed_path_builder)
 ### register_seedfu_filter(filter = nil) [](#method-i-register_seedfu_filter)
 ### register_seedfu_fixtures(paths) [](#method-i-register_seedfu_fixtures)
 ### register_service_worker(file, opts = nil) [](#method-i-register_service_worker)
 ### register_site_categories_callback(&block) [](#method-i-register_site_categories_callback)
 Register a callback to add custom payload to Site#categories Example usage:

```
register\_site\_categories\_callbackdo|categories|categories.eachdo|category|category[:some\_field] ='test'endend
```
 ### register_stat(name, show_in_ui: false, expose_via_api: false, &block) [](#method-i-register_stat)
 Allows the plugin to export additional site stats via the About class which will be shown on the /about route. The stats returned by the block should be in the following format (these four keys are _required_):

{

```
last_day: 1,
7_days: 10,
30_days: 100,
count: 1000
```

}

Only keys above will be shown on the /about page in the UI, but all stats will be shown on the /about.json route. For example take this usage:

[`register_stat`](Instance.html#method-i-register_stat)(“chat\_messages”) do

```
{last\_day:1,"7\_days"=\>10,"30\_days"=\>100,count:1000,previous\_30\_days:150}
```

end

In the UI we will show a table like this:

```
| 24h | 7 days | 30 days | all time|
```

Chat Messages | 1 | 10 | 100 | 1000 |

But the JSON will be like this:

{

```
"chat_messages_last_day": 1,
"chat_messages_7_days": 10,
"chat_messages_30_days": 100,
"chat_messages_count": 1000,
```

}

The show\_in\_ui option (default false) is used to determine whether the group of stats is shown on the site About page in the Site Statistics table. Some stats may be needed purely for reporting purposes and thus do not need to be shown in the UI to admins/users.

 ### register_summarization_strategy(strategy) [](#method-i-register_summarization_strategy)
 Register an object that inherits from [Summarization::Base], which provides a way to summarize content. Staff can select which strategy to use through the ‘summarization\_strategy` setting.

 ### register_svg_icon(icon) [](#method-i-register_svg_icon)
 ### register_topic_custom_field_type(name, type, max_length: nil) [](#method-i-register_topic_custom_field_type)
 Applies to all sites in a multisite environment. Ignores plugin.enabled?

 ### register_topic_list_preload_user_ids(&block) [](#method-i-register_topic_list_preload_user_ids)
 Allows to add more user IDs to the list of preloaded users. This can be useful to efficiently change the list of posters or participants. Example usage:

```
register\_topic\_list\_preload\_user\_idsdo|topics,user\_ids,topic\_list|user\_ids\<\<Discourse::SYSTEM\_USER\_IDend
```
 ### register_topic_thumbnail_size(size) [](#method-i-register_topic_thumbnail_size)
 Request a new size for topic thumbnails Will respect plugin enabled setting is enabled Size should be an array with two elements [max\_width, max\_height]

 ### register_topic_view_posts_filter(trigger, &block) [](#method-i-register_topic_view_posts_filter)
 Allows to define TopicView posts filters. Example usage:

```
TopicView.advanced\_filterdo|posts,opts|posts.where(wiki:true)end
```
 ### register_upload_in_use(&block) [](#method-i-register_upload_in_use)
 ### register_upload_unused(&block) [](#method-i-register_upload_unused)
 ### register_user_custom_field_type(name, type, max_length: nil) [](#method-i-register_user_custom_field_type)
 Applies to all sites in a multisite environment. Ignores plugin.enabled?

 ### register_user_destroyer_on_content_deletion_callback(callback) [](#method-i-register_user_destroyer_on_content_deletion_callback)
 Register a block that will be called when the UserDestroyer runs with the :delete\_posts opt set to true. It’s important to note that the block will execute before any other :delete\_posts actions, it allows us to manipulate flags before agreeing with them. For example, discourse-akismet makes use of this

@param {Block} callback to be called with the user, guardian, and the destroyer opts as arguments

 ### replace_flags(settings: ::FlagSettings.new, score_type_names: []) { |settings, next_flag_id| ... } [](#method-i-replace_flags)
 Applies to all sites in a multisite environment. Ignores plugin.enabled?

 ### rescue_from(exception, &block) [](#method-i-rescue_from)
 ### root_dir() [](#method-i-root_dir)
 ### seed_data() [](#method-i-seed_data)
 ### seed_fu_filter(filter = nil) [](#method-i-seed_fu_filter)
 ### topic_view_post_custom_fields_allowlister(&block) [](#method-i-topic_view_post_custom_fields_allowlister)
 Add a post\_custom\_fields\_allowlister block to the TopicView, respecting if the plugin is enabled

 ### translate_emoji(from, to) [](#method-i-translate_emoji)
 ### validate(klass, name, &block) [](#method-i-validate)
 Add validation method but check that the plugin is enabled

 ### visible?() [](#method-i-visible-3F)
