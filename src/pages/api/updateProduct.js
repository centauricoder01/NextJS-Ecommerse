import productModel from "../../../Models/product";
import connect from "../../../utils/Mongoose";

async function handler(req, res) {
  await connect();
  try {
    for (let i = 0; i < req.body.length; i++) {
      await productModel.findByIdAndUpdate(req.body[i]._id, req.body[i]);
    }
    res.json({ message: "Product Updated" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

export default handler;
