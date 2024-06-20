# Helpers

Helpers are yielded by some blocks, like [Form](./form), or provided as parameters to callbacks. They allow you to interact with the form state in a simple and clear way.

## set

`set` allows you to assign a value to a specific field in the form's data.

**Parameters**

- `name` (string): The name of the field to which the value is to be set.
- `value` (number): The value to be set.

**Example**

```javascript
set("foo", 1);
```

## addError

`addError` allows you to add an error message to a specific field in the form.

**Parameters**

- `name` (string): The name of the field that is invalid.
- `message` (string): The error message.

**Example**

```javascript
addError("foo", "This should be another thing.");
```

This documentation provides clarity on the purpose and usage of the helpers, along with proper parameter descriptions and examples.
