/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n0a6jkpglazeft")

  collection.listRule = ""
  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n0a6jkpglazeft")

  collection.listRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
