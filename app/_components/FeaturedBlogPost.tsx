import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

export default function FeaturedBlogPost({
  imageSrc,
  imageAlt,
  href,
  date,
  heading,
}: {
  imageSrc: string | StaticImport
  imageAlt: string
  href: string
  date: ReactNode
  heading: ReactNode
}) {
  return (
    <>
      <Link href={href} className="featured-blog-post">
        <article className="flex flex-col md:grid grid-cols-[12] gap-8 px-6 my-6 md:my-16">
          <Image
            src={imageSrc}
            width={1000}
            height={1000}
            alt={imageAlt}
            priority
            fetchPriority="high"
            className="rounded-[12px] min-w-[280px] md:min-w-[400px] min-h-[300px] md:min-h-[300px] h-auto md:col-start-6 col-end-12 object-cover"
          />
          <div className="md:col-start-1 md:col-end-4 md:row-start-1 items-start flex flex-col justify-center">
            <span className="text-[14px] color-[#717171]">{date}</span>
            <h1 className="text-[22px] md:text-[40px] font-[700] mb-[24px]">
              {heading}
            </h1>
            <button className="hover:brightness-110 bg-[#3a86ff] text-[14px] text-white px-3 py-2 font-[600] rounded-[8px] !no-underline hover:no-underline">
              Read more
            </button>
          </div>
        </article>
      </Link>
    </>
  )
}
