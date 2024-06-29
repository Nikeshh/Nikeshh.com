import { Menu } from 'lucide-react'
import { ProjectSidebar } from './project-sidebar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

interface CourseMobileSidebarProps {
  progressCount: number
  course: {
    id: string;
    userId: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    isPublished: boolean;
    categoryId: string;
    createdAt: string;
    updatedAt: string;
    chapters: {
      id: string;
      title: string,
      description: string,
      videoUrl: string,
      position: number,
      isPublished: boolean,
      isFree: boolean,
      courseId: string,
      createdAt: string,
      updatedAt: string;
      isCompleted: boolean;
    }[];
  }
}

export const CourseMobileSidebar = ({
  course,
  progressCount,
}: CourseMobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="pr-4 transition md:hidden hover:opacity-75">
        <p className='underline'>Chapters</p>
      </SheetTrigger>

      <SheetContent side="left" className="p-0 w-96 overflow-scroll">
        <ProjectSidebar course={course} progressCount={progressCount} />
      </SheetContent>
    </Sheet>
  )
}
