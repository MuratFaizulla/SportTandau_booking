
import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  fieldId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Field',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
});

export default mongoose.model("Reservation", ReservationSchema);