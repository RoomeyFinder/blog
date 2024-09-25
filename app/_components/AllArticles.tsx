import BlogPostItem from "./BlogPostItem"
import backupImage from "../images/featured.webp"
import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

export async function getBlogPosts() {
  const databaseId = process.env.NOTION_DATABASE_ID || ""
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: "Status",
          status: {
            equals: "Published",
          },
        },
        {
          property: "Featured",
          checkbox: {
            equals: false,
          },
        },
      ],
    },
  })
  return response.results.map((page) => {
    return {
      id: page.id,
      title: (page as any).properties?.["Content Title"]?.title?.[0].plain_text,
      publishedAt: (page as any).properties["Published Date"].date?.start,
      cover: (page as any).cover?.file?.url,
      publicUrl: (page as any).public_url,
    }
  })
}
type Post = {
  id: string
  isFeatured: boolean
  author: string
  statuus: string
  KW: string
  category: string
  title: string
  publishedAt: string
  cover: string
  publicUrl: string
}
export default async function AllArticles() {
  const posts: Partial<Post>[] = await getBlogPosts()

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {posts.map((post) => (
          <BlogPostItem
            key={post.id}
            imageSrc={post.cover || backupImage}
            imageAlt=""
            href={(post.publicUrl as string) || ""}
            date={new Date(post.publishedAt || Date.now()).toDateString()}
            heading={post.title}
          />
        ))}
      </div>
    </>
  )
}
