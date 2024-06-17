# Input

Renders an `<input>` element.

| property | type                  | default | required | description               |
| -------- | --------------------- | ------- | -------- | ------------------------- |
| `@type`  | ` string``undefined ` | `text`  | `false`  | type of the input element |

## Allowed types

- `color`
- `date`
- `datetime-local`
- `email`
- `hidden`
- `month`
- `number`
- `password`
- `range`
- `search`
- `tel`
- `text`
- `time`
- `url`
- `week`

## Special cases

- `file` is supported only for images through [checkbox](./image)
- [checkbox](./checkbox)

## Examples

```hbs
<Form as |form|>
  <form.Field @name="email" as |field|>
    <field.Input />
  </form.Field>

  <form.Field @name="age" @type="number" as |field|>
    <field.Input />
  </form.Field>
</Form>
```
