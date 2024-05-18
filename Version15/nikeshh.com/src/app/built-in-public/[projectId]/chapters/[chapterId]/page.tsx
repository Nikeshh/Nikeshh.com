import { Preview } from '@/components/preview';
import { Separator } from '@/components/ui/separator';

export default async function ChapterIdPage({
    params,
  }: {
    params: {
      projectId: string
      chapterId: string
    }
  }) {

    const chapter = {
        id: "fb8b5eb9-11fc-4655-87e7-37a07bf2285c",
        title: "Introduction",
        description: "<p>This is a chapter</p>",
        videoUrl:
          "https://utfs.io/f/d2d269ef-20f7-4bd8-ba53-b173bf97fd1d-ifdqzr.mp4",
        position: 1,
        isPublished: true,
        isFree: true,
        courseId: "fe015b36-fefc-432e-9fb9-d28ba67ecb58",
        createdAt: "2024-05-15T21:06:23.912Z",
        updatedAt: "2024-05-15T21:07:57.705Z",
    }

    return (
        <div>
            <div className="flex flex-col max-w-4xl pb-20 mx-auto">
                <div>
                    <div className="flex flex-col items-center justify-between p-4 md:flex-row">
                        <h2 className="mb-2 text-2xl font-semibold">{chapter.title}</h2>
                    </div>

                    <Separator />

                    <div>
                        <Preview value={chapter.description!} />
                    </div>
                </div>
            </div>
        </div>
    );
  }