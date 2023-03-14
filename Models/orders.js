import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
  {
    userId: { type: String, require: true },
    product: [
      { productId: { type: String }, quantity: { type: Number, default: 1 } },
    ],
    address: { type: String, require: true },
    amount: { type: String, default: "Pending", require: true },
    status: { type: String, default: "Pending", require: true },
  },
  { timestamps: true }
);

const orderModel = models.Order || model("Order", OrderSchema);

export default orderModel;
