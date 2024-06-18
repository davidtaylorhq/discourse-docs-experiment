# Validation

## Inline validation

[Field](./field) accept a `@validation` property which allows to describe the validation rules of the field.

### Examples

A required field, with a length between 3 and 15 characters:

```hbs
<form.Field @name="username" @validation="required|length:3,15">
```

## Custom field validation

[Field](./field) accept a `@validate` property which allows to define a callback function to validate the field.

#### Examples

```javascript
validateUsername(name, value, data, { addError }) {
  name // name of the field
  value // value of the field
  data // current data of the form
  addError // the function to call when you want to declare an error

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

#### Examples

```javascript
validateForm(name, value, data, { addError }) {
  name // name of the field
  value // value of the field
  data // current data of the form
  addError // the function to call when you want to declare an error

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
