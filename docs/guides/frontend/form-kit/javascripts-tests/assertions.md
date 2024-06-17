# Assertions

## assert.form()

The form element assertions are available at `assert.form(...).*`:

**Parameters**

|          | type                   | required |
| -------- | ---------------------- | -------- |
| `target` | `string` `HTMLElement` | `true`   |

### hasErrors()

**Parameters**

|           | type     | required |
| --------- | -------- | -------- |
| `message` | `string` | `false`  |

**Examples**

```javascript
assert.form(".my-form").hasErrors("the form shows errors");
```

## assert.form().field()

The field element assertions are available at `assert.form(...).field(...).*`:

**Parameters**

|          | type                   | required |
| -------- | ---------------------- | -------- |
| `target` | `string` `HTMLElement` | `true`   |

### hasValue()

Assert that the `value` of the field matches the `expected` text.

If no `expected` value is provided, the assertion will fail if the
`value` is an empty string.

**Parameters**

|            | type               | required |
| ---------- | ------------------ | -------- |
| `expected` | `string` `integer` | `false`  |
| `message`  | `string`           | `false`  |

**Examples**

```javascript
assert.form(".my-form").field("foo").hasValue("bar", "user has set the value");
```

### isDisabled()

Assert that the `field` is disabled.

**Parameters**

|           | type     | required |
| --------- | -------- | -------- |
| `message` | `string` | `false`  |

**Examples**

```javascript
assert.form(".my-form").field("foo").isDisabled("the field is disabled");
```
