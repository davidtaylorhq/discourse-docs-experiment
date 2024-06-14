# Text

Renders a `<textarea>` element.

| property       | type      | default | required | description                              |
| -------------- | --------- | ------- | -------- | ---------------------------------------- |
| `@height`      | `integer` | `200`   | `false`  | sets the height of the textarea          |
| `@title`       | `string`  | `null`  | `false`  | displays a title above the control       |
| `@subtitle`    | `string`  | `null`  | `false`  | displays a subtitle above the control    |
| `@description` | `string`  | `null`  | `false`  | displays a description under the control |

## Example

```hbs
<Form as |form|>
  <form.Field @name="description" as |field|>
    <field.Text @height={{120}} />
  </form.Field>
</Form>
```
