# Composer

Renders a `<DEditor />` component.

## @height

Sets the height of the composer.

**Example**

```hbs
<Form as |form|>
  <form.Field @name="message" @title="Message" as |field|>
    <field.Composer @height={{400}} />
  </form.Field>
</Form>
```
