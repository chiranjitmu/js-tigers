import Vendor from "../models/vendorSchema.js";

const createvendor = async (req, res) => {
  try {
    const {
      vendorname,
      bankaccno,
      bankname,
      address1,
      address2,
      city,
      country,
      zipcode,
    } = req.body;

    const find = await Vendor.findOne({ bankaccno });

    if (find) {
      return res.status(500).json({ message: "Vendor already exists!" });
    }

    const vendor = await Vendor.create({
      vendorname,
      bankaccno,
      bankname,
      address1,
      address2,
      city,
      country,
      zipcode,
    });
    res.status(201).json({ message: "Vendor Created" });
  } catch (error) {
    console.error(error);
  }
};

export { createvendor };
