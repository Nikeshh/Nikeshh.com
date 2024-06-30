'use client'

import * as z from 'zod'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Pencil } from 'lucide-react'
import { BlogPost } from '@prisma/client'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormItem,
  FormField,
  FormMessage,
  FormControl,
} from '@/components/ui/form'
import { MultiSelectCombobox } from '@/components/ui/multi-select-combobox'

interface CategoryFormProps {
  blogId: string
  initialData: BlogPost & { categories: { id: number; name: string }[], comments: { id: number;
    content: string;
    postId: number;
    authorId: string;
    createdAt: Date;
    updatedAt: Date; }[] }
  options: {
    value: string
    label: string
  }[]
}

const formSchema = z.object({
  categoryIds: z.array(z.string().trim()).min(1, 'At least one category is required'),
});

export const CategoryForm = ({
  options,
  blogId,
  initialData,
}: CategoryFormProps) => {
  const router = useRouter()

  const [isEditing, setIsEditing] = useState(false)

  const toggleEdit = () => setIsEditing(prev => !prev)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryIds: initialData.categories.map(category => String(category.id)) || [],
    },
  })

  const { isSubmitting, isValid } = form.formState

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/blogs/${blogId}`, values)
      toast.success('Blog updated')
      toggleEdit()
      router.refresh()
    } catch (error) {
      toast.error('Something went wrong')
    }
  }

  const selectedOptions = initialData.categories.map(category => ({
    value: category.id,
    label: category.name,
  }))

  return (
    <div className="p-4 mt-6 border rounded-md bg-slate-100 dark:text-black">
      <div className="flex items-center justify-between font-medium">
        <span>Blog categories</span>

        <Button variant="ghost" onClick={toggleEdit}>
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="w-4 h-4 mr-2" />
              Edit categories
            </>
          )}
        </Button>
      </div>

      {!isEditing && (
        <div className="mt-2 text-sm">
          {selectedOptions.length > 0 ? (
            selectedOptions.map(option => (
              <p key={option.value}>{option.label}</p>
            ))
          ) : (
            <p className="text-slate-500 italic">No categories</p>
          )}
        </div>
      )}

      {isEditing && (
        <Form {...form}>
          <form
            className="mt-4 space-y-4 dark:text-white"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              name="categoryIds"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <MultiSelectCombobox options={options} {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center gap-x-2">
              <Button disabled={isSubmitting || !isValid} type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  )
}
