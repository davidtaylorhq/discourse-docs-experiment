# Helpers

Helpers are yielded by some blocks, like [Form](./form) or be given as parameters to callback. They allow you to interact with the form state in a simple and clear way.

## set

`set` allows to set any key/value on the form’s data.

### Arguments

- {string} key - The key for which the value is to be set.
- {number} value - The value to be set for the given key.

### Examples

```javascript
set("foo", 1);
```

## addError

### Arguments

- {Object} error - The error object containing details about the error.
- {string} error.type - The type of the error.
- {number} error.value - The error value.
- {string} error.message - The error message.

### Examples

```javascript
addError({
  type: "wrong_thing",
  value: 1,
  message: "This should be another thing.",
});
```
