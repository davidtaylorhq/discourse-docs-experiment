# Helpers

Helpers are yielded by some blocks, like [Form](./form) or be given as parameters to callback. They allow you to interact with the form state in a simple and clear way.

## set

`set` allows to set any name/value on the form’s data.

**Parameters**

- {string} name - The name of the field for which the value is to be set.
- {number} value - The value to be set.

**Examples**

```javascript
set("foo", 1);
```

## addError

**Parameters**

- {string} name - The name of the invalid field.
- {string} message - The error message.

**Examples**

```javascript
addError("foo", "This should be another thing.");
```
