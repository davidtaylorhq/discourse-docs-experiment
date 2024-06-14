# Javascript tests

## assert.form()

The form element assertions are available at `assert.form(...).*`:

**Parameters**

|          | type                   | required |
| -------- | ---------------------- | -------- |
| `target` | `string` `HTMLElement` | `true`   |

**Examples**

```javascript
test("the form has errors", function (assert) {
  assert.form(".my-form").hasErrors();
});
```

## assert.form().field()

The field element assertions are available at `assert.form(...).field(...).*`:

**Parameters**

|          | type                   | required |
| -------- | ---------------------- | -------- |
| `target` | `string` `HTMLElement` | `true`   |

**Examples**

```javascript
test("the form has no value", function (assert) {
  assert.form(".my-form").field("foo").hasNoValue();
});
```

### hasValue

Assert that the `value` of the field matches the `expected` text.

If no `expected` value is provided, the assertion will fail if the
`value` is an empty string.

#### Parameters

|            | type               | required |
| ---------- | ------------------ | -------- |
| `expected` | `string` `integer` | `false`  |
| `message`  | `string`           | `false`  |

#### Examples

```javascript
assert.form(".my-form").field("foo").hasValue("bar", "user has set the value");
```
