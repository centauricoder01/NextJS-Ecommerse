import userModel from "../../../Models/user";
import connect from "../../../utils/Mongoose";

async function handler(req, res) {
  await connect();
  try {
    let data = new userModel(req.body);
    await data.save();
    res.json({ message: "User Added" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

export default handler;
