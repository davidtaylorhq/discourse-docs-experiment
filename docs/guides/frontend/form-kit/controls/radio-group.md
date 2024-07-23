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

## Radio yielded parameters

### Title

Allows to render a title.

**Examples**

```hbs
<Form as |form|>
  <form.Field @name="foo" @title="Foo" as |field|>
    <field.RadioGroup as |RadioGroup|>
      <RadioGroup.Radio @value="one" as |radio|>
        <radio.Title>One title</radio.Title>
      </RadioGroup.Radio>
    </field.RadioGroup>
  </form.Field>
</Form>
```

### Description

Allows to render a description.

**Examples**

```hbs
<Form as |form|>
  <form.Field @name="foo" @title="Foo" as |field|>
    <field.RadioGroup as |RadioGroup|>
      <RadioGroup.Radio @value="one" as |radio|>
        <radio.Description>One description</radio.Description>
      </RadioGroup.Radio>
    </field.RadioGroup>
  </form.Field>
</Form>
```
