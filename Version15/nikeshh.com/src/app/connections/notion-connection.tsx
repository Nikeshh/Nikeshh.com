'use server'

import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_API_SECRET,
})

export const onCreateNewPageInDatabase = async (
  databaseId: string,
  properties: any
) => {
  const response = await notion.pages.create({
    parent: {
      type: 'database_id',
      database_id: databaseId,
    },
    properties: properties,
  })
  if (response) {
    return response
  }
}