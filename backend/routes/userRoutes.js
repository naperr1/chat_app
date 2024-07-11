import express from "express";
import {
  allUsers,
  authUser,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/").get(protect, allUsers);

export default router;
