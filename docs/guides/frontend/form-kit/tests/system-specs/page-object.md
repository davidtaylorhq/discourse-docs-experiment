# Page Object

The FormKit page object component is available to help you write system specs for your forms.

**Parameters**

- `target` (string | Capybara::Node::Element): The selector or node of the form.

**Example**

```ruby
form = PageObjects::Components::FormKit.new(".my-form")
```

```ruby
form = PageObjects::Components::FormKit.new(find(".my-form"))
```

### submit

Submits the form

**Example**

```ruby
form.submit
```

### has_an_alert?

Returns if the field is enabled or not.

**Example**

```ruby
form.has_an_alert?("message")
```

```ruby
expect(form).to have_an_alert("message")
```

## field(name)

The `field` helper allows you to interact with a specific field of a form.

**Parameters**

- `name` (string): The name of the field.

**Example**

```ruby
field = form.field("foo")
```

### value

Returns the value of the field.

**Example**

```ruby
field.value
```

```ruby
expect(field).to have_value("bar")
```

### checked?

Returns if the control of a checkbox is checked or not.

**Example**

```ruby
field.checked?
```

```ruby
expect(field).to be_checked
```

### unchecked?

Returns if the control of a checkbox is unchecked or not.

**Example**

```ruby
field.unchecked?
```

```ruby
expect(field).to be_unchecked
```

### disabled?

Returns if the field is disabled or not.

**Example**

```ruby
field.disabled?
```

```ruby
expect(field).to be_disabled
```

### enabled?

Returns if the field is enabled or not.

**Example**

```ruby
field.enabled?
```

```ruby
expect(field).to be_enabled
```

### toggle

Allows toggling a field. Only available for: [checkbox](/docs/guides/frontend/form-kit/controls/checkbox).

**Example**

```ruby
field.toggle
```

### fill_in

Allows filling a field with a given value. Only available for: [input](/docs/guides/frontend/form-kit/controls/input), [text](/docs/guides/frontend/form-kit/controls/text), [code](/docs/guides/frontend/form-kit/controls/code), and [composer](/docs/guides/frontend/form-kit/controls/composer).

**Example**

```ruby
field.fill_in("bar")
```

### select

Allows selecting a specified value in a field. Only available for: [select](/docs/guides/frontend/form-kit/controls/select), [icon](/docs/guides/frontend/form-kit/controls/icon), [menu](/docs/guides/frontend/form-kit/controls/menu), [radio-group](/docs/guides/frontend/form-kit/controls/radio-group), and [question](/docs/guides/frontend/form-kit/controls/question).

**Example**

```ruby
field.select("bar")
```

### accept

Allows accepting a field. Only available for: [question](/docs/guides/frontend/form-kit/controls/question).

**Example**

```ruby
field.accept
```

### refuse

Allows refusing a field. Only available for: [question](/docs/guides/frontend/form-kit/controls/question).

**Example**

```ruby
field.refuse
```
