# Helper

The form kit helper allows to manipulate a form and its fields through a clear and expressive API.

**Example**

```javascript
import formKit from "discourse/tests/helpers/form-kit";

test("fill in input", async function (assert) {
  await render(<template>
    <Form class="my-form" as |form data|>
      <form.Field @name="foo" as |field|>
        <field.Input />
      </form.Field>
    </Form>
  </template>);

  const myForm = formKit(".my-form");
});
```

## Field helper

**Parameters**

- {string} name - The name of the field.

### fillIn()

Can be used on [`<field.Input @type="text" />`](/docs/guides/frontend/form-kit/controls/input), [`<field.Code />`](/docs/guides/frontend/form-kit/controls/code), [`<field.Text />`](/docs/guides/frontend/form-kit/controls/text) and [`<field.Composer />`](/docs/guides/frontend/form-kit/controls/composer).

**Parameters**

- {string|integer|undefined} [value] - The value to set on the input.

**Examples**

```javascript
await field.fillIn("bar");
```
