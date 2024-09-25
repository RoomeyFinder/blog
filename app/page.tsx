import { Metadata } from "next"
import FeaturedBlogPost from "./_components/FeaturedBlogPost"
import featuredImage from "./images/featured.webp"
import AllArticles from "./_components/AllArticles"
import { Client } from "@notionhq/client"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"

export const metadata: Metadata = {
  title: "Roomeyfinder Blog",
  description:
    "Discover expert tips, advice, and resources for finding the perfect roommate. From compatibility checks to lease agreements, our blog helps you navigate the roommate search with confidence. Join our community and make your living experience enjoyable!",
  keywords:
    "roommate, living situation, housing, accommodation, room, finder, room finder, roomie, roomey, room",
  robots: "index, follow",
  openGraph: {
    title: "RoomeyFinder Blog",
    description:
      "Discover expert tips, advice, and resources for finding the perfect roommate. From compatibility checks to lease agreements, our blog helps you navigate the roommate search with confidence. Join our community and make your living experience enjoyable!",
    url: "https://blog.roomeyfinder.com",
    images: [
      "https://pbs.twimg.com/profile_images/1742258368595595265/O5znt_ZT_400x400.jpg",
    ],
    type: "website",
    ttl: 3000,
    locale: "en-NG",
    alternateLocale: "en-US",
    countryName: "Nigeria",
    determiner: "a",
    emails: "support@roomeyfinder.com",
    siteName: "RoomeyFinder",
    phoneNumbers: "09011288423",
  },
  twitter: {
    title: "RoomeyFinder Blog",
    description:
      "Discover expert tips, advice, and resources for finding the perfect roommate. From compatibility checks to lease agreements, our blog helps you navigate the roommate search with confidence. Join our community and make your living experience enjoyable!",
    site: "roomeyfinder",
    images: [
      "https://pbs.twimg.com/profile_images/1742258368595595265/O5znt_ZT_400x400.jpg",
    ],
    creator: "exploitenomah",
    creatorId: "945750336823873537",
  },
  icons: [
    {
      url: "/logo.webp",
      sizes: "64x64",
    },
  ],
}
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

async function getBlogPosts() {
  const databaseId = process.env.NOTION_DATABASE_ID || ""
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Featured",
      checkbox: {
        equals: true,
      },
    },
  })
  return (
    response.results.map((page) => {
      return {
        id: page.id,
        title: (
          (page as PageObjectResponse).properties?.["Content Title"] as {
            title: { plain_text: string }[]
          }
        )?.title?.[0]?.plain_text,
        publishedAt: (
          (page as PageObjectResponse).properties["Published Date"] as {
            date: { start: string }
          }
        ).date?.start,
        cover: (
          (page as PageObjectResponse).cover as {
            type: "file"
            file: { url: string; expiry_time: string }
          }
        )?.file?.url,
        publicUrl: (page as PageObjectResponse).public_url,
      }
    })[0] || null
  )
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
  publicUrl: string | null
}
export default async function Home() {
  const featuredPost: Partial<Post> | null = await getBlogPosts()
  return (
    <div className="min-h-[80dvh] max-w-[1500px] mx-auto">
      {featuredPost ? (
        <>
          <FeaturedBlogPost
            imageSrc={featuredPost.cover || featuredImage}
            imageAlt={""}
            href={featuredPost.publicUrl || ""}
            date={featuredPost.publishedAt}
            heading={featuredPost.title}
          />
          <hr className="mt-[55px] mb-[35px] md:mt-[100px] md:mb-[50px] block border-[1.5px] border-[#ddd]/50 w-full" />
        </>
      ) : (
        <></>
      )}
      <section className="mb-16 w-[90dvw] max-w-[1500px] mx-auto">
        <h2 className="text-[22px] mb-[24px] font-[600]">All Articles</h2>
        <AllArticles />
      </section>
    </div>
  )
}
