# Basic usage

FormKit exposes only a single component as its public API, `<Form>`. All its other ingredients are yielded, as contextual components, modifiers or plain data.

Every form is composed of one or multiple `<form.Field>`, representing the value, validation and metadata of a control. Each field encapsulates a control which represents the form element that the user will interact with to enter the data, like a `<field.Input/>` or `<field.Select />`. Other utilities, like `<form.Submit />` or `<form.Alert />` are also provided.

These pieces make up the most basic example of a form:

```hbs
import Form from "discourse/form"

<template>
  <Form as |form|>
    <form.Field @name="username" as |field|>
      <field.Input />
    </form.Field>

    <form.Field @name="age" as |field|>
      <field.Input @type="number" />
    </form.Field>

    <form.Submit />
  </Form>
</template>
```
