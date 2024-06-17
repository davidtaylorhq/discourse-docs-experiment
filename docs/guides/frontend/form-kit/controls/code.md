# Code

Renders an `<AceEditor />` component.

| property  | type                  | default     | required | description                          |
| --------- | --------------------- | ----------- | -------- | ------------------------------------ |
| `@height` | `integer` `undefined` | `200`       | `false`  | sets the height of the code editor   |
| `@lang`   | `string` `undefined`  | `undefined` | `false`  | sets the language of the code editor |

## Examples

```hbs
<Form as |form|>
  <form.Field @name="query" as |field|>
    <field.Code @lang="sql" @height={{400}} />
  </form.Field>
</Form>
```
