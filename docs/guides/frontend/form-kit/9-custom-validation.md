# Custom Validation

## Field

The [Field](./field) component accepts a `@validate` property, allowing you to define a callback function for custom field validation. [Read more about addError](./helpers#add-error).

**Parameters**

- `name` (string): The name of the form field being validated.
- `value` (string): The value of the form field being validated.
- `data` (Object): The data object containing additional information for validation.
- `handlers` (Object): An object containing handler functions.
  - `handlers.addError` (Function): A function to add an error if validation fails.

**Example**

```javascript
validateUsername(name, value, data, { addError }) {
  if (data.bar / 2 === value) {
    addError(name, "That's not how maths work.");
  }
}
```

```hbs
<form.Field @name="username" @validate={{this.validateUsername}} />
```

## Form

The [Form](./form) component accepts a `@validate` property, allowing you to define a callback function for custom form validation. This callback will be called for each field in the form.

**Parameters**

- `name` (string): The name of the form field being validated.
- `value` (string): The value of the form field being validated.
- `data` (Object): The data object containing additional information for validation.
- `handlers` (Object): An object containing handler functions.
  - `handlers.addError` (Function): A function to add an error if validation fails.

**Example**

```javascript
validateForm(data, { addError }) {
  if (data.bar / 2 === data.baz) {
    addError("foo", "That's not how maths work.");
  }
}
```

```hbs
<Form @validate={{this.validateForm}} />
```
