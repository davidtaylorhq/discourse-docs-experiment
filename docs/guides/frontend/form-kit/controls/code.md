# Code

Renders an `<AceEditor />` component.

## @height

Sets the height of the editor.

## @lang

Sets the language of the editor.

**Example**

```hbs
<Form as |form|>
  <form.Field @name="query" as |field|>
    <field.Code @lang="sql" @height={{400}} />
  </form.Field>
</Form>
```
