# Collection

The collection component allows to handle array of objects in your form.

**Example**

```hbs
<Form @data={{hash foo=(array (hash bar=1) (hash bar=2))}} as |form|>
  <form.Collection @name="foo" as |collection index|>
    <collection.Field @name="bar" @title="Bar" as |field|>
      <field.Input placeholder={{concat "item-" index}} />
    </collection.Field>
  </form.Collection>
</Form>
```

## Add an item to the collection

The `<Form />` component yielded object has a `addItemToCollection` function that you can call to add an item to a specific collection.

**Example**

```hbs
<Form @data={{hash foo=(array (hash bar=1) (hash bar=2))}} as |form|>
  <form.Button @action={{fn form.addItemToCollection "foo" (hash bar=3)}}>
    Add
  </form.Button>

  <form.Collection @name="foo" as |collection index|>
    <collection.Field @name="bar" @title="Bar" as |field|>
      <field.Input placeholder={{concat "item-" index}} />
    </collection.Field>
  </form.Collection>
</Form>
```

## Remove an item from the collection

The `<Collection />` component yielded object has a `remove` function that you can call to remove an item from this collection, it takes the index as parameter

**Example**

```hbs
<Form @data={{hash foo=(array (hash bar=1) (hash bar=2))}} as |form|>
  <form.Collection @name="foo" as |collection index|>
    <collection.Field @name="bar" @title="Bar" as |field|>
      <field.Input />
      <form.Button @action={{fn collection.remove index}}>
        Remove
      </form.Button>
    </collection.Field>
  </form.Collection>
</Form>
```
