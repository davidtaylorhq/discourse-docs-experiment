# Composer

Renders a `<DEditor />` component.

| property  | type                  | default | required | description                     |
| --------- | --------------------- | ------- | -------- | ------------------------------- |
| `@height` | `integer` `undefined` | `200`   | `false`  | sets the height of the composer |

## Examples

```hbs
<Form as |form|>
  <form.Field @name="message" as |field|>
    <field.Composer @height={{400}} />
  </form.Field>
</Form>
```
