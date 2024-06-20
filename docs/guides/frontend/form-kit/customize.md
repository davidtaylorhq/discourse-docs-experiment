# Customize

## Plugin outlets

FormKit works out of the box with `<PluginOutlet />`, you can use them inside your form:

```hbs
<Form as |form|>
  <PluginOutlet @name="above-foo-form" @outletArgs={{hash form=form}} />
</Form>
```

And then in your connector:

```hbs title="connectors/above-foo-form/bar-input.hbs"
<@outletArgs.form.Field @name="bar" as |field|>
  <field.Input />
</@outletArgs.form.Field>
```

## Styling

Every components of FormKit will propagate attributes, which allows you to set class and data attributes for example:

```hbs
<Form class="my-form" as |form|>
  <form.Field class="my-field" as |field|>
    <field.Input class="my-control" />
  </form.Field>
</Form>
```

## Custom control

Creating a custom control is made simple by what is yieled by form and field:

```hbs
<Form as |form|>
  <form.Field class="my-field" as |field|>
    <MyCustomControl id={{field.id}} @onChange={{field.set}}>
  </form.Field>
</Form>
```

Available params on form:

| name  | description                                            |
| ----- | ------------------------------------------------------ |
| `set` | Allows to set the value of any `name`: `set("bar", 1)` |

Available params on field:

| name      | description                                    |
| --------- | ---------------------------------------------- |
| `set`     | Allows to set the value of the fied: `set(1)`  |
| `id`      | id to be used on the control for accessibility |
| `errorId` | id to be used on the errors container          |
| `name`    | name of the field                              |
| `value`   | the value of the field                         |
