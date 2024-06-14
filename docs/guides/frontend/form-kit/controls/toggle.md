# Toggle

Renders an `<DToggleSwitch />` component.

| property       | type     | default | required | description                              |
| -------------- | -------- | ------- | -------- | ---------------------------------------- |
| `@title`       | `string` | `null`  | `false`  | displays a title above the control       |
| `@subtitle`    | `string` | `null`  | `false`  | displays a subtitle above the control    |
| `@description` | `string` | `null`  | `false`  | displays a description under the control |

## Example

```hbs
<Form as |form|>
  <form.Field @name="allowed" as |field|>
    <field.Toggle />
  </form.Field>
</Form>
```
