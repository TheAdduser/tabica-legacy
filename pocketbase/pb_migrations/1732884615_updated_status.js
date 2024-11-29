/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1276319826")

  // remove field
  collection.fields.removeById("relation3545221687")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number4142922722",
    "max": null,
    "min": 1,
    "name": "columnOrder",
    "onlyInt": true,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1276319826")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2602490748",
    "hidden": false,
    "id": "relation3545221687",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "taskId",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("number4142922722")

  return app.save(collection)
})
