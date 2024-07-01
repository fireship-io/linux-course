/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4n0a6jkpglazeft",
    "created": "2024-06-22 21:59:27.654Z",
    "updated": "2024-06-22 21:59:27.654Z",
    "name": "signatures",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cet8bd6p",
        "name": "user",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "p089ro9d",
        "name": "message",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4n0a6jkpglazeft");

  return dao.deleteCollection(collection);
})
