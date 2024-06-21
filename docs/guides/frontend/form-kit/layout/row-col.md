# Row and Col

`Row` and `Col` enable you to utilize a simple grid system (12 columns) within your form.

**Example**

```hbs
<Form as |form|>
  <form.Row as |row|>
    <row.Col @size={{4}}>
      <form.Field @name="foo" @title="Foo" as |field|>
        <field.Input />
      </form.Field>
    </row.Col>
    <row.Col @size={{8}}>
      <form.Field @name="bar" @title="Bar" as |field|>
        <field.Input />
      </form.Field>
    </row.Col>
  </form.Row>
</Form>
```
