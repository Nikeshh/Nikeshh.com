import { TQueryValidator } from "@/lib/validators/query-validator"
import { Product } from "../models/types"
import Link from 'next/link'
import ProductListing from './ProductListing'
import axios from 'axios'

interface ProductReelProps {
    title: string
    subtitle?: string
    href?: string
    query: TQueryValidator
}
  
const ProductReel = async (props: ProductReelProps) => {
    const { title, subtitle, href, query } = props;


    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/products`);
    const products: string | any[] = [];

    if (res && res.status == 200) {
      res.data.map((product: any) => {
        products.push(product);
      })
    }

    let map: (Product | null)[] = []
    if (products && products.length) {
      map = products
    }

    return (
        <section className='py-12'>
        <div className='md:flex md:items-center md:justify-between mb-4'>
          <div className='max-w-2xl px-4 lg:max-w-4xl lg:px-0'>
            {title ? (
              <h1 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
                {title}
              </h1>
            ) : null}
            {subtitle ? (
              <p className='mt-2 text-sm text-muted-foreground'>
                {subtitle}
              </p>
            ) : null}
          </div>
  
          {href ? (
            <Link
              href={href}
              className='hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block'>
              Shop the collection{' '}
              <span aria-hidden='true'>&rarr;</span>
            </Link>
          ) : null}
        </div>
  
        <div className='relative'>
          <div className='mt-6 flex items-center w-full'>
            <div className='w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8'>
              {map.map((product, i) => (
                <ProductListing
                  key={`product-${i}`}
                  product={product}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}

export default ProductReel;