# Basic usage

FormKit exposes only a single component as its public API, [Form](./form). All its other ingredients are yielded, as contextual components, modifiers or plain data.

Every form is composed of one or multiple [field](./field), representing the value, validation and metadata of a control. Each field encapsulates a control which represents the form element that the user will interact with to enter the data, like an [input](./controls/input) or [select](./controls/select). Other utilities, like [submit](./submit) or [alert](./alert) are also provided.

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
