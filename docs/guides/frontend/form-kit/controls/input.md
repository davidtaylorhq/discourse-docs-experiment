# Input

Renders an `<input>` element.

## @type

Optional property which will default to `text`. Maps to `<input>` types.

## Allowed Types

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

## Special Cases

- `file` is supported only for images through [image](./image)
- [checkbox](./checkbox)

**Examples**

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
