import mongoose from "mongoose";

const ObjectID = mongoose.Schema.Types.ObjectId

const productSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    product_files : {
        type: ObjectID,
        required: true,
        ref: 'ProductFile'
    },
    approvedForSale : {
        type: String, 
        enum: ["pending", "approved", "denied"],
        required: false,
    },
    priceId: {
        type: String,
        required: false
    },
    stripeId: {
        type: String,
        required: false
    },
    images: [
        {
            image: {
                type: String,
                required: true
            },
            id: {
                type: String,
                required: false
            },
        }
    ]
}, {
    timestamps: true,
    collection: "products"
})

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema)