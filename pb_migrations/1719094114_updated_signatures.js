/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n0a6jkpglazeft")

  collection.createRule = "@request.auth.id != user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n0a6jkpglazeft")

  collection.createRule = "@request.auth.id != user && message <= 500"

  return dao.saveCollection(collection)
})
