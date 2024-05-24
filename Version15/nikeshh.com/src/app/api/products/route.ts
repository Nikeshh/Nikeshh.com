import connectDB from "@/lib/connectDB";
import { Product } from "@/app/store/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
    connectDB();
    try {
        const products = await Product.find({});
        return NextResponse.json(products);
    } catch (err: any) {
        return NextResponse.json({ error: err.message })
    }
}