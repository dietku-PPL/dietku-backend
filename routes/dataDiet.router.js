const express = require("express");
const router = express.Router();

const {
  getAllDiet,
  getDietById,
  addDiet,
  deleteDiet,
  updateDiet,
} = require("../controllers/dataDiet.controller");

router.get("/", getAllDiet);
router.get("/:id", getDietById);
router.post("/", addDiet);
router.delete("/:id", deleteDiet);
router.put("/:id", updateDiet);

module.exports = router;
