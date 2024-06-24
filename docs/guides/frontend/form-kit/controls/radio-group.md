# RadioGroup

Renders a list of radio buttons sharing a common name.

**Example**

```hbs
<Form as |form|>
  <form.Field @name="foo" @title="Foo" as |field|>
    <field.RadioGroup as |radioGroup|>
      <radioGroup.Radio @value="one">One</radioGroup.Radio>
      <radioGroup.Radio @value="two">Two</radioGroup.Radio>
      <radioGroup.Radio @value="three">Three</radioGroup.Radio>
    </field.RadioGroup>
  </form.Field>
</Form>
```
