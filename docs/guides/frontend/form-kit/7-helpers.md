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

Using the `set` helper yielded by the form:

```hbs
<Form as |form|>
  <DButton @action={{fn form.set "foo" 1}} @translatedLabel="Set foo" />
</Form>
```

## setProperties

`setProperties` allows you to assign an object to the form's data.

**Parameters**

- `data` (object): A POJO where each key is going to be set on the form using its value.

**Example**

```javascript
setProperties({ foo: 1, bar: 2 });
```

Using the `setProperties` helper yielded by the form:

```hbs
<Form as |form|>
  <DButton
    @action={{fn form.setProperties (hash foo=1 bar=2)}}
    @translatedLabel="Set foo and bar"
  />
</Form>
```

## addError

`addError` allows you to add an error message to a specific field in the form.

**Parameters**

- `name` (string): The name of the field that is invalid.
- `error` (object): The error’s data
  - `title` (string): The title of the error, usually the translated name of the field
  - `message` (string): The error message

**Example**

```javascript
addError("foo", { title: "Foo", message: "This should be another thing." });
```
