# Assertions

## assert.form()

The form element assertions are available at `assert.form(...).*`.

**Parameters**

- `target` (string | HTMLElement): The form element or selector.

### hasErrors()

Asserts that the form has errors.

**Parameters**

- `message` (string): The description of the test.

**Example**

```javascript
assert.form(".my-form").hasErrors("the form shows errors");
```

## assert.form().field()

The field element assertions are available at `assert.form(...).field(...).*`.

**Parameters**

- `name` (string): The name of the field.

**Example**

```javascript
assert.form(".my-form").field("foo");
```

### hasValue()

Asserts that the `value` of the field matches the `expected` text. If no `expected` value is provided, the assertion will fail if the `value` is an empty string.

**Parameters**

- `expected` (anything): The expected value.
- `message` (string) [optional]: The description of the test.

**Example**

```javascript
assert.form(".my-form").field("foo").hasValue("bar", "user has set the value");
```

### isDisabled()

Asserts that the `field` is disabled.

**Parameters**

- `message` (string) [optional]: The description of the test.

**Example**

```javascript
assert.form(".my-form").field("foo").isDisabled("the field is disabled");
```
