"use client"

import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import parse from 'html-react-parser';
import '../style.css';
import { getProject } from "@/lib/queries";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import tomorrow from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night';
import FieldDetails from "./fieldDetails";

export default function Page() {
  const uid = "mongodb-crud---nextjs";
  const data = getProject(uid);

  const CONTENT_1 = `npx create-next-app@latest crud-mongodb --typescript --eslint
  cd crud-mongodb
  `

  const CONTENT_2 = `mongodb+srv://<username>:<password>@<cluster_url>/?retryWrites=true&w=majority&appName=Cluster0`

  const CONTENT_3 = `
    npm i mongoose
  `

  const CONTENT_4 = `
  import { Model, Schema, model, models } from "mongoose";

  interface Listing {
      _id?: string;
      title: string;
      description: string;
      bundle_products: Record<string, string>;
      company: string;
      company_logo: string;
      price: number;
      stripe_product_id?: string;
      bundle_product_price: number;
      features: string[];
      about: string;
      tags: string[];
      stack: string[];
      category: string;
      sub_category?: string;
    }
  
  const listingSchema = new Schema<Listing>(
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      bundle_products: { type: Map, of: String },
      company: { type: String, required: true },
      company_logo: { type: String, required: true },
      price: { type: Number, required: true },
      stripe_product_id: { type: String, default: "" },
      bundle_product_price: { type: Number, required: true },
      features: { type: [String], required: true },
      about: { type: String, required: true },
      tags: { type: [String], required: true },
      stack: { type: [String], required: true },
      category: { type: String, required: true },
      sub_category: { type: String, default: "" },
    },
    {
      timestamps: true,
      collection: "listings",
    }
  );
  
  export const Listing: Model<Listing> = models.Listing || model<Listing>("Listing", listingSchema);
`

  const CONTENT_5 = `
  import mongoose from "mongoose";

declare global {
  var mongoose: any;
}

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error(
    "Please define the MONGODB_URL environment variable inside .env"
  );
}

let cached = global.mongoose as any;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      dbName: "digital-products",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    if (!MONGODB_URL) {
      throw new Error(
        "Please define the MONGODB_URL environment variable inside .env"
      );
    }

    cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;`

const CONTENT_6 = `
import connectDB from "@/lib/connectDB";
import { Listing } from "@/app/models/Listing";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await connectDB();
    try {
        const items = await Listing.find({})
        return NextResponse.json({ success: true, data: items });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 400 })
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    await connectDB();
    try {
        const data = await req.json();
        const listing = new Listing(data);
        await listing.save();
        return NextResponse.json({ success: true, data: listing });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 400 })
    }
}`

const CONTENT_7 = `
import connectDB from "@/lib/connectDB";
import { Listing } from "@/app/models/Listing";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  const { id } = params;

  try {
    const listing = await Listing.findById(id);
    if (!listing) {
      return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: listing });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    await connectDB();
    const { id } = params;
  
    try {
      const data = await req.json();
      const updatedListing = await Listing.findByIdAndUpdate(id, data, { new: true });
      if (!updatedListing) {
        return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, data: updatedListing });
    } catch (err: any) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    await connectDB();
    const { id } = params;
  
    try {
      const deletedListing = await Listing.findByIdAndDelete(id);
      if (!deletedListing) {
        return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
      }
      return NextResponse.json({ message: 'Listing deleted successfully' });
    } catch (err: any) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
  }`

  const CONTENT_8 = `npm i axios`

  const CONTENT_9 = `
"use client"

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface Listing {
  _id?: string;
  title: string;
  description: string;
  bundle_products: Record<string, string>;
  company: string;
  company_logo: string;
  price: number;
  stripe_product_id?: string;
  bundle_product_price: number;
  features: string[];
  about: string;
  tags: string[];
  stack: string[];
  category: string;
  sub_category?: string;
}

const Admin = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [formData, setFormData] = useState<Listing>({
    title: '',
    description: '',
    bundle_products: {},
    company: '',
    company_logo: '',
    price: 0,
    stripe_product_id: '',
    bundle_product_price: 0,
    features: [],
    about: '',
    tags: [],
    stack: [],
    category: '',
    sub_category: ''
  });

  const fetchListings = async () => {
    const response = await axios.get('/api/listings');
    setListings(response.data.data);
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleArrayChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof Listing) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [field]: value.split(',')
    });
  };

  const handleObjectChange = (e: ChangeEvent<HTMLInputElement>, field: keyof Listing) => {
    const { name, value } = e.target;
    const currentFieldData = formData[field] as Record<string, any> || {};

    setFormData({
      ...formData,
      [field]: {
        ...currentFieldData,
        [name]: value
      }
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData._id) {
      await axios.put(\`/api/listings/\${formData._id}\`, formData);
    } else {
      await axios.post('/api/listings', formData);
    }
    setFormData({
      title: '',
      description: '',
      bundle_products: {},
      company: '',
      company_logo: '',
      price: 0,
      stripe_product_id: '',
      bundle_product_price: 0,
      features: [],
      about: '',
      tags: [],
      stack: [],
      category: '',
      sub_category: ''
    });
    fetchListings();
  };

  const handleEdit = (listing: Listing) => {
    setFormData(listing);
  };

  const handleDelete = async (id: string) => {
    await axios.delete(\`/api/listings/\${id}\`);
    fetchListings();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">MongoDB CRUD</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Bundle Products (key:value)</label>
          {Object.entries(formData.bundle_products).map(([key, value]) => (
            <div key={key} className="flex mb-2">
              <input
                type="text"
                name={key}
                value={value}
                onChange={(e) => handleObjectChange(e, 'bundle_products')}
                className="w-full p-2 border"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => setFormData({ ...formData, bundle_products: { ...formData.bundle_products, '': '' } })}
            className="bg-gray-500 text-white p-2"
          >
            Add Bundle Product
          </button>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Company Logo</label>
          <input
            type="text"
            name="company_logo"
            value={formData.company_logo}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Stripe Product ID</label>
          <input
            type="text"
            name="stripe_product_id"
            value={formData.stripe_product_id}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Bundle Product Price</label>
          <input
            type="number"
            name="bundle_product_price"
            value={formData.bundle_product_price}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Features (comma separated)</label>
          <input
            type="text"
            name="features"
            value={formData.features.join(',')}
            onChange={(e) => handleArrayChange(e, 'features')}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">About</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Tags (comma separated)</label>
          <input
            type="text"
            name="tags"
            value={formData.tags.join(',')}
            onChange={(e) => handleArrayChange(e, 'tags')}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Stack (comma separated)</label>
          <input
            type="text"
            name="stack"
            value={formData.stack.join(',')}
            onChange={(e) => handleArrayChange(e, 'stack')}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Sub Category</label>
          <input
            type="text"
            name="sub_category"
            value={formData.sub_category}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">
          {formData._id ? 'Update' : 'Create'}
        </button>
      </form>
      <h2 className="text-xl mb-4">Listings</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Title</th>
            <th className="py-2">Description</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((listing) => (
            <tr key={listing._id}>
              <td className="border px-4 py-2">{listing.title}</td>
              <td className="border px-4 py-2">{listing.description}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleEdit(listing)} className="bg-yellow-500 text-white p-2 mr-2">
                  Edit
                </button>
                <button onClick={() => handleDelete(listing._id!)} className="bg-red-500 text-white p-2">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
`;



  return (
    <>
      <Navigation />
      <StarGrid />
      <Bounded as="article">
        <div className="relative grid place-items-center text-center">
          <h1 className="text-4xl font-medium">
            {data.name}
            <p className="text-lg text-yellow-500">
              {" ◦ "}
              {data.tags.map((tag, index) => (
                <span key={index}>
                  {tag} {" ◦ "}
                </span>
              ))}
            </p>
          </h1>
          <p className="mb-4 mt-8 max-w-xl text-lg text-slate-300">
            {data.subtitle}
          </p>
          <Image 
            src={data.imageUrl}
            alt="product image"
            width={640}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="flex justify-center mt-4">
          <p>Check out: <Link href={data.link} target="_blank" className="underline hover:text-blue-500">{data.linkType}</Link></p>
        </div>
        <div className="mt-4 flex flex-col flex-wrap justify-start gap-4">
          <p className="dark:text-neutral-400 text-xl underline">Steps to implement CRUD operation using MongoDB and Nextjs</p>
          <p>Create a tailwind project in Nextjs (Any framework of your choice). I just created with Nextjs and I am using app router instead of pages router. </p>
          <p>Refer to <Link href={"https://tailwindcss.com/docs/installation/framework-guides"} target="_blank" className="hover:text-blue-500 underline">Tailwind Docs</Link> for more details on configuring tailwind</p>
          <div className="w-full flex justify-start my-4 md:justify-center">
            <div className="w-80 sm:w-[800px] lg:w-full">
              <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers>
                {CONTENT_1}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="w-full flex justify-start my-4 md:justify-center">
            <Image 
              src={"/projects/development_showcase/crud-mongodb/project-creation.png"}
              height={640}
              width={640}
              alt="Project creation image"
              className="my-4"
            />
          </div>
          <p>Refer to <Link href={"https://tailwindcss.com/docs/guides/nextjs"} target="_blank" className="hover:text-blue-500 underline"> Tailwind Docs </Link>for nextjs tailwind configuration</p>
          <p>After configuration, if you have both tailwind.config.js and tailwind.config.ts in the root folder, just delete tailwind.config.js</p>
          <p>Let’s configure mongodb which is the database we are going to use.</p>
          <p>You can use the Mongodb cloud (Mongodb atlas) or local mongodb. i just used the local one.</p>
          <p>Go to <Link href={"https://cloud.mongodb.com/"} target="_blank" className="hover:text-blue-500 underline">Mongodb website</Link> and create a cluster. Click on connect, you will get the url.</p>
          <p>It would look something like:</p>
          <div className="w-full flex justify-start my-4 md:justify-center">
            <div className="w-80 sm:w-[800px] lg:w-full">
              <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers>
                {CONTENT_2}
              </SyntaxHighlighter>
            </div>
          </div>
          <p>Create MONGODB_URL variable in .env file and add the db url</p>
          <p>To explore, you can use Mongodb compass, and use the same URL to connect to the cluster</p>
          <p>Let’s get some backend stuffs done</p>
          <p>1. Install moongose package</p>
          <div className="w-full flex justify-start my-4 md:justify-center">
            <div className="w-80 sm:w-[800px] lg:w-full">
              <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers>
                {CONTENT_3}
              </SyntaxHighlighter>
            </div>
          </div>
          <p>2. Create Listing.ts under models</p>
          <div className="w-full flex justify-start my-4 md:justify-center">
            <div className="w-80 sm:w-[800px] lg:w-full">
              <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers>
                {CONTENT_4}
              </SyntaxHighlighter>
            </div>
          </div>
          <p>In this Listing is the “listings” is the mongodb collection and Listing is the model and schema fields are:</p>
          <FieldDetails />
          <p>Now, lets write a utility function to connect to db. Under lib folder create connectDb.ts</p>
          <div className="w-full flex justify-start my-4 md:justify-center">
            <div className="w-80 sm:w-[800px] lg:w-full">
              <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers>
                {CONTENT_5}
              </SyntaxHighlighter>
            </div>
          </div>
          <p>We are using cache because we don’t want to create multiple database connections (Singleton pattern).</p>
          <p>Also, in the opts, name of the db is provided. If not given, it will connect to Test db.</p>
          <p>Let’s write the API’s. Create a api folder, and inside that create listings folder. Create a route.ts file. This will be the path of the API endpoint i.e., /api/listings</p>
          <p>route.ts:</p>
          <div className="w-full flex justify-start my-4 md:justify-center">
            <div className="w-80 sm:w-[800px] lg:w-full">
              <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers>
                {CONTENT_6}
              </SyntaxHighlighter>
            </div>
          </div>
          <p>Here i have defined GET and POST endpoints. GET endpoint gets all the data from the listings collection. I use NextRequest as the req parameter to get the API data and NextResponse as the res parameter to send back the response from the API.</p>
          <p>Create another folder [id]. Any API with the id at the end will land into this folder. i.e., /api/listings/665939ecdbac3c0698f8ba4b. Here 665939ecdbac3c0698f8ba4b is the object id.</p>
          <p>Inside the folder, create route.ts file.</p>
          <p>route.ts:</p>
          <div className="w-full flex justify-start my-4 md:justify-center">
            <div className="w-80 sm:w-[800px] lg:w-full">
              <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers>
                {CONTENT_7}
              </SyntaxHighlighter>
            </div>
          </div>
          <p>Here, I have created three endpoints, GET, PUT and DELETE.</p>
          <p>1. GET endpoint returns the listing for the given id.</p>
          <p>2. PUT endpoint is used to update the listing for given id. If id not found, the endpoint will throw an error.</p>
          <p>3. DELETE endpoint is used to delete the listing for given id. If id not found, the endpoint will throw an error.</p>
          <p>Backend API’s are ready</p>
          <p>For the frontend to communicate to APIs in the server, we need to install axios. Let’s install axios</p>
          <div className="w-full flex justify-start my-4 md:justify-center">
            <div className="w-80 sm:w-[800px] lg:w-full">
              <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers>
                {CONTENT_8}
              </SyntaxHighlighter>
            </div>
          </div>
          <p>Let’s modify the page.tsx in the app folder. For simplicity, I will just add a form with fields and a button to save the listing. I have also added a table with actions like Edit and Delete to manipulate the listings collection</p>
          <div className="w-full flex justify-start my-4 md:justify-center">
            <div className="w-80 sm:w-[800px] lg:w-full">
              <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers>
                {CONTENT_9}
              </SyntaxHighlighter>
            </div>
          </div>
          <p>That’s all. Use npm run dev to run the project</p>
          <p>For validation, use zod. It is much easier and simpler to implement</p>
          <p>Thanks for reading! If you want to edit this article, drop me a mail at nikeshhbaskaran01@gmail.com</p>
        </div>
        <div className="mt-4 rich-text flex justify-center">
          {parse(data.content)}
        </div>
        <div className="flex justify-center mt-4">
          <p>Check out: <Link href={data.link} target="_blank" className="underline hover:text-blue-500">{data.linkType}</Link></p>
        </div>
      </Bounded>
      <Footer />
    </>
  );
}
