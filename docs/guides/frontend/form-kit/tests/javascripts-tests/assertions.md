# Assertions

## Form

The form element assertions are available at `assert.form(...).*`. By default it will select the first "form" element.

**Parameters**

- `target` (string | HTMLElement): The form element or selector.

### hasErrors()

Asserts that the form has errors.

**Parameters**

- `message` (string): The description of the test.

**Example**

```javascript
assert.form().hasErrors("the form shows errors");
```

## Field

The field element assertions are available at `assert.form(...).field(...).*`.

**Parameters**

- `name` (string): The name of the field.

**Example**

```javascript
assert.form().field("foo");
```

### hasValue()

Asserts that the `value` of the field matches the `expected` text.

**Parameters**

- `expected` (anything): The expected value.
- `message` (string) [optional]: The description of the test.

**Example**

```javascript
assert.form().field("foo").hasValue("bar", "user has set the value");
```

### isDisabled()

Asserts that the `field` is disabled.

**Parameters**

- `message` (string) [optional]: The description of the test.

**Example**

```javascript
assert.form().field("foo").isDisabled("the field is disabled");
```

### isEnabled()

Asserts that the `field` is enabled.

**Parameters**

- `message` (string) [optional]: The description of the test.

**Example**

```javascript
assert.form().field("foo").isEnabled("the field is enabled");
```

### hasError()

Asserts that the `field` has a specific error.

**Parameters**

- `error` (string): The error messag on the field.
- `message` (string) [optional]: The description of the test.

**Example**

```javascript
assert.form().field("foo").hasError("Required", "it is required");
```

### hasNoError()

Asserts that the `field` has no error.

**Parameters**

- `message` (string) [optional]: The description of the test.

**Example**

```javascript
assert.form().field("foo").hasNoError("it is valid");
```

### exists()

Asserts that the `field` is present.

**Parameters**

- `message` (string) [optional]: The description of the test.

**Example**

```javascript
assert.form().field("foo").exists("it has the food field");
```

### doesNotExist()

Asserts that the `field` is not present.

**Parameters**

- `message` (string) [optional]: The description of the test.

**Example**

```javascript
assert.form().field("foo").doesNotExist("it has no food field");
```

### hasCharCounter()

Asserts that the `field` has a char counter.

**Parameters**

- `current` (integer): The current length of the field.
- `max` (integer): The max length of the field.
- `message` (string) [optional]: The description of the test.

**Example**

```javascript
assert.form().field("foo").hasCharCounter(2, 5, "it has updated the counter");
```
