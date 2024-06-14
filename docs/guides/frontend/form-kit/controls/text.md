# Input

Renders an `<input>` element.

| property | type     | default | required | description               |
| -------- | -------- | ------- | -------- | ------------------------- |
| `@type`  | `string` | `text`  | `false`  | type of the input element |

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

- `file` is supported only for images through [`<field.Image />`](./image)

## Example

```hbs preview-template
<Form as |form|>
  <form.Field @name="email" as |field|>
    <field.Input />
  </form.Field>

  <form.Field @name="age" @type="number" as |field|>
    <field.Input />
  </form.Field>
</Form>
```
