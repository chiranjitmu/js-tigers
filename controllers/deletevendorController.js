import Vendor from "../models/vendorSchema.js";

const deletevendor = async (req, res) => {
  try {
    const id = req.params.id;
    const find = await Vendor.deleteOne({ _id: id });

    if (find) {
      res.status(200).json({ message: "deleted successfully" });
    }
  } catch (error) {
    console.error(error);
  }
};

export { deletevendor };
