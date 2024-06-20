# Assertions

## assert.form()

The form element assertions are available at `assert.form(...).*`:

**Parameters**

- {string|HTMLElement} target - The form element or selector.

### hasErrors()

**Parameters**

- {string} message - The description of the test.

**Examples**

```javascript
assert.form(".my-form").hasErrors("the form shows errors");
```

## assert.form().field()

The field element assertions are available at `assert.form(...).field(...).*`:

**Parameters**

- {string} name - The name of the field.

**Examples**

```javascript
assert.form(".my-form").field("foo");
```

### hasValue()

Assert that the `value` of the field matches the `expected` text.

If no `expected` value is provided, the assertion will fail if the
`value` is an empty string.

**Parameters**

- {anything} expected - The expected value.
- {string} [message] - The description of the test.

**Examples**

```javascript
assert.form(".my-form").field("foo").hasValue("bar", "user has set the value");
```

### isDisabled()

Assert that the `field` is disabled.

**Parameters**

- {string} [message] - The description of the test.

**Examples**

```javascript
assert.form(".my-form").field("foo").isDisabled("the field is disabled");
```
