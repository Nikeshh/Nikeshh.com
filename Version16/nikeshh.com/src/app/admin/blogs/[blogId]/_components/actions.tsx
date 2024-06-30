'use client'

import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { useConfettiStore } from '@/hooks/use-confetti-store'
import { ConfirmModal } from '@/components/modals/confirm-modal'

interface ActionsProps {
  blogId: number
  disabled: boolean
  isPublished: boolean
}

export const Actions = ({ blogId, disabled, isPublished }: ActionsProps) => {
  const router = useRouter()
  const { onOpen } = useConfettiStore()

  const [isLoading, setIsLoading] = useState(false)

  const togglePublish = async () => {
    try {
      setIsLoading(true)

      if (isPublished) {
        await axios.patch(`/api/blogs/${blogId}/unpublish`)
      } else {
        await axios.patch(`/api/blogs/${blogId}/publish`)
        onOpen()
      }

      router.refresh()
    } finally {
      setIsLoading(false)
    }
  }

  const onClick = async () => {
    toast.promise(togglePublish(), {
      loading: 'Updating blog...',
      error: 'Something went wrong',
      success: isPublished ? 'Blog unpublished' : 'Blog published',
    })
  }

  const removeBlog = async () => {
    try {
      setIsLoading(true)
      await axios.delete(`/api/blogs/${blogId}`)

      router.refresh()
      router.push('/admin/blogs')
    } finally {
      setIsLoading(false)
    }
  }

  const onDelete = async () => {
    toast.promise(removeBlog(), {
      loading: 'Deleting blog...',
      success: 'Blog deleted',
      error: 'Something went wrong',
    })
  }

  return (
    <div className="flex items-center gap-x-2">
      <Button
        size="sm"
        variant="outline"
        onClick={onClick}
        disabled={disabled || isLoading}
      >
        {isPublished ? 'Unpublish' : 'Publish'}
      </Button>

      <ConfirmModal onConfirm={onDelete}>
        <Button size="sm" disabled={isLoading}>
          <Trash className="w-4 h-4" />
        </Button>
      </ConfirmModal>
    </div>
  )
}
