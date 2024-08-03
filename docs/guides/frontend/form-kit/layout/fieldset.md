# Fieldset

Wraps content in a fieldset.

**Example**

```hbs
<form.Fieldset @name="a-fieldset" class="my-fieldset">
  Foo
</form.Fieldset>
```

## @title

Displays a title for the fieldset, will use the legend element.

**Example**

```hbs
<form.Fieldset @title="A title">
  Foo
</form.Fieldset>
```

## @description

Displays a description for the fieldset.

**Example**

```hbs
<form.Fieldset @description="A description">
  Foo
</form.Fieldset>
```

## @name

Sets the name of the fieldset. This is necessary if you want to use the fieldset test helpers.

**Example**

```hbs
<form.Fieldset @name="a-name">
  Foo
</form.Fieldset>
```
