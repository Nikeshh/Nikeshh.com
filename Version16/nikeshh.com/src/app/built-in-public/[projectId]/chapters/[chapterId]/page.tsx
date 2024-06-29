import { Preview } from '@/components/preview';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import projects_data from '@/app/built-in-public/projects_data';
import parse from 'html-react-parser';

export default async function ChapterIdPage({
    params,
  }: {
    params: {
      projectId: string
      chapterId: string
    }
  }) {

    const project = projects_data.filter((project) => project.id == params.projectId)[0];
    const chapter = project.chapters.filter((chapter) => chapter.id == params.chapterId)[0];

    return (
        <div>
            <div className="flex flex-col max-w-4xl pb-20 mx-auto">
                <div>
                    <div className="flex flex-col items-center justify-between p-4 md:flex-row">
                        <h2 className="mb-2 text-2xl font-semibold">{chapter.title}</h2>
                    </div>

                    <Separator />

                    <div>
                        {/*<Preview value={chapter.description!} />*/}
                        {parse(chapter.description)}
                    </div>
                </div>
            </div>
        </div>
    );
  }