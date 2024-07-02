import mongoose from "mongoose";

export const locationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

locationSchema.index({ coordinates: "2dsphere" });

const garbageSchema = new mongoose.Schema(
  {
    reportedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    handledBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    location: {
      type: locationSchema,
      required: true,
    },
    description: {
      type: String,
    },
    garbageImg: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Collected"],
      default: "Pending",
    },
    comments: [
      {
        commentedBy: { type: mongoose.Types.ObjectId, ref: "User" },
        comment: { type: String },
        commentedAt: { type: Date },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Garbage", garbageSchema);
