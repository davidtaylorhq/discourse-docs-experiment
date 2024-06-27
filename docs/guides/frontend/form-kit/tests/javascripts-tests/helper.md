# Helper

## Form

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

### submit()

Submits the associated form.

**Example**

```javascript
formKit().submit();
```

### reset()

Resets the associated form.

**Example**

```javascript
formKit().reset();
```

## Field

**Parameters**

- `name` (string): The name of the field.

### fillIn()

Can be used on [`<field.Input @type="text" />`](/docs/guides/frontend/form-kit/controls/input), [`<field.Code />`](/docs/guides/frontend/form-kit/controls/code), [`<field.Textarea />`](/docs/guides/frontend/form-kit/controls/textarea), and [`<field.Composer />`](/docs/guides/frontend/form-kit/controls/composer).

**Parameters**

- `value` (string | integer | undefined): The value to set on the input.

**Example**

```javascript
await formKit().field("foo").fillIn("bar");
```

### toggle()

Can be used on [`<field.Checkbox />`](/docs/guides/frontend/form-kit/controls/checkbox) or [`<field.Toggle />`](/docs/guides/frontend/form-kit/controls/toggle).

Will toggle the state of the control.

**Example**

```javascript
await formKit().field("foo").toggle();
```

### accept()

Can be used on [`<field.Checkbox />`](/docs/guides/frontend/form-kit/controls/question).

**Example**

```javascript
await formKit().field("foo").accept();
```

### refuse()

Can be used on [`<field.Checkbox />`](/docs/guides/frontend/form-kit/controls/question).

**Example**

```javascript
await formKit().field("foo").refuse();
```

### select()

Can be used on [`<field.Select />`](/docs/guides/frontend/form-kit/controls/select), [`<field.Menu />`](/docs/guides/frontend/form-kit/controls/menu), [`<field.Icon />`](/docs/guides/frontend/form-kit/controls/icon), and [`<field.RadioGroup />`](/docs/guides/frontend/form-kit/controls/radio-group).

Will select the given value.

**Parameters**

- `value` (string | integer | undefined): The value to select.

**Example**

```javascript
await formKit().field("foo").select("bar");
```
