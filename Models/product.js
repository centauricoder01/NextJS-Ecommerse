const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    img: { type: String, require: true },
    slug: { type: String, require: true, unique: true },
    category: { type: String, require: true },
    color: { type: String },
    desc: { type: String, require: true },
    price: { type: Number, require: true },
    size: { type: String },
    Qty: { type: Number, require: true },
  },
  { timestamps: true }
);
mongoose.models = {};
const productModel = mongoose.models("Product", ProductSchema);
export { productModel };
