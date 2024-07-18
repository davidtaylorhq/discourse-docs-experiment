# Password

Renders an `<input />` of type password. This control also includes a button which will allow to toggle the visibility of the text. When toggle the type of the input will be switched to text.

**Example**

```hbs
<Form as |form|>
  <form.Field @name="secret" @title="Secret" as |field|>
    <field.Password />
  </form.Field>
</Form>
```
