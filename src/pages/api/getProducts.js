import { productModel } from "../../../Models/product";
import { connect } from "../../../Middleware/Mongoose";

async function handler(req, res) {
  let products = await productModel.find();

  res.status(200).json({ products });
}

export default connect(handler);
