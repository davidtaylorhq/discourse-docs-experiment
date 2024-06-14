# Text

Renders a `<select>` element.

| property       | type     | default | required | description                              |
| -------------- | -------- | ------- | -------- | ---------------------------------------- |
| `@title`       | `string` | `null`  | `false`  | displays a title above the control       |
| `@subtitle`    | `string` | `null`  | `false`  | displays a subtitle above the control    |
| `@description` | `string` | `null`  | `false`  | displays a description under the control |

## Example

```hbs
<Form as |form|>
  <form.Field @name="fruits" as |field|>
    <field.Select as |select|>
      <select.Option @value="1">Mango</select.Option>
      <select.Option @value="2">Apple</select.Option>
      <select.Option @value="3">Coconut</select.Option>
    </field.Select>
  </form.Field>
</Form>
```
