import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post(
  "/register",
  [
    body("email", "formato de email incorrecto").isEmail().normalizeEmail(),
    body("password", "no se acpta menos de 5 caracteres").isLength({ min: 5 }),
  ],
  register
);
router.get("/login", login);

export default router;
