import { NewsletterUserFormSchema } from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { LegacyRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Loading from '../global/loading'

type Props = {
  title: string
  subTitle: string
  apiCall: (values: z.infer<typeof NewsletterUserFormSchema>) => any
  newsletterRef: LegacyRef<HTMLFormElement>
}

const NewsletterForm = ({ apiCall, subTitle, title, newsletterRef}: Props) => {
  const form = useForm<z.infer<typeof NewsletterUserFormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(NewsletterUserFormSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  })
  const isLoading = form.formState.isLoading
  
  return (
    <Card className="w-[350px] md:w-[650px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subTitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            ref={newsletterRef}
            onSubmit={form.handleSubmit(apiCall)}
            className="flex flex-col gap-4"
          >
            <FormField
              disabled={isLoading}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="mt-4"
              disabled={isLoading}
              type="submit"
            >
              {form.formState.isSubmitting ? <Loading /> : 'Subscribe!'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default NewsletterForm