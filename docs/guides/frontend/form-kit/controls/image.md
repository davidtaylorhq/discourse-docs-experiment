# Image

Renders an `<UppyImageUploader>` component.

| property       | type     | default | required | description                              |
| -------------- | -------- | ------- | -------- | ---------------------------------------- |
| `@title`       | `string` | `null`  | `false`  | displays a title above the control       |
| `@subtitle`    | `string` | `null`  | `false`  | displays a subtitle above the control    |
| `@description` | `string` | `null`  | `false`  | displays a description under the control |

## Upload handling

By default the component will set an upload object. It's common to only want the URL and the ID of the upload.

To achieve this you can use the `@onSet` property on the field:

```js
@action
handleUpload(upload, { set }) {
  set("upload_id", upload.id);
  set("upload_url", getURL(upload.url)) ;
}
```

```hbs
<Form as |form|>
  <form.Field @name="upload" @onSet={{this.handleUpload}} as |field|>
    <field.Image />
  </form.Field>
</Form>
```

## Example

```hbs
<Form as |form|>
  <form.Field @name="upload" as |field|>
    <field.Image />
  </form.Field>
</Form>
```
