# Input Group

Input group allows to group multiple inputs together on one line.

**Example**

```hbs
<Form as |form|>
  <form.InputGroup as |inputGroup|>
    <inputGroup.Field @title="Foo" @name="foo" as |field|>
      <field.Input />
    </inputGroup.Field>
    <inputGroup.Field @title="Bar" @name="bar" as |field|>
      <field.Input />
    </inputGroup.Field>
  </form.InputGroup>
</Form>
```
