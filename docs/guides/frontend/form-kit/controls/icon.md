# Icon

Renders an `<IconPicker />` component.

| property       | type     | default | required | description                              |
| -------------- | -------- | ------- | -------- | ---------------------------------------- |
| `@title`       | `string` | `null`  | `false`  | displays a title above the control       |
| `@subtitle`    | `string` | `null`  | `false`  | displays a subtitle above the control    |
| `@description` | `string` | `null`  | `false`  | displays a description under the control |

## Example

```hbs
<Form as |form|>
  <form.Field @name="icon" as |field|>
    <field.Icon />
  </form.Field>
</Form>
```
