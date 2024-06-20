# Alert

Displays an alert in the form.

## @icon

An optional icon to use in the alert.

**Example**

```hbs
<form.Alert @icon="info-circle">
  Foo
</form.Alert>
```

## @type

Specifies the type of alert. Allowed types: `success`, `error`, `warning`, or `info`.

**Example**

```hbs
<form.Alert @type="warning">
  Foo
</form.Alert>
```
