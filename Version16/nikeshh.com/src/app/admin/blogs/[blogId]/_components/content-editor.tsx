'use client'

import * as z from 'zod'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Pencil } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface ContentEditorProps {
  blogId: number
  initialData: {
    content: string | null
  }
}

export const ContentEditor = ({ blogId, initialData }: ContentEditorProps) => {

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']                                         // remove formatting button
  ];

  const modules = {
    toolbar: toolbarOptions
  }
  
  const router = useRouter()

  const [value, setValue] = useState(initialData.content ?? "");
  const [isEditing, setIsEditing] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const toggleEdit = () => {
    setIsEditing(prev => !prev);
    setIsSubmitting(false);
  }

  const onSubmit = async () => {
    try {
        setIsSubmitting(true);
        await axios.patch(`/api/blogs/${blogId}`, { content: value })
        toast.success('Blog updated')
        toggleEdit()
        router.refresh()
    } catch (error) {
        toast.error('Something went wrong')
        setIsSubmitting(false);
    }
  }

  return (
    <div className="p-4 mt-6 border rounded-md bg-slate-100 dark:text-black">
      <div className="flex items-center justify-between font-medium">
        <span>Blog content</span>

        <Button variant="ghost" onClick={toggleEdit}>
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="w-4 h-4 mr-2" />
              Edit content
            </>
          )}
        </Button>
      </div>

      {!isEditing && <p className="mt-2 text-sm">Number of characters: {initialData.content?.length} <br/> Click <span className='text-blue-800'>&ldquo;Edit Content&rdquo;</span> to edit the blog content</p>}

      {isEditing && (
        <>
            <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />
            <div className="flex items-center gap-x-2 my-2">
              <Button disabled={isSubmitting} type="submit" onClick={() => onSubmit()}>
                Save
              </Button>
            </div>
        </>
      )}
    </div>
  )
}
