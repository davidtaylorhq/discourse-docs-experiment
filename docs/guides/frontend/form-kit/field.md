# Field

## @name

A field must have a unique name. This name is used to set the value on the data object and is also used for validation.

**Example**

```hbs
<form.Field @name="foo" />
```

## @title

A field must have a title. It will be displayed above the control and is also used in validation.

**Example**

```hbs
<form.Field @title="Foo" />
```

## @subtitle

The subtitle is optional and will be shown under the title when set.

**Example**

```hbs
<form.Field @subtitle="Bar" />
```

## @showTitle

By default, the title will be shown on top of the control. You can choose not to render it by setting this property to `false`.

**Example**

```hbs
<form.Field @showTitle={{false}} />
```

## @disabled

A field can be disabled to prevent any changes to it.

**Example**

```hbs
<form.Field @disabled={{true}} />
```

## @validation

Read the dedicated [documentation about @validation](./validation).

## @validate

Read the dedicated [documentation about @validate](./custom-validation).

## @onSet

By default, when changing the value of a field, this value will be set on the form's internal data object. However, you can choose to have full control over this process for a field.

**Example**

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
You can use `@onSet` to also mutate the initial data object if you need more reactivity for a specific case.
:::

**Example**

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
