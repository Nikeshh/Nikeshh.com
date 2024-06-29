import { CourseMobileSidebar } from './course-mobile-sidebar'
import Navigation from '@/components/layout/navigation'

interface CourseNavbarProps {
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

export const CourseNavbar = ({ course, progressCount }: CourseNavbarProps) => {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div className="flex items-center h-full p-4 border-b shadow-sm">
        <CourseMobileSidebar course={course} progressCount={progressCount} />
      </div>
    </>
  )
}
