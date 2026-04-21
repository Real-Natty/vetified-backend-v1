const express = require("express");
const router = express.Router();

const {
  findMusic,
  createMusic,
  editField,
  deleteField,
  editNestedField,
  deleteNestedField,
  editNestedArray,
  deleteNestedArray,
  listMusic,
} = require("../controller/music");

router.get("/find-music", findMusic);

router.post("/create-music", createMusic);

router.put("/edit-Field/:id", editField);

router.delete("/delete-Field/:id", deleteField);

router.put("/edit-nested-Field/:id", editNestedField);

router.delete("/delete-nested-Field/:id", deleteNestedField);

router.put("/edit-nested-array/:arrayId", editNestedArray);

router.delete("/delete-nested-array/:arrayId", deleteNestedArray);

router.get("/list-music", listMusic);

module.exports = router;
