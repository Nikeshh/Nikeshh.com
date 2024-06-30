'use client'

import Link from 'next/link'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal, Pencil, X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu'
import { BlogPostWithAuthorDetails } from '../page'

export const columns: ColumnDef<BlogPostWithAuthorDetails>[] = [
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <div className="flex flex-row">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Title
            <ArrowUpDown className="w-4 h-4 ml-2" />
          </Button>

          {column.getIsSorted() && (
            <Button variant="ghost" onClick={() => column.clearSorting()}>
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      )
    },
  },
  {
    accessorKey: 'content',
    header: ({ column }) => {
      return (
        <div className="flex flex-row">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Content
            <ArrowUpDown className="w-4 h-4 ml-2" />
          </Button>

          {column.getIsSorted() && (
            <Button variant="ghost" onClick={() => column.clearSorting()}>
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      )
    },
    cell: ({ row }) => {
      const content = row.getValue('content');
      if (content) {
        return <div>{(row.getValue('content') as string).substring(0, 10) + "..."}</div>
      } else {
        return <></>
      }
    },
  },
  {
    accessorKey: 'published',
    header: ({ column }) => {
      return (
        <div className="flex flex-row">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Published
            <ArrowUpDown className="w-4 h-4 ml-2" />
          </Button>

          {column.getIsSorted() && (
            <Button variant="ghost" onClick={() => column.clearSorting()}>
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      )
    },
    cell: ({ row }) => {
      const isPublished = row.getValue('published') || false

      return (
        <Badge className={cn('bg-slate-500', isPublished && 'bg-sky-700')}>
          {isPublished ? 'Published' : 'Draft'}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'authorName',
    header: ({ column }) => {
      return (
        <div className="flex flex-row">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Author Name
            <ArrowUpDown className="w-4 h-4 ml-2" />
          </Button>

          {column.getIsSorted() && (
            <Button variant="ghost" onClick={() => column.clearSorting()}>
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      )
    },
    cell: ({ row }) => {
      return <div>{row.getValue('authorName')}</div>
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const { id } = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-4 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <Link href={`/admin/blogs/${id}`}>
              <DropdownMenuItem className="cursor-pointer">
                <Pencil className="w-4 h-4 mr-2" />
                Edit
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
