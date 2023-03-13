import productModel from "../../../Models/product";
import connect from "../../../utils/Mongoose";

async function handler(req, res) {
  await connect();
  try {
    const pro = await productModel.find();
    res.json({ pro });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

export default handler;
