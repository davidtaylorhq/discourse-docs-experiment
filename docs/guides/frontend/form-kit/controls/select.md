# Select

Renders a `<select>` element.

**Example**

```hbs
<Form as |form|>
  <form.Field @name="fruits" @title="Fruits" as |field|>
    <field.Select as |select|>
      <select.Option @value="1">Mango</select.Option>
      <select.Option @value="2">Apple</select.Option>
      <select.Option @value="3">Coconut</select.Option>
    </field.Select>
  </form.Field>
</Form>
```
