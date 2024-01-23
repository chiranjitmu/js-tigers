import Vendor from "../models/vendorSchema.js";

const editvendor = async (req, res) => {
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
    const id = req.params.id;

    const find = await Vendor.findOne({ bankaccno });
    const findid = await Vendor.findById({ _id: id });

    if (!find) {
      return res.status(500).json({ message: "Vendor not exists!" });
    }

    if (!findid) {
      return res.status(404).json({ message: "Wrong Id used for edit" });
    }

    findid.vendorname = vendorname;
    findid.bankaccno = bankaccno;
    findid.bankname = bankname;
    findid.address1 = address1;
    findid.address2 = address2;
    findid.city = city;
    findid.country = country;
    findid.zipcode = zipcode;

    // Save the updated vendor
    await findid.save();

    res.status(201).json({ message: "Vendor edited" });
  } catch (error) {
    console.error(error);
  }
};

export { editvendor };
