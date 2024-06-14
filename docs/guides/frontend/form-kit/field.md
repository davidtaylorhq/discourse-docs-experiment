# Field

| property             | type       | default | required | description                                              |
| -------------------- | ---------- | ------- | -------- | -------------------------------------------------------- |
| `@name`              | `string`   | `null`  | `true`   | name of the field, must be unique to the form            |
| `@onSet`             | `function` | `null`  | `false`  | custom handler when input value is changing              |
| `@disabled`          | `boolean`  | `false` | `false`  | disables the underlying control                          |
| `@validation`        | `string`   | `null`  | `false`  | defines inline validation rules, eg: "required"          |
| `@validationEnabled` | `boolean`  | `true`  | `false`  | allows to prevent validation on a field, this is tracked |
| `@validate`          | `function` | `null`  | `false`  | custom handler when validating a field                   |
