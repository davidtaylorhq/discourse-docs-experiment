# Validation

[Field](./field) accepts a `@validation` property which allows you to describe the validation rules of the field.

## List of Available Rules

### Accepted

The value must be `"yes"`, `"on"`, `true`, `1`, or `"true"`. Useful for checkbox inputs — often where you need to validate if someone has accepted terms.

**Example**

```hbs
<field.Checkbox @name="terms" @validation="accepted" />
```

### Length

Checks that the input’s value is over a given length, or between two length values.

**Example**

```hbs
<field.Input @name="username" @validation="length:5,16" />
```

### Number

Checks if the input is a valid number as evaluated by `isNaN()`.

:::tip
When applicable, prefer to use the number input: `<field.Input @type="number" />`.
:::

**Example**

```hbs
<field.Input @name="amount" @validation="number" />
```

### Required

Checks if the input is empty.

**Example**

```hbs
<field.Input @name="username" @validation="required" />
```

### URL

Checks if the input value appears to be a properly formatted URL including the protocol. This does not check if the URL actually resolves.

**Example**

```hbs
<field.Input @name="endpoint" @validation="url" />
```

## Combining Rules

Rules can be combined using the pipe operator: `|`.

**Example**

```hbs
<field.Input @name="username" @validation="required|length:5,16" />
```

## Custom Validation

### Field

[Field](./field) accepts a `@validate` property which allows you to define a callback function to validate the field. [Read more about addError](./helpers#add-error).

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
    addError(name, { title: I18n.t(`foo.bar.${name}`), message: "That's not how maths work." });
  }
}
```

```hbs
<form.Field @name="username" @validate={{this.validateUsername}} />
```

### Form

[Form](./form) accepts a `@validate` property which allows you to define a callback function to validate the form. This will be called for each field of the form.

**Parameters**

- `data` (Object): The data object containing additional information for validation.
- `handlers` (Object): An object containing handler functions.
  - `handlers.addError` (Function): A function to add an error if validation fails.

**Example**

```javascript
validateForm(data, { addError }) {
  if (data.bar / 2 === data.baz) {
    addError(name, { title: I18n.t(`foo.bar.${name}`), message: "That's not how maths work." });
  }
}
```

```hbs
<Form @validate={{this.validateForm}} />
```
