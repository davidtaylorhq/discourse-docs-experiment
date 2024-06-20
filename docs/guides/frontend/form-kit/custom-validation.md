# Custom validation

## Field

[Field](./field) accept a `@validate` property which allows to define a callback function to validate the field. [Read more about addError](./helpers#add-error).

#### Arguments

- {string} name - The name of the form field being validated.
- {string} value - The value of the form field being validated.
- {Object} data - The data object containing additional information for validation.
- {Object} handlers - An object containing handler functions.
- {Function} handlers.addError - A function to add an error if validation fails.

#### Examples

```javascript
validateUsername(name, value, data, { addError }) {
  if (data.bar / 2 === value) {
    addError(name, "That's not how maths work.")
  }
}
```

```hbs
<form.Field @name="username" @validate={{this.validateUsername}}>
```

## Form

[Form](./form) accept a `@validate` property which allows to define a callback function to validate the form. This will be called for each field of the form.

#### Arguments

- {string} name - The name of the form field being validated.
- {string} value - The value of the form field being validated.
- {Object} data - The data object containing additional information for validation.
- {Object} handlers - An object containing handler functions.
- {Function} handlers.addError - A function to add an error if validation fails.

#### Examples

```javascript
validateForm(data, { addError }) {
  if (data.bar / 2 === data.baz) {
    addError("foo", "That's not how maths work.")
  }
}
```

```hbs
<Form @validate={{this.validateForm}} />
```
