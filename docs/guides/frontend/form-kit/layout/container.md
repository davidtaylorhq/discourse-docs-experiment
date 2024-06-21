# Container

`Container` allows you to render a block similar to a [field](./field) without tying it to specific data. It is useful for [custom controls](./customize#custom-control).

**Example**

```hbs
<Form as |form|>
  <form.Container @title="Important" @subtitle="This is important">
    <!-- Container content here -->
  </form.Container>
</Form>
```
