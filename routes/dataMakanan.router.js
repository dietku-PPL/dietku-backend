const express = require("express");
const router = express.Router();

const {
  getAllMakanan,
  getMakananById,
  addMakanan,
  deleteMakanan,
  updateMakanan,
} = require("../controllers/dataMakanan.controller");

router.get("/", getAllMakanan);
router.get("/:id", getMakananById);
router.post("/", addMakanan);
router.delete("/:id", deleteMakanan);
router.put("/:id", updateMakanan);

module.exports = router;
