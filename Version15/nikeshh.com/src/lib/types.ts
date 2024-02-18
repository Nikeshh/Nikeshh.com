import { z } from "zod";
import { Icons } from "@/components/icons";

export const NewsletterUserFormSchema = z.object({
    name: z.string().min(1, 'Required'),
    email: z.string().email(),
})

export const ContactUserFormSchema = z.object({
    name: z.string().min(1, 'Required'),
    email: z.string().email(),
})

export interface NavItem {
    title: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icons;
    label?: string;
    description?: string;
  }
  
  export interface NavItemWithChildren extends NavItem {
    items: NavItemWithChildren[];
  }
  
  export interface NavItemWithOptionalChildren extends NavItem {
    items?: NavItemWithChildren[];
  }
  
  export interface FooterItem {
    title: string;
    items: {
      title: string;
      href: string;
      external?: boolean;
    }[];
  }
  
  export type MainNavItem = NavItemWithOptionalChildren;
  
  export type SidebarNavItem = NavItemWithChildren;