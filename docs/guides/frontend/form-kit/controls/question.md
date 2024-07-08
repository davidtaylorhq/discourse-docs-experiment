# Question

Renders two inputs of type radio where the first one is a positive answer, the second one a negative answer.

## @yesLabel

Allows to customize the positive label.

## @noLabel

Allows to customize the negative label.

**Examples**

```hbs
<Form as |form|>
  <form.Field @name="email" @title="Email" as |field|>
    <field.Question @yesLabel="Correct" @noLabel="Wrong" />
  </form.Field>
</Form>
```
