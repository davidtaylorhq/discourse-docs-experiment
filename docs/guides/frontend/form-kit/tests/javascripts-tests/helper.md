# Helper

The FormKit helper allows you to manipulate a form and its fields through a clear and expressive API.

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

## Field Helper

**Parameters**

- `name` (string): The name of the field.

### fillIn()

Can be used on [`<field.Input @type="text" />`](/docs/guides/frontend/form-kit/controls/input), [`<field.Code />`](/docs/guides/frontend/form-kit/controls/code), [`<field.Textarea />`](/docs/guides/frontend/form-kit/controls/textarea), and [`<field.Composer />`](/docs/guides/frontend/form-kit/controls/composer).

**Parameters**

- `value` (string | integer | undefined): The value to set on the input.

**Example**

```javascript
await field.fillIn("bar");
```
