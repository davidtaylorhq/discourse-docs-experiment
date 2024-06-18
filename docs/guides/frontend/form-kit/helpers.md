# Helpers

Helpers are yielded by some blocks, like [Form](./form) or be given as parameters to callback. They allow you to interact with the form state in a simple and clear way.

## set

`set` allows to set any key/value on the form’s data.

### Arguments

- `key` (string): The name of the field to set, can also be an arbitrary key.
- `value` (anything): The value to be set.

### Examples

```javascript
set("foo", 1);
```
