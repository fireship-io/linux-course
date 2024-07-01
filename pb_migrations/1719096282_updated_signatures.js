/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n0a6jkpglazeft")

  collection.indexes = []

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n0a6jkpglazeft")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_kcoXgFo` ON `signatures` (`user`)"
  ]

  return dao.saveCollection(collection)
})
