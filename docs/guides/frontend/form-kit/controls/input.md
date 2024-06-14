# Text

Renders a `<textarea>` element.

| property  | type      | default | required | description                     |
| --------- | --------- | ------- | -------- | ------------------------------- |
| `@height` | `integer` | `200`   | `false`  | sets the height of the textarea |

## Example

```hbs preview-template
<Form as |form|>
  <form.Field @name="description" as |field|>
    <field.Text @height={{120}} />
  </form.Field>
</Form>
```