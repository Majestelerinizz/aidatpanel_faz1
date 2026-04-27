import express from "express";
import {
  getApartments,
  createApartment,
  deleteApartment,
} from "../controllers/apartmentController.js";

import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router({ mergeParams: true });

router.use(authMiddleware);

router.get("/", getApartments);
router.post("/", createApartment);
router.delete("/:id", deleteApartment);

export default router;