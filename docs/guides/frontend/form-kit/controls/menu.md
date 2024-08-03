# Menu

Renders a <DMenu /> component.

## @selection

The text to show on the trigger.

## yielded parameters

### Item

Renders a selectable row. Accepts `@value`, `@icon` and `@action` props.

- @value: allows to assign a value to a row.
- @icon: shows an icon at the start of the row.
- @action: override the default action which would set the value of the field with the value of this row.

The content will be yieled.

### Divider

Renders a separator.

### Container

Renders a div which will have for content the yielded content.

**Examples**

```hbs
<Form as |form|>
  <form.Field @name="email" @title="Email" as |field|>
    <field.Menu as |menu|>
      <menu.Item @value={{1}} @icon="pencil-alt">Edit</menu.Item>
      <menu.Divider />
      <menu.Container class="foo">
        Bar
      </menu.Container>
      <menu.Item @action={{this.doSomething}}>Something</menu.Item>
    </field.Menu>
  </form.Field>
</Form>
```
