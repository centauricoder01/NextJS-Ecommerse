import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
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

const productModel = models.Product || model("Product", ProductSchema);

export default productModel;
