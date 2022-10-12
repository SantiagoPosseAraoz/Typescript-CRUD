"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controllers_1 = require("../controllers/index.controllers");
const router = (0, express_1.Router)();
router.get("/", index_controllers_1.getUsers);
// router.post("/", getUsers)
// router.get("/:id", getUsers)
// router.put("/:id", getUsers)
// router.delete("/:id", getUsers)
exports.default = router;
