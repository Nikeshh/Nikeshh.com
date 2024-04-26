'use server'

import { clerkClient, currentUser } from "@clerk/nextjs"
import { db } from "./db"
import { Prisma } from "@prisma/client"
import { v4 } from "uuid"
import { cache } from 'react'

export const revalidate = 3600 // revalidate the data at most every hour

export const getAuthUserDetails = async () => {
    const user = await currentUser()
    if (!user) {
      return
    }
  
    const userData = await db.user.findUnique({
      where: {
        email: user.emailAddresses[0].emailAddress,
      }
    })
  
    return userData
}

export const getTestimonials = cache(async () => {
  const response = await db.testimonials.findMany({
    select: {
      id: true,
      content: true,
      name: true,
      designation: true,
      avatarUrl: true,
      companyLogoUrl: true
    },
  });
  return response
})

export const getSkills = cache(async () => {
  const response = await db.skills.findMany({
    select: {
      id: true,
      name: true,
      category: true,
      imageUrl: true,
      points: true
    },
    orderBy: {
      category: 'asc',
    },
  });
  return response
})

export const getAllSkills = cache(async () => {
  const response = await db.skills.findMany({
    select: {
      id: true,
      name: true,
      category: true,
      imageUrl: true,
      points: true
    },
    orderBy: {
      category: 'asc',
    },
  });
  return response
})

export const getServices = cache(async () => {
  const response = await db.services.findMany({
    select: {
      id: true,
      name: true,
      subtitle: true,
      category: true,
      subcategory: true
    },
    orderBy: {
      category: 'asc',
    },
  });
  return response
})

export const getAllServices = cache(async () => {
  const response = await db.services.findMany({
    select: {
      id: true,
      name: true,
      subtitle: true,
      category: true,
      subcategory: true
    },
    orderBy: {
      category: 'asc',
    },
  });
  return response
})

export const getProjects = cache(async () => {
  const response = await db.projects.findMany({
    select: {
      id: true,
      name: true,
      subtitle: true,
      category: true
    },
    orderBy: {
      category: 'asc',
    },
  });
  return response
})

export const getAllProjects = cache(async () => {
  const response = await db.projects.findMany({
    select: {
      id: true,
      name: true,
      subtitle: true,
      category: true
    },
    orderBy: {
      category: 'asc',
    },
  });
  return response
})

export const getBlogs = cache(async () => {
  const response = await db.blogs.findMany({
    select: {
      id: true,
      title: true,
      subtitle: true,
      imageUrl: true,
    },
  });
  return response
})

export const getAllBlogs = cache(async () => {
  const response = await db.blogs.findMany({
    select: {
      id: true,
      title: true,
      subtitle: true,
      imageUrl: true,
      category: true
    },
  });
  return response
})

export const upsertNewsletter = async (
  newsletter: Prisma.NewsletterUncheckedCreateInput
) => {
  const response = await db.newsletter.upsert({
    where: { id: newsletter.id || v4() },
    update: newsletter,
    create: newsletter,
  })
  return response
}

export const createContact = async (
  contact: Prisma.ContactUncheckedCreateInput
) => {
  const response = await db.contact.create({
    data: contact
  })
  return response
}