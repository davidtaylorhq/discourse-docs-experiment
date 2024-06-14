# Code

Renders an `<AceEditor />` component.

| property       | type      | default | required | description                              |
| -------------- | --------- | ------- | -------- | ---------------------------------------- |
| `@height`      | `integer` | `200`   | `false`  | sets the height of the code editor       |
| `@lang`        | `string`  | `null`  | `false`  | sets the language of the code editor     |
| `@title`       | `string`  | `null`  | `false`  | displays a title above the control       |
| `@subtitle`    | `string`  | `null`  | `false`  | displays a subtitle above the control    |
| `@description` | `string`  | `null`  | `false`  | displays a description under the control |

## Example

```hbs
<Form as |form|>
  <form.Field @name="query" as |field|>
    <field.Code @lang="sql" @height={{400}} />
  </form.Field>
</Form>
```
