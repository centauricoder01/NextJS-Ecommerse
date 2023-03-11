const mongoose = require("mongoose");

const connect = async (handler) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect(process.env.MONGO_URL);
  return handler(req, res);
};

module.exports = { connect };
