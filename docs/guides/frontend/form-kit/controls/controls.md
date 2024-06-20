# Controls

Controls as we use the term here refer to the UI widgets that allow a user to enter data. In its most basic form that would be an [input](./input).

:::tip

You can pass down HTML attributes to the underlying control.

:::

## Examples

```hbs
<Form as |form|>
  <form.Field
    @name="query"
    @title="Query"
    @subtitle="The query to list users"
    @description="You should make sure the query doesn’t include bots."
    as |field|
  >
    <field.Input placeholder="Foo" />
  </form.Field>
</Form>
```
