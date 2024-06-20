# Customize

## Plugin Outlets

FormKit works seamlessly with `<PluginOutlet />`. You can use plugin outlets inside your form to extend its functionality:

```hbs
<Form as |form|>
  <PluginOutlet @name="above-foo-form" @outletArgs={{hash form=form}} />
</Form>
```

Then, in your connector, you can use the outlet arguments to add custom fields:

```hbs title="connectors/above-foo-form/bar-input.hbs"
<@outletArgs.form.Field @name="bar" as |field|>
  <field.Input />
</@outletArgs.form.Field>
```

## Styling

All FormKit components propagate attributes, allowing you to set classes and data attributes, for example:

```hbs
<Form class="my-form" as |form|>
  <form.Field class="my-field" as |field|>
    <field.Input class="my-control" />
  </form.Field>
</Form>
```

## Custom Control

Creating a custom control is straightforward with the properties yielded by `form` and `field`:

```hbs
<Form as |form|>
  <form.Field class="my-field" as |field|>
    <MyCustomControl id={{field.id}} @onChange={{field.set}} />
  </form.Field>
</Form>
```

### Available Parameters on `form`

| Name  | Description                                                       |
| ----- | ----------------------------------------------------------------- |
| `set` | Allows you to set the value of any field by name: `set("bar", 1)` |

### Available Parameters on `field`

| Name      | Description                                        |
| --------- | -------------------------------------------------- |
| `set`     | Allows you to set the value of the field: `set(1)` |
| `id`      | ID to be used on the control for accessibility     |
| `errorId` | ID to be used on the errors container              |
| `name`    | Name of the field                                  |
| `value`   | The value of the field                             |

This documentation provides clear instructions and examples for customizing FormKit forms, using plugin outlets, styling components, and creating custom controls.
