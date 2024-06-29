import { ProjectSidebarItem } from './project-sidebar-item'
import { CourseProgress } from '@/components/course-progress'

interface ProjectSidebarProps {
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

export const ProjectSidebar = async ({
  course,
  progressCount,
}: ProjectSidebarProps) => {
  return (
    <div className="flex flex-col overflow-y-auto border-r shadow-sm select-none">
      <div className="flex flex-col p-8 border-b">
        <h1 className="font-semibold">{course.title}</h1>
          <div className="mt-10">
            <CourseProgress variant="success" value={progressCount} />
          </div>
      </div>

      <div className="flex flex-col w-full">
        {course.chapters.map(chapter => (
          <ProjectSidebarItem
            id={chapter.id}
            key={chapter.id}
            courseId={course.id}
            label={chapter.title}
            isLocked={!chapter.isFree}
            isCompleted={chapter.isCompleted}
          />
        ))}
      </div>
    </div>
  )
}
