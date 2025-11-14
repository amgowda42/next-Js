import mongoose, { Schema, Document, models } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  role: ("user" | "admin")[];
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    role: [
      {
        type: String,
        enum: ["user", "admin"],
        required: true,
        default: "user",
      },
    ],
  },
  { timestamps: true }
);

const User = models.User || mongoose.model<IUser>("User", userSchema);

export default User;
