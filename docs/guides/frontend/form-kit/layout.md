# Layout

By default, Form Kit aims to provide good defaults, allowing you to mainly use fields and controls. However, if you need more control, we provide several helpers: `Row`, `Col`, `Section`, `Container`, `Actions`, and `@format`.

## Row and Col

`Row` and `Col` enable you to utilize a simple grid system (12 columns) within your form.

**Example**

```hbs
<Form as |form|>
  <form.Row as |row|>
    <row.Col @size={{4}}>
      <form.Field @name="foo" @title="Foo" as |field|>
        <field.Input />
      </form.Field>
    </row.Col>
    <row.Col @size={{8}}>
      <form.Field @name="bar" @title="Bar" as |field|>
        <field.Input />
      </form.Field>
    </row.Col>
  </form.Row>
</Form>
```

## Format

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

## Section

`Section` provides a simple way to create a section with or without a title.

**Example**

```hbs
<Form as |form|>
  <form.Section @title="Settings">
    <!-- Section content here -->
  </form.Section>
</Form>
```

## Container

`Container` allows you to render a block similar to a [field](./field) without tying it to specific data. It is useful for [custom controls](./customize#custom-control).

**Example**

```hbs
<Form as |form|>
  <form.Container @title="Important" @subtitle="This is important">
    <!-- Container content here -->
  </form.Container>
</Form>
```

## Actions

`Actions` is a custom `Container` designed to wrap your buttons in the footer of your form.

**Example**

```hbs
<Form as |form|>
  <form.Actions>
    <form.Submit />
  </form.Actions>
</Form>
```
