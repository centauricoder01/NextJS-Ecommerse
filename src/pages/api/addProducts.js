import productModel from "../../../Models/product";
import connect from "../../../utils/Mongoose";

async function handler(req, res) {
  await connect();
  try {
    for (let i = 0; i < req.body.length; i++) {
      let data = new productModel({
        title: req.body[i].title,
        img: req.body[i].img,
        slug: req.body[i].slug,
        category: req.body[i].category,
        color: req.body[i].color,
        desc: req.body[i].desc,
        price: req.body[i].price,
        size: req.body[i].size,
        Qty: req.body[i].Qty,
      });
      await data.save();
    }
    res.json({ message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

export default handler;
