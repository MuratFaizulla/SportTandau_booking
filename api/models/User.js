import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    manager: {
      type: {
        value: Boolean,
        fieldId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Field' // Указываем на модель поля, к которой принадлежит этот ObjectId
        },
      },
      default: { value: false, fieldId: null },
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
