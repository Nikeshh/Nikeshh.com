'use server'

import { clerkClient, currentUser } from "@clerk/nextjs"
import { db } from "./db"

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

export const getServices = async () => {
  const response = await db.services.findMany({
    select: {
      id: true,
      name: true,
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