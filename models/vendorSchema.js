import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  vendorname: {
    type: String,
    required: true,
  },
  bankaccno: {
    type: String,
    required: true,
  },
  bankname: {
    type: String,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Vendor", vendorSchema);
