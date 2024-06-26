# Image

Renders an `<UppyImageUploader />` component.

## Upload Handling

By default, the component will set an upload object. It's common to only want the URL and the ID of the upload. To achieve this, you can use the `@onSet` property on the field:

```js
@action
handleUpload(upload, { set }) {
  set("upload_id", upload.id);
  set("upload_url", getURL(upload.url));
}
```

```hbs
<Form as |form|>
  <form.Field
    @name="upload"
    @title="Upload"
    @onSet={{this.handleUpload}}
    as |field|
  >
    <field.Image />
  </form.Field>
</Form>
```

**Example**

```hbs
<Form as |form|>
  <form.Field @name="upload" @title="Upload" as |field|>
    <field.Image />
  </form.Field>
</Form>
```
