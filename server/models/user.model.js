import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    role: {
      type: String,
      enum: ["User", "Collector", "Admin"],
      default: "User",
    },
    mobileNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    registeredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const hash = bcrypt.hashSync(this.password, 10);
  this.password = hash;
  return next();
});

export default mongoose.model("User", userSchema);
