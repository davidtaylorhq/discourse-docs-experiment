# Form

## yielded params

### form

The Form component will yield a form object which contains the following properties:

- Row
- Section
- ConditionalContent
- Errors
- Container
- Actions
- Button
- [Alert](./alert)
- [Submit](./submit)
- [Field](./field)
- InputGroup
- [set](./helpers#set)

#### Examples

```hbs
<Form as |form|>
  <form.Row as |row|>
    <!-- ... -->
  </form.Row>
</Form>
```

### transientData

Transient data represents the state of the data at a given time as it's represented in the form, and not yet propagated to the `@data`.

:::tip
This is useful if you want to have conditionals in your form based on other fields.
:::

#### Examples

```hbs
<Form as |form transientData|>
  <form.Field @name="amount" as |field|>
    <field.Input @type="number">
  </form.Field>

  {{#if (gt amount 200)}}
    <form.Field @name="confirmed" as |field|>
      <field.Checkbox>I know what I'm doing</field.Checkbox>
    </form.Field>
  {{/if}}
</Form>
```

## Properties

### @data

Initial state of the data you give to the form.

**The keys matchting the `@name`s of the form's fields will be prepopulated.**

:::info
`@data` is treated as an immutable object, following Ember's DDAU pattern. Which means when the user enters new data for any of the fields, it will not cause a mutation of `@data`! You can mutate your initial object using `@onSet`.
:::

#### Arguments

- {Object} data - The data object passed to the template.

#### Examples

```hbs
<Form @data={{hash foo="bar"}} as |form|>
  <form.Field @name="foo" as |field|>
    <!-- This input will have bar as value -->
    <field.Input />
  </form.Field>
</Form>
```

### @onRegisterApi

Callback called when the form is inserted. It allows the developer to interact with the form through javascript.

#### Arguments

- {Object} callback - The object containing callback functions.
- {Function} callback.submit - The function to submit the form.
- {Function} callback.reset - The function to reset the form.
- {Function} callback.set - The function to set a key/value on the form data object.

#### Examples

```javascript
registerAPI({ submit, reset, set }) {
  submit();
  reset();
  set("foo", 1);
}
```

```hbs
<Form @onRegisterApi={{this.registerAPI}} />
```

### @onSubmit

Callback called when the form is submitted **and valid**.

#### Arguments

- {Object} data - The object containing the form data.

#### Examples

```javascript
handleSubmit({ username, age }) {
  console.log(username, age);
}
```

```hbs
<Form @onSubmit={{this.handleSubmit}} as |form|>
  <form.Field @name="username" as |field|>
    <field.Input />
  </form.Field>
  <form.Field @name="age" as |field|>
    <field.Input @type="number" />
  </form.Field>
</Form>
```
