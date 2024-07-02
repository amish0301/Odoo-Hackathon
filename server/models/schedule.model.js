import mongoose from "mongoose";
import { locationSchema } from "./garbage.model.js";

const scheduleSchema = new mongoose.Schema(
  {
    collectorId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    garbageId: {
      type: mongoose.Types.ObjectId,
      ref: "Garbage",
      required: true,
    },
    location: {
      type: locationSchema,
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    scheduledDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Schedule", scheduleSchema);
