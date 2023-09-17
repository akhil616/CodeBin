const express = require("express");
const router = express.Router();
const {
  getPastes,
  getPaste,
  createPaste,
  deletePaste,
  updatePaste,
} = require("../controllers/pasteController");

// GET all public pastes
router.get("/", getPastes);

// GET single paste
router.get("/:id", getPaste);

// POST a new paste
router.post("/", createPaste);

// DELETE a paste
router.delete("/:id", deletePaste);

// UPDATE a paste
router.patch("/:id", updatePaste);

module.exports = router;
