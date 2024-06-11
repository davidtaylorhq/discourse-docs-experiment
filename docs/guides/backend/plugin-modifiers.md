# Plugin Modifiers

Introduces a new API for plugin data modification without class-based extension overhead.

This commit introduces a new API that allows plugins to modify data in cases where they return different data rather than additional data, as is common with filtered_registers in DiscoursePluginRegistry. This API removes the need for defining class-based extension points.

When a plugin registers a modifier, it will automatically be called if the plugin is enabled. The core will then modify the parameter sent to it using the block registered by the plugin:
 
```ruby
DiscoursePluginRegistry.register_modifier(plugin_instance, :magic_sum_modifier) { |a, b| a + b }
sum = DiscoursePluginRegistry.apply_modifier(:magic_sum_filter, 1, 2)
expect(sum).to eq(3)
```

Key features of these modifiers:

- Operate in a stack (first registered, first called)
- Automatically disabled when the plugin is disabled
- Pass the cumulative result of all block invocations to the caller