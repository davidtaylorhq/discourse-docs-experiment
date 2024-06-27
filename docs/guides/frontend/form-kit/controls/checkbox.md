# Checkbox

Renders an `<input type="checkbox">` element.

:::tip When to use a single checkbox

There are only 2 options: yes/no. It feels like agreeing to something. Checking the box doesn’t save; there is a submit button further down.

:::

**Example**

```hbs
<Form as |form|>
  <form.Field @name="approved" @title="Approved" as |field|>
    <field.Checkbox />
  </form.Field>
</Form>
```
