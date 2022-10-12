import { Router } from "express";
import { getUsers } from "../controllers/index.controllers";

const router = Router()

router.get("/", getUsers)
// router.post("/", getUsers)
// router.get("/:id", getUsers)
// router.put("/:id", getUsers)
// router.delete("/:id", getUsers)


export default router