import { validationResult } from "express-validator";

// Register de usuarios
export const register = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // console.log("es diferente de error ");
    return res.status(400).json({ errors: errors.array() });
  }

  // console.log(req.body);
  res.json({ ok: "no hay error" });
};

// login
export const login = (req, res) => {
  res.json({ ok: "login" });
};
