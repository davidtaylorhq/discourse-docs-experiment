# Text

Renders a `<textarea>` element.

## @height

Sets the height of the textarea.

## Examples

```hbs
<Form as |form|>
  <form.Field @name="description" as |field|>
    <field.Text @height={{120}} />
  </form.Field>
</Form>
```
