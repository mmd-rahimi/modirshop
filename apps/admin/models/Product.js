import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: String,
  price: String,
  image: String,
  description: String,
  category: String
}, {timestamps: true});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);