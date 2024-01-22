import Vendor from "../models/vendorSchema.js";

const getvendor = async (req, res) => {
  try {
    const data = await Vendor.find();
    if (data) {
      return res.status(200).json({ message: "Fetched Vendor", data });
    }
  } catch (error) {
    console.error(error);
  }
};

export { getvendor };
