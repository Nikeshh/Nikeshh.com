'use client'

import * as z from 'zod'
import axios from 'axios'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form'

const formSchema = z.object({
  title: z.string().trim().min(1, 'Title is required'),
})

const CreatePage = () => {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
    },
  })

  const { isSubmitting, isValid } = form.formState

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post('/api/blogs', values)
      router.push(`/admin/blogs/${response.data.id}`)
      toast.success('Blog created')
    } catch (error) {
      toast.error('Something went wrong')
    }
  }

  return (
    <div className="flex h-full max-w-5xl p-6 mx-auto md:items-center md:justify-center">
      <div>
        <h1 className="text-2xl">Name your blog</h1>

        <p className="text-sm text-slate-600">
          What would you like to call your blog? Don&rsquo;t worry, you can
          change this later.
        </p>

        <Form {...form}>
          <form
            className="mt-8 space-y-8 dark:text-white"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blog Title</FormLabel>

                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Top 10 trends in AI'"
                      {...field}
                    />
                  </FormControl>

                  <FormDescription>
                    What is the name of the blog?
                  </FormDescription>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center gap-x-2">
              <Link href="/admin/courses">
                <Button type="button" variant="ghost">
                  Cancel
                </Button>
              </Link>

              <Button type="submit" disabled={!isValid || isSubmitting}>
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default CreatePage
