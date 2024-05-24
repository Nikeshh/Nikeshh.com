import connectDB from "@/lib/connectDB";
import { Product } from "@/app/store/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    connectDB();
    try {
        const items = await Product.find({})
        return NextResponse.json(items);
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 400 })
    }
}