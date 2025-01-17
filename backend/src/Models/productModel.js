import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        image: {type: String, required: true},
        title: {type: String, required: true},
        category: {type: String, required: true},
        price: {type: Number, required: true}
    },
    {
        collection: "products",
        timestamps: true
    }
)

const product = mongoose.model("products", productSchema)

export default product