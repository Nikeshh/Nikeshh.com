import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
        url: 'https://nikeshh.com',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
    },
    {
        url: 'https://nikeshh.com/home',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
    },
    {
        url: 'https://nikeshh.com/about',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
    }
  ]
}