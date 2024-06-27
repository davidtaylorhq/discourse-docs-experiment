# Toggle

Renders a `<DToggleSwitch />` component.

:::tip When to use a toggle

There are only 2 states: enabled/disabled. It should feel like turning something on. Toggling takes effect immediately, there is no submit button.

:::

**Example**

```hbs
<Form as |form|>
  <form.Field @name="allowed" @title="Allowed" as |field|>
    <field.Toggle />
  </form.Field>
</Form>
```
