import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  id: {
    type: Schema.Types.Number,
    unique: true,
    required: true,
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
  price: {
    type: Schema.Types.String,
    required: true
  },
  image: {
    type: Schema.Types.String,
    required: true,
  },
  size: {
    type: Schema.Types.String,
    required: true,
  },
  // cost: {
  //   type: Schema.Types.Number,
  //   required: true,
  // },
  quantity: {
    type: Schema.Types.Number,
    required: true,
  },
  status: {
    type: Schema.Types.Boolean,
    default: true,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
