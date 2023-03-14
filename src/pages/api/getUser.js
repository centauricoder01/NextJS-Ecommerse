import userModel from "../../../Models/user";
import connect from "../../../utils/Mongoose";

async function handler(req, res) {
  await connect();
  try {
    let data = await userModel.find();
    res.json({ AllUsers: data });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

export default handler;
