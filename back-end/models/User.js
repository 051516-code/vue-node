import { model, Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
});

export const user = model("user", userSchema);
