# Validation

[Field](./field) accept a `@validation` property which allows to describe the validation rules of the field.

## List of availables rules

### Accepted

The value must be `"yes"`, `"on"`, `true`, `1` or `"true"`. Useful for checkbox inputs — often where you need to validate if someone has accepted terms.

**Examples**

```hbs
<field.Checkbox @name="terms" @validation="accepted" />
```

### Length

Checks that the input’s value is over a given length, or between two length values.

**Examples**

```hbs
<field.Input @name="username" @validation="length:5,16" />
```

### Number

Checks if the input is a valid number as evaluated by isNaN().

:::tip

When applicable, prefer to use the number input: `<field.Input @type="number" />`.

:::

**Examples**

```hbs
<field.Input @name="amount" @validation="number" />
```

### Required

Checks if the input is empty.

**Examples**

```hbs
<field.Input @name="username" @validation="required" />
```

### URL

Checks if the input value appears to be a properly formatted URL including the protocol. This does not check if the URL actually resolves.

**Examples**

```hbs
<field.Input @name="endpoint" @validation="url" />
```

## Combining rules

Rules can be combined using pipe operator: `|`.

**Examples**

```hbs
<field.Input @name="username" @validation="required|length:5,16" />
```

## Custom validation

### Field

[Field](./field) accept a `@validate` property which allows to define a callback function to validate the field. [Read more about addError](./helpers#add-error).

**Parameters**

- {string} name - The name of the form field being validated.
- {string} value - The value of the form field being validated.
- {Object} data - The data object containing additional information for validation.
- {Object} handlers - An object containing handler functions.
- {Function} handlers.addError - A function to add an error if validation fails.

**Examples**

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

### Form

[Form](./form) accept a `@validate` property which allows to define a callback function to validate the form. This will be called for each field of the form.

**Parameters**

- {Object} data - The data object containing additional information for validation.
- {Object} handlers - An object containing handler functions.
- {Function} handlers.addError - A function to add an error if validation fails.

**Examples**

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
