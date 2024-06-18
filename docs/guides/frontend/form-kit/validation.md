# Validation

## Inline validation

[Field](./field) accept a `@validation` property which allows to describe the validation rules of the field.

### Examples

A required field, with a length between 3 and 15 characters:

```hbs
<form.Field @name="username" @validation="required|length:3,15">
```

## Custom field validation

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
  if (data.oldUsername === value) {
    addError({
      type: "identic_username",
      value,
      message: "You must choose a different username."
    })
  }
}
```

```hbs
<form.Field @name="username" @validate={{this.validateUsername}}>
```

## Custom form validation

[Form](./form) accept a `@validate` property which allows to define a callback function to validate the form. This will be called for each field of the form.

#### Arguments

- {string} name - The name of the form field being validated.
- {string} value - The value of the form field being validated.
- {Object} data - The data object containing additional information for validation.
- {Object} handlers - An object containing handler functions.
- {Function} handlers.addError - A function to add an error if validation fails.

#### Examples

```javascript
validateForm(name, value, data, { addError }) {
  if (data.oldUsername === value) {
    addError({
      type: "identic_username",
      value,
      message: "You must choose a different username."
    })
  }
}
```

```hbs
<Form @validate={{this.validateForm}} />
```
