'use server'

import { clerkClient, currentUser } from "@clerk/nextjs"
import { db } from "./db"
import { Prisma } from "@prisma/client"
import { v4 } from "uuid"

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

export const getTestimonials = async () => {
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
}

export const getSkills = async () => {
  const response = await db.skills.findMany({
    select: {
      id: true,
      name: true,
      category: true,
      points: true
    },
    orderBy: {
      category: 'asc',
    },
  });
  return response
}

export const getAllSkills = async () => {
  const response = await db.skills.findMany({
    select: {
      id: true,
      name: true,
      category: true,
      points: true
    },
    orderBy: {
      category: 'asc',
    },
  });
  return response
}

export const getServices = async () => {
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
}

export const getAllServices = async () => {
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
}

export const getProjects = async () => {
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
}

export const getAllProjects = async () => {
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
}

export const getBlogs = async () => {
  const response = await db.blogs.findMany({
    select: {
      id: true,
      title: true,
      subtitle: true,
      imageUrl: true,
    },
  });
  return response
}

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