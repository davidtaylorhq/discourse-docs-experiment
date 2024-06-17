# Controls

Controls as we use the term here refer to the UI widgets that allow a user to enter data. In its most basic form that would be a `<field.Input />`.

Each control accepts the following properties:

| property       | type                 | default     | required | description                              |
| -------------- | -------------------- | ----------- | -------- | ---------------------------------------- |
| `@title`       | `string` `undefined` | `undefined` | `false`  | displays a title above the control       |
| `@subtitle`    | `string` `undefined` | `undefined` | `false`  | displays a subtitle above the control    |
| `@description` | `string` `undefined` | `undefined` | `false`  | displays a description under the control |

## Examples

```hbs
<Form as |form|>
  <form.Field @name="query" as |field|>
    <field.Code
      @title="Query"
      @subtitle="The query to list users"
      @description="You should make sure the query doesn’t include bots."
    />
  </form.Field>
</Form>
```
