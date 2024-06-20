# Field

## Name

A field must have a unique name. This name is used to set the value on the data object, and is also used for validation.

### Examples

```hbs
<form.Field @name="foo" />
```

## Title

A field must have a title, it will be displayed over the control and is also used in validation.

### Examples

```hbs
<form.Field @title="Foo" />
```

## Subtitle

The subtitle is optional and will be shown under the title when set.

### Examples

```hbs
<form.Field @subtitle="Bar" />
```

## Show title

By default the title will be shown on top of the control, you can decide to not render it by setting this property to `false`.

### Examples

```hbs
<form.Field @showTitle={{false}} />
```

## Disabled

A field can be disabled to prevent any change to it.

### Examples

```hbs
<form.Field @diasbled={{true}} />
```

## Validation

Read the dedicated [documentation about @validation](./validation).

## Validate

Read the dedicated [documentation about @validate](./custom-validation).

## Custom set

By default when changing the value of a field, this value will be set on the form internal data object. You can however decide to get full controll of this for a field.

### Examples

```javascript
@action
handleFooChange(value, { set }) {
  set("foo", value + "-bar");
}
```

```hbs
<form.Field @name="foo" @onSet={{this.handleFooChange}} as |field|>
  <field.Input />
</form.Field>
```

:::tip

You can use `@onSet` to mutate the initial data object if you need more reactivity for a specific case.

:::

```javascript
@action
handleFooChange(value, { set }) {
  set("foo", value + "-bar");
  this.model.foo = value + "-bar";
}
```

```hbs
<Form @data={{this.model}} as |form|>
  <form.Field @name="foo" @onSet={{this.handleFooChange}} as |field|>
    <field.Input />
  </form.Field>
</Form>
```
