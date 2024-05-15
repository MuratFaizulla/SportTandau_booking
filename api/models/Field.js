import mongoose from "mongoose";
const FieldSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
 
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  size: {
    type: String,
    required: true,
  },

  coating: {
    type: String,
    required: true,
  },
  premise: {
    type: String,
    required: true,
  },
  inventory: {
    type: String,
    required: false,
  },
  playgrounds: {
    type: [String],
  },
  price: {
    type: Number,
    required: true,
  },
  shower: {
    type: Boolean,
    default: false,
  },
  parking: {
    type: Boolean,
    default: false,
  },
  shop: {
    type: Boolean,
    default: false,
  },
  lockerRoom: {
    type: Boolean,
    default: false,
  },
  stands: {
    type: Boolean,
    default: false,
  },
  lighting: {
    type: Boolean,
    default: false,
  },
  security: {
    type: Boolean,
    default: false,
  },
 
});

export default mongoose.model("Field", FieldSchema)