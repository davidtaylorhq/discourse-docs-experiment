# Composer

Renders a `<DEditor />` component.

| property       | type      | default | required | description                              |
| -------------- | --------- | ------- | -------- | ---------------------------------------- |
| `@height`      | `integer` | `200`   | `false`  | sets the height of the composer          |
| `@title`       | `string`  | `null`  | `false`  | displays a title above the control       |
| `@subtitle`    | `string`  | `null`  | `false`  | displays a subtitle above the control    |
| `@description` | `string`  | `null`  | `false`  | displays a description under the control |

## Example

```hbs
<Form as |form|>
  <form.Field @name="message" as |field|>
    <field.Composer @height={{400}} />
  </form.Field>
</Form>
```
