# Basic Usage

FormKit exposes a single component as its public API: [Form](./form). All other elements are yielded as contextual components, modifiers, or plain data.

Every form is composed of one or multiple [fields](./field), representing the value, validation, and metadata of a control. Each field encapsulates a control, which is the form element the user interacts with to enter data, such as an [input](./controls/input) or [select](./controls/select). Other utilities, like [submit](./submit) or [alert](./alert), are also provided.

Here is the most basic example of a form:

```hbs
import Form from "discourse/form";

<template>
  <Form as |form|>
    <form.Field
      @name="username"
      @title="Username"
      @validation="required"
      as |field|
    >
      <field.Input />
    </form.Field>

    <form.Field @name="age" @title="Age" as |field|>
      <field.Input @type="number" />
    </form.Field>

    <form.Submit />
  </Form>
</template>
```

This example demonstrates a basic form with two fields: one for the username and one for the age, along with a submit button. The `@name` attribute is used to uniquely identify each field, `@title` provides a label for the field, and `@validation` specifies any validation rules (e.g., required). The `Input` component is used to render the input elements, and `Submit` provides a button to submit the form.
