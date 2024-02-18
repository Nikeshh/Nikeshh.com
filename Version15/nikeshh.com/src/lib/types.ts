import { z } from "zod";

export const NewsletterUserFormSchema = z.object({
    name: z.string().min(1, 'Required'),
    email: z.string().email(),
})

export const ContactUserFormSchema = z.object({
    name: z.string().min(1, 'Required'),
    email: z.string().email(),
})

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}