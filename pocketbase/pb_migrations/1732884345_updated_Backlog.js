/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1590219891")

  // update collection data
  unmarshal({
    "name": "backlog"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1590219891")

  // update collection data
  unmarshal({
    "name": "Backlog"
  }, collection)

  return app.save(collection)
})
