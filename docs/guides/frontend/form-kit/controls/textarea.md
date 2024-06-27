# Text

Renders a `<textarea>` element.

## @height

Sets the height of the textarea.

**Example**

```hbs
<Form as |form|>
  <form.Field @name="description" @title="Description" as |field|>
    <field.Textarea @height={{120}} />
  </form.Field>
</Form>
```
