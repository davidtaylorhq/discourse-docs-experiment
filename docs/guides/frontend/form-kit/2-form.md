# Form

## Yielded Parameters

### form

The `Form` component yields a `form` object containing the following properties:

- [Row/Col](./layout/row-col)
- [Section](./layout#section)
- [Collection](./collection)
- [Container](./layout#container)
- [Actions](./layout#actions)
- [Alert](./layout/alert)
- [Submit](./layout/submit)
- [Field](./field)
- [set](./helpers#set)
- [setProperties](./helpers#setProperties)

**Example**

```hbs
<Form as |form|>
  <form.Row as |row|>
    <!-- ... -->
  </form.Row>
</Form>
```

### transientData

`transientData` represents the state of the data at a given time as it's represented in the form, and not yet propagated to `@data`.

:::tip
This is useful if you want to have conditionals in your form based on other fields.
:::

**Example**

```hbs
<Form as |form transientData|>
  <form.Field @name="amount" as |field|>
    <field.Input @type="number" />
  </form.Field>

  {{#if (gt transientData.amount 200)}}
    <form.Field @name="confirmed" as |field|>
      <field.Checkbox>I know what I'm doing</field.Checkbox>
    </form.Field>
  {{/if}}
</Form>
```

## Properties

### @data

Initial state of the data you give to the form.

**The keys matching the `@name`s of the form's fields will be prepopulated.**

:::info
`@data` is treated as an immutable object, following Ember's DDAU pattern. This means when the user enters new data for any of the fields, it will not cause a mutation of `@data`! You can mutate your initial object using `@onSet`.
:::

When working with an object object we recommend to setup your form data object like this:

```
@cached
get formData() {
  return getProperties(this.model, "foo", "bar", "baz");
}
```

**Parameter**

- `data` (Object): The data object passed to the template.

**Example**

```hbs
<Form @data={{hash foo="bar"}} as |form|>
  <form.Field @name="foo" as |field|>
    <!-- This input will have "bar" as its initial value -->
    <field.Input />
  </form.Field>
</Form>
```

### @onRegisterApi

Callback called when the form is inserted. It allows the developer to interact with the form through JavaScript.

**Parameters**

- `callback` (Object): The object containing callback functions.
  - `callback.submit` (Function): Function to submit the form.
  - `callback.reset` (Function): Function to reset the form.
  - `callback.set` (Function): Function to set a key/value on the form data object.
  - `callback.setProperties` (Function): Function to set an object on the form data object.
  - `callback.isDirty` (boolean): Tracked property return the state of the form. It will be true once changes have been done on the form. Reseting the changes will bring it back to false.

**Example**

```javascript
registerAPI({ submit, reset, set }) {
  // Interact with the form API
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

**Parameters**

- `data` (Object): The object containing the form data.

**Example**

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
  <form.Submit />
</Form>
```

### @validate

A custom validation callback added directly to the form.

**Example**

```javascript
@action
myValidation(data, { addError }) {
  if (data.foo !== data.bar) {
    addError("foo", { title: "Foo", message: "Bar must be equal to Foo" });
  }
}
```

```hbs
<Form @validate={{this.myValidation}} />
```

An asynchronous example:

```javascript
@action
async myValidation(data, { addError }) {
  try {
    await ajax("/check-username", {
      type: "POST",
      data: { username: data.username }
    });
  } catch(e) {
    addError("username", { title: "Username", message: "Already taken!" });
  }
}
```
