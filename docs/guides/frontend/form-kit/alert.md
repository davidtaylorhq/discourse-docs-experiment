# Alert

Displays an alert in the form.

| property | type     | default | required | description                                                                |
| -------- | -------- | ------- | -------- | -------------------------------------------------------------------------- |
| `@icon`  | `string` | `null`  | `false`  | an icon to use in the alert                                                |
| `@type`  | `string` | `info`  | `false`  | the style of the alert (allowed: `success`, `error`, `warning` and `info`) |

## Example

```hbs
<form.Alert @icon="info-circle" @type="warning">
  Foo
</form.Alert>
```
