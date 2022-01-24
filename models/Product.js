import mongoose from "mongoose";

// Create Mongoose Schema
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    requried: true,
  },
});
