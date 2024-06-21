# Controls

Controls, as we use the term here, refer to the UI widgets that allow a user to enter data. In its most basic form, this would be an [input](./input).

:::tip
You can pass down HTML attributes to the underlying control.
:::

**Example**

```hbs
<Form as |form|>
  <form.Field
    @name="query"
    @title="Query"
    @subtitle="The query to list users"
    @description="You should make sure the query doesn’t include bots."
    as |field|
  >
    <field.Input placeholder="Foo" />
  </form.Field>
</Form>
```

## @format

Controls accept a `@format` property which can be: `small`, `medium`, `large`, or `full`.

Form Kit sets defaults for each control, but you can override them using `@format`:

- small: `100px`
- medium: `220px`
- large: `400px`
- full: `100%`

**Example**

```hbs
<form.Field @name="bar" @title="Bar" @format="small" as |field|>
  <field.Input />
</form.Field>
```

Additionally, the following CSS variables are provided to customize these defaults:

- small: `--form-kit-small-input`
- medium: `--form-kit-medium-input`
- large: `--form-kit-large-input`
