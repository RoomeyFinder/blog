import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

export default function BlogPostItem({
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
      <Link
        target="_blank"
        href={href}
        className="featured-blog-post w-full block"
      >
        <article className="grid grid-cols-2 sm:flex sm:flex-col gap-4">
          <Image
            src={imageSrc}
            width={1000}
            height={350}
            alt={imageAlt}
            loading="eager"
            className="rounded-[12px] w-full h-auto object-cover"
          />
          <div className="items-start flex flex-col justify-center">
            <h2 className="text-[18px] md:text-[22px] font-[700]">
              {heading}
            </h2>
            <span className="text-[14px] color-[#717171]">{date}</span>
          </div>
        </article>
      </Link>
    </>
  )
}
