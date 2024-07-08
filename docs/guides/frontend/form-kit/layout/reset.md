# Reset

The `Reset` component renders a `<DButton />` which will reset the form when clicked. It accepts all the same parameters as a standard `<DButton />`. The label and default action are set by default.

**Example**

```hbs
<form.Reset />
```

To customize the `Reset` button further, you can pass additional parameters as needed:

**Example with Additional Parameters**

```hbs
<form.Reset @translatedLabel="Remove changes" />
```
