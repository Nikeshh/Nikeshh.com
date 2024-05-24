import mongoose, {
    InferSchemaType,
    Model,
    ObtainSchemaGeneric,
    Schema,
  } from "mongoose";
  
export interface IProduct extends Document {
    name: string;
    price: number;
    description: string;
}

const productSchema: Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String
        }
    },
    {
        timestamps: true,
        collection: "products",
    }
);

type GenericModel<TSchema extends Schema = any> = Model<
    InferSchemaType<TSchema>,
    ObtainSchemaGeneric<TSchema, "TQueryHelpers">,
    ObtainSchemaGeneric<TSchema, "TInstanceMethods">,
    ObtainSchemaGeneric<TSchema, "TVirtuals">,
    TSchema
> &
ObtainSchemaGeneric<TSchema, "TStaticMethods">;


type ProductModel = GenericModel<typeof productSchema>;

export const Product =
(mongoose.models.Product as ProductModel) ||
mongoose.model("Product", productSchema);