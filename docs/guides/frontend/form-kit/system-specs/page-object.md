# Page Object

The FormKit page object component is available to help you write system specs for your forms.

**Parameters**

- {string|Capybara::Node::Element} target - The selector or node of the form.

**Examples**

```ruby
form = PageObjects::Components::FormKit.new(".my-form")
```

```ruby
form = PageObjects::Components::FormKit.new(find(".my-form"))
```

## field(name)

The field helper allows you to interact with a specific field of a form.

**Parameters**

- {string} name - The name of the field.

**Examples**

```ruby
field = form.field("foo")
```

### value

Returns the value of the field.

**Examples**

```ruby
field.value
```

### disabled?

Returns if the value is disabled or not.

**Examples**

```ruby
field.disabled?
```

```ruby
expect(field).to be_disabled
```

### enabled?

Returns if the value is enabled or not.

**Examples**

```ruby
field.enabled?
```

```ruby
expect(field).to be_enabled
```

### toggle

Allows to toggle a field. Only available for: [checkbox](/docs/guides/frontend/form-kit/controls/checkbox).

**Examples**

```ruby
field.toggle
```

### fill_in

Allows to fill a field with a given value. Only available for: [input](/docs/guides/frontend/form-kit/controls/input), [text](/docs/guides/frontend/form-kit/controls/text), [code](/docs/guides/frontend/form-kit/controls/code) and [composer](/docs/guides/frontend/form-kit/controls/composer).

**Examples**

```ruby
field.fill_in("bar")
```

### select

Allows to select a specified value in a field. Only available for: [select](/docs/guides/frontend/form-kit/controls/select), [icon](/docs/guides/frontend/form-kit/controls/icon), [menu](/docs/guides/frontend/form-kit/controls/menu), [radio-group](/docs/guides/frontend/form-kit/controls/radio-group) and [question](/docs/guides/frontend/form-kit/controls/question).

**Examples**

```ruby
field.select("bar")
```

### accept

Allows to accept a field. Only available for: [question](/docs/guides/frontend/form-kit/controls/question).

**Examples**

```ruby
field.accept
```

### refuse

Allows to refuse a field. Only available for: [question](/docs/guides/frontend/form-kit/controls/question).

**Examples**

```ruby
field.refuse
```
